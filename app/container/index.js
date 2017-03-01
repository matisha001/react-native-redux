import React , { Component } from 'react';
import { Navigator , View , Text , Image , StyleSheet , Dimensions} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TabView from './tabview';


class FeInnApp extends Component {
    constructor (props){
        super(props);
        // this.configureScene = this.configureScene.bind(this)
    }

    componentWillReceiveProps(nextProps) {

    }
    render (){
        const { state , actions } = this.props;
        let defaultName = '首页';
        let defaultComponent = TabView;
        return (
                <Navigator
                    initialRoute={{ name: defaultName, component: defaultComponent }}
                    renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...this.props} {...route.params} navigator={navigator} />
            }}
                />
        )
    }
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        height,
        width,
        backgroundColor: 'transparent'
    }
});
export const LayoutComponent = FeInnApp;
export function mapStateToProps(state){
    console.log(state)
    return {
        Main : state.Main,
        Tab : state.Tab,
    }
}
