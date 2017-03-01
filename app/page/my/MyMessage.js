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
class MyMessage extends Component {
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
                    title="我的消息"
                />
                <Text>我的消息</Text>
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
})

export const LayoutComponent = MyMessage;

