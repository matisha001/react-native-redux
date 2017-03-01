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
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import NavigationBar from "../../components/NavigationBar"
import ViewUtils from "../../components/ViewUtils"
import BaseCommon from '../../global/BaseCommon'
import GlobalStyles from'../../global/GlobalStyles'
import px2dp from "../../global/px2dp"
class MySuggestion extends Component {
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
                    title="意见反馈"
                />
                <View>
                    <View style={{marginTop:px2dp(20),marginBottom:px2dp(50),height:px2dp(150)}}>
                        <TextInput
                            style={[styles.cardNumberInputStyle,{height:px2dp(150),fontSize: 15,}]}
                            placeholder="邮箱"
                            underlineColorAndroid="transparent"
                            onChangeText={(text)=>this.mailChange(text)}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={[styles.cardNumberInputStyle,{height:px2dp(400),textAlignVertical: "top",fontSize: 15,}]}
                            placeholder="请填写反馈意见(必填)"
                            multiline={true}
                            underlineColorAndroid="transparent"
                            onChangeText={(text)=>this.suggesChange(text)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.logoutBtn,{backgroundColor: GlobalStyles.theme.themeColor}]}
                            disabled={false}
                            activeOpacity={0.3}
                            onPress={this.submit}
                        >
                            <Text style={[styles.logoutBtnText,{opacity: 1}]}>提交</Text>
                        </TouchableOpacity>
                    </View>
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
    cardNumberInputStyle:{
        paddingLeft:px2dp(50),
        backgroundColor:'white',
        width:width,
    },
    logoutBtnText: {
        color: '#ffffff',
        fontSize: 20,
    },
    logoutBtn: {
        width: px2dp(900),
        height: px2dp(130),
        marginTop: px2dp(40),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:px2dp(20),
    },
})

export const LayoutComponent = MySuggestion;

