import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    AsyncStorage,
    View
} from 'react-native';

import PasswordGesture from 'react-native-gesture-password';
import start1 from './container/app';

export default class App2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '请输入你的密码',
            status: 'normal'
        }
    }
    componentDidMount() {
        AsyncStorage.getItem("password", (error, result)=> {
            if (result) {
                global.password = result;
            }
        })
    }
    onEnd(password) {
        if (password == global.password) {
            // this.setState({
            //     status: 'right',
            //     message: '密码正确'
            // });
            const {navigator} = this.props;
            navigator.resetTo({
                component: start1,
                params:{
                    theme:this.theme
                }
            });
        } else {
            this.setState({
                status: 'wrong',
                message: '密码错误，请重试'
            });
        }
    }

    onStart() {
        this.setState({
            status: 'normal',
            message: '请输入你的密码'
        });
    }

    onReset() {
        this.setState({
            status: 'normal',
            message: '请再次输入你的密码'
        });
    }

    render() {
        // alert(global.password)
        return (
            <PasswordGesture
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
                innerCircle={true}
                outerCircle={true}
            />
        );
    }
}

// AppRegistry.registerComponent('AppDemo', () => AppDemo);