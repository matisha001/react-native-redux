
import React , { Component } from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    Image,
    Dimensions,
    RefreshControl,
    Platform
} from 'react-native';
import * as DetailPage from "./Detail"
import connectComponent from "../../global/connectComponent"
const Detail = connectComponent(DetailPage);
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class MainPage extends Component {
    constructor (props){
        super(props);
        this._onRefresh = this._onRefresh.bind(this);
    }
    GoPage =(e,rowData)=>{
        const { navigator } = this.props;
        if(!rowData) return;
        navigator.push({
            name : rowData.title,
            component : Detail,
            params : {
                aid : rowData.id
            }
        })
    }
    componentWillMount (){
        this._getList({
            page : 1,
            limit : 10
        })
    }

    _getList({page,limit}){
        const { actions } = this.props;
        console.log(arguments)
        actions.getList({
            page,
            limit
        })
    }

    _onReached (){
        const { Main } = this.props;
        console.log(Main)
        if(Main.page==1) return;

        const { isDownLoad } = this.props.actions;
        isDownLoad(true);
        this._getList({
            page : Main.page
        })
    }

    _onRefresh (){
        const { actions } = this.props;
        actions.getList({
            page : 1,
            limit : 10
        })
    }

    render (){
        const { data , downLoadStatus , page , getTopicsIsPending} = this.props.Main;
        return (
            <View style={[styles.container]}>
                {
                    data ?
                        <ListView
                            dataSource={ds.cloneWithRows(data || [])}
                            renderRow={this._renderRow.bind(this)}
                            initialListSize={10}
                            onEndReached={this._onReached.bind(this)}
                            onEndReachedThreshold={0}
                            pageSize={3}
                            showsVerticalScrollIndicator={true}
                            removeClippedSubviews={true}
                            enableEmptySections={true}
                            refreshControl={
                              <RefreshControl
                                refreshing={getTopicsIsPending || false}
                                onRefresh={this._onRefresh}
                                tintColor="#ff0000"
                                title="Loading..."
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                              />
                            }
                        /> :
                        null
                }
            </View>
        )
    }
    _renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity
                onPress={ (e)=>{this.GoPage(e,rowData)}}
            >
                <View style={[styles.rows]}>
                    <Image style={styles.article}
                           source={{uri: rowData.author.avatar_url}}
                           defaultSource={require('../../image/wechat.png')}
                    />
                    <Text style={[styles.articleTitle]} numberOfLines={1}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingBottom: Platform.OS == 'ios' ? 48 : 20,
        paddingVertical : 5
    },
    rows : {
        padding : 10,
        borderBottomWidth : 1,
        borderStyle : 'solid',
        borderBottomColor : '#eee',
        flexDirection : 'row',
        height : 80,
        alignItems:"center"
    },
    article : {
        width : 50,
        height : 50,
        borderRadius : 25,
        marginRight:10,
    },
    articleTitle : {
        fontSize : 16,
        flex : 1
    }
})

export const LayoutComponent = MainPage;
