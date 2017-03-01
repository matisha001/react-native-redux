import React , { Component } from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ListView,
    RefreshControl,
    Platform
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class MyPage extends Component {
    constructor (props){
        super(props);
        this.renderVideoRow = this.renderVideoRow.bind(this);
        this.loadList = this.loadList.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    componentWillMount (){
        this.loadList();
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.My.videos == this.props.My.videos){
            return false
        }
        return true
    }

    loadList (){
        const { actions , My } = this.props;
        actions.getVideo({
            page : My.page,
            limit: My.limit
        })
    }

    _onRefresh (){
        this.loadList();
    }

    _onEndReached (){
        console.log(1)
        const { actions , My } = this.props;
        actions.getVideo({
            page : My.page+1,
            limit: My.limit
        })
    }

    renderVideoRow (row){
        return (
            <View style={styles.videoWrap}>
                <View style={styles.dirRow}>
                    <Image
                        style={styles.userImg}
                        resizeMode="contain"
                        source={{ uri: row.profile_image }}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={{flex:1}}>{row.name}</Text>
                        <Text style={{color:'#ccc',flex:1}}>{row.create_time}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render (){
        const { My } = this.props;
        return (
            <View style={[styles.container]}>
                <ListView
                    dataSource={ds.cloneWithRows(My.videos || [])}
                    renderRow={this.renderVideoRow}
                    pageSize={1}
                    initialListSize={1}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0}
                    removeClippedSubviews={true}
                    enableEmptySections={true}
                    refreshControl={
                    <RefreshControl
                      refreshing={false}
                      onRefresh={this._onRefresh}
                      tintColor="#ff0000"
                      title="Loading..."
                      colors={['#ff0000', '#00ff00', '#0000ff']}
                      progressBackgroundColor="#ffff00"
                    />
                  }
                />

            </View>
        )
    }
}

const userImg = 40;
const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingBottom : Platform.OS =='ios' ? 45 : 0
    },
    videoWrap : {
        padding : 10,
        borderBottomWidth : 1,
        borderColor : '#eee',
        overflow:'hidden'
    },
    userImg : {
        width : userImg,
        height :userImg,
        borderRadius : userImg/2,
        marginRight : 5
    },
    dirRow : {
        flexDirection : 'row'
    }

})

export const LayoutComponent = MyPage;
export function mapStateToProps(state){
    return {
        My : state.My,
    }
}
