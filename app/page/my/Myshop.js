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
import px2dp from "../../global/px2dp"
import ViewUtils from "../../components/ViewUtils"
import BaseCommon from '../../global/BaseCommon'
import GlobalStyles from'../../global/GlobalStyles'
class Myshop extends Component {
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
                    navigator={navigator}
                    leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                    popEnabled={false}
                    title="我的店铺"
                />
                <Image  source={{uri:"http://www.ijrzn.com/ijrzn_files/cms/2016/12/29/0117726d64da4acaac862e67b6f2b53b.jpg"}} style={styles.img}/>
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
    img: {
        height: px2dp(720),
        width: width,
    },
});

export const LayoutComponent = Myshop;

