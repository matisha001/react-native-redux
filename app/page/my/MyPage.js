import React , { Component } from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';
import ViewUtils from "../../components/ViewUtils"
import GlobalStyles from "../../global/GlobalStyles"
import px2dp from "../../global/px2dp"
import * as MyshopPage from "./Myshop"
import * as MyRedPage from "./MyRed"
import * as MyMessagePage from "./MyMessage"
import * as MySuggestionPage from "./MySuggestion"
import * as MyTestPage from "./MyTest"
import connectComponent from "../../global/connectComponent"
const Myshop = connectComponent(MyshopPage);
const MyRed = connectComponent(MyRedPage);
const MyMessage = connectComponent(MyMessagePage);
const MySuggestion = connectComponent(MySuggestionPage);
const MyTest = connectComponent(MyTestPage);

import NavigationBar from "../../components/NavigationBar"
const MORE_MENU = {
    Myshop:'Myshop',
    MyMessage:'MyMessage',
    MySuggestion:'MySuggestion',
    MyRed:"MyRed"
}
class MyPage extends Component {
    constructor (props){
        super(props);
    }

    componentWillMount (){

    }
    onClick(tab) {
        const { navigator } = this.props;
        let TargetComponent, params = {...this.props, theme: GlobalStyles.theme};
        switch (tab) {
            case MORE_MENU.Myshop:
                TargetComponent = Myshop;
                break;
            case MORE_MENU.MyRed:
                TargetComponent = MyRed;
                break;
            case MORE_MENU.MyMessage:
                TargetComponent = MyMessage;
                break;
            case MORE_MENU.MySuggestion:
                TargetComponent = MySuggestion;
                break;
        }
        if (TargetComponent) {
            this.props.navigator.push({
                component: TargetComponent,
                params: params,
            });

        }else{
            this.props.navigator.push({
                component: TargetComponent,
                params: params,
            });
        }
    }
    getItem(tag, icon, text) {
        return ViewUtils.getSettingItem(() => this.onClick(tag), icon, text,);
    }
    shouldComponentUpdate(nextProps){
        if(nextProps.My.videos == this.props.My.videos){
            return false
        }
        return true
    }
    render (){
        const { My,navigator } = this.props;
        return (
            <View style={GlobalStyles.listView_container}>
                <NavigationBar
                    navigator={this.props.navigator}
                    popEnabled={false}
                    style={styles.titleBar}
                />
                <View style={styles.content}>
                    <View>
                        <Text style={{fontSize:px2dp(50),color:"#fff",marginBottom:px2dp(145)}}>我的账户</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",height:px2dp(100),marginBottom:px2dp(30)}}>
                        <Text style={{fontSize:px2dp(100),color:"#fff",}}  numberOfLines={1}>{global.accountBalance?global.accountBalance:"0.00"}元</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:px2dp(40),color:"#fafafa",}}>待结算金额</Text>
                    </View>
                </View>
                <ScrollView ref={component => this._scrollView = component}>
                    <View style={GlobalStyles.line}/>
                    {this.getItem(MORE_MENU.Myshop, null, '我的店铺')}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(MORE_MENU.MyRed, null, '我的红包')}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(MORE_MENU.MySuggestion, null, '意见反馈')}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(MORE_MENU.MyMessage, null, '我的消息')}
                    <View style={GlobalStyles.line}/>
                    <View style={[styles.setting_item_container]}>
                        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{opacity: 1, width: 16, height: 16, marginRight: 10,}}/>
                            <Text>当前版本1.0</Text>
                        </View>
                    </View>
                    <View style={GlobalStyles.line}/>
                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={this.logout}>
                        <Text
                            style={styles.logoutBtnText}>退出登录</Text>
                    </TouchableOpacity>
                    <View style={[{marginBottom: 60}]}/>
                </ScrollView>
            </View>
        )
    }
}

const userImg = 40;
const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
    content:{
        height:px2dp(505),
        backgroundColor:GlobalStyles.theme.themeColor,
        alignItems:"center",
    },
    logoutBtnText: {
        color: '#ffffff',
        fontSize: 20,
    },
    logoutBtn: {
        backgroundColor: GlobalStyles.theme.themeColor,
        width: px2dp(900),
        height: px2dp(130),
        marginTop: px2dp(40),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:px2dp(20),
    },
    setting_item_container: {
        backgroundColor: 'white',
        padding: px2dp(20), height: px2dp(123),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})

export const LayoutComponent = MyPage;
export function mapStateToProps(state){
    return {
        My : state.My,
    }
}
