
import React , { Component } from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    TouchableHighlight,
    NavigatorIOS,
    TabBarIOS,
    Dimensions,
    Platform,
    Image
} from 'react-native';
import * as MainPage from '../page/main/MainPage';
import * as OrderPage from '../page/order/OrderPage';
import * as MyPage from '../page/my/MyPage';
import connectComponent from '../global/connectComponent';
import GlobalStyles from '../global/GlobalStyles'
import TabNavigator from 'react-native-tab-navigator';
const Main = connectComponent(MainPage);
const Order = connectComponent(OrderPage);
const My = connectComponent(MyPage);

export default class TabView extends Component {
    constructor (props){
        super(props);
    }

    _renderComponent (){

    }

    isActive (currentTab){
        const { Tab } = this.props;
        if(Tab.selectedTab == currentTab){
            return true;
        }
        return false
    }



    renderTabber(){
        const { tabChange } = this.props.actions;
        return (
            <TabNavigator
                sceneStyle={{paddingBottom: 0}}
            >
                <TabNavigator.Item
                    selected={this.isActive('main')}
                    title="首页"
                    selectedTitleStyle={GlobalStyles.theme.styles.selectedTitleStyle}
                    renderIcon={() => <Image
                    style={styles.tabBarIcon}
                    source={require('../image/tab1.png')}/>}
                    renderSelectedIcon={() => <Image
                    style={styles.tabBarIcon}
                    source={require('../image/tab1a.png')}/>}
                    onPress={()=>{tabChange('main')}}>
                    <View style={{flex:1}}><Main {...this.props} /></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.isActive('order')}
                    title="订单"
                    selectedTitleStyle={GlobalStyles.theme.styles.selectedTitleStyle}
                    renderIcon={() => <Image
                    style={styles.tabBarIcon}
                    source={require('../image/tab2.png')}/>}
                    renderSelectedIcon={() => <Image
                    style={styles.tabBarIcon}
                    source={require('../image/tab2a.png')}/>}
                    onPress={()=>{tabChange('order')}}>
                    <View style={{flex:1}}><Order {...this.props} /></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                selected={this.isActive('my')}
                title="我的"
                selectedTitleStyle={GlobalStyles.theme.styles.selectedTitleStyle}
                renderIcon={() => <Image
                    style={styles.tabBarIcon}
                    source={require('../image/tab3.png')}/>}
                renderSelectedIcon={() => <Image
                    style={styles.tabBarIcon}
                    source={require('../image/tab3a.png')}/>}
                onPress={()=>{tabChange('my')}}>
                <View style={{flex:1}}><My {...this.props} /></View>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
                {this.renderTabber()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 26, height: 26,
        resizeMode: 'contain',
    },
});
export function mapStateToProps(state){
    return {
        Tab : state.Tab,
    }
}