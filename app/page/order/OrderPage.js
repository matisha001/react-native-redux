
import React , { Component } from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    RefreshControl
} from 'react-native';


class OrderPage extends Component {
    constructor (props){
        super(props);
        this._onScroll = this._onScroll.bind(this);
        this.loadList = this.loadList.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    componentWillMount(){
        this.loadList()
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.Order.photos == this.props.Order.photos){
            return false
        }
        return true
    }

    loadList (){
        const { actions , Order } = this.props;
        actions.getPhoto({
            page : Order.page,
            limit: Order.limit
        })
    }
    _onRefresh (){
        this.loadList()
    }

    _onScroll(e) {
        const { actions , Order } = this.props;
        let scrollH = e.nativeEvent.contentSize.height; //scrollview的高度
        let y = e.nativeEvent.contentOffset.y;//当前滑动显示的y轴坐标
        let height = e.nativeEvent.layoutMeasurement.height ;//显示部分高度
        if (scrollH - y < height) {//处理加载更多
            // this._loadmore();

            actions.getPhoto({
                page : Order.page + 1,
                limit: Order.limit
            })
        }
    }

    render (){
        const { Order } = this.props;
        return (
            <View style={[styles.container]}>

                <ScrollView style={{flex:1}}
                            onScroll={this._onScroll}
                            initialListSize={1}
                            pageSize={1}
                            refreshControl={
                            <RefreshControl
                              refreshing={Order.getPhotosIsPending}
                              onRefresh={this._onRefresh}
                              tintColor="#ff0000"
                              title="Loading..."
                              colors={['#ff0000', '#00ff00', '#0000ff']}
                              progressBackgroundColor="#ffff00"
                            />
                          }
                >
                </ScrollView>
            </View>
        )
    }
}
const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingBottom : 50
    },
})
export const LayoutComponent = OrderPage;
export function mapStateToProps(state){
    return {
        Order : state.Order,
    }
}
