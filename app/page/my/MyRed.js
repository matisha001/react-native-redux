/**
 * Created by jh on 2017/3/1.
 */
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
import NavigationBar from "../../components/NavigationBar"
import ViewUtils from "../../components/ViewUtils"
import BaseCommon from '../../global/BaseCommon'
import GlobalStyles from'../../global/GlobalStyles'
import px2dp from "../../global/px2dp"
class MyRed extends Component {
    constructor (props){
        super(props);
        this.baseCommon=new BaseCommon({...props,backPress:(e)=>this.onBackPress(e)});
    }

    componentWillMount (){

    }
    componentDidMount() {
        this.baseCommon.componentDidMount();
    }
    componentWillUnmount() {

        this.baseCommon.componentWillUnmount();
    }
    onBackPress(e){
        this.onBack();
        return true;
    }
    onBack() {
        // Keyboard.dismiss();
        this.props.navigator.pop();
    }
    render (){

        return (
            <View style={styles.container}>
                <NavigationBar
                    navigator={this.props.navigator}
                    leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                    popEnabled={false}
                    style={GlobalStyles.theme.styles.navBar}
                    title="我的红包"
                />
                <Image  style={styles.img} source={require('../../image/redbao_bg.png')} />
                <Image  style={styles.img2} source={require('../../image/pic1.png')} />
                <View  style={{alignItems:'center',}}>
                    <Text style={{fontSize:px2dp(52),color:'#000',marginTop:px2dp(130)}}>{this.props.from?"恭喜发财":"红包总额"}</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:px2dp(10),height:px2dp(160)}}>
                        <Text style={{fontSize:px2dp(52),color:'#d3321f'}}>共
                            <Text style={{fontSize:px2dp(144)}}>100</Text>
                            元</Text>
                    </View>
                    <Image  style={styles.img1} source={require('../../image/border.png')} />
                    <Text style={{fontSize:px2dp(49),color:'#212121',marginTop:px2dp(87)}}>瑞祥捷通的红包</Text>
                    <Text style={{fontSize:px2dp(43),color:'#666666',marginTop:px2dp(37)}}>收到的红包已存入红包账户</Text>
                </View>
            </View>
        )
    }
}


const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.theme.backgroundColor,
    },
    img:{
        width:Dimensions.get('window').width,
        height:px2dp(838),
    },
    img1:{
        height:px2dp(4),
        width:px2dp(987),
        alignSelf:"center",
        marginTop:px2dp(75)
    },
    img2:{
        position:"absolute",
        height:px2dp(158),
        width:px2dp(158),
        top:px2dp(900),
        left:px2dp(461)

    }
})

export const LayoutComponent = MyRed;

