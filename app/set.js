/**
 * Created by jh on 2017/2/27.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    AsyncStorage,
    View
} from 'react-native';
// import start1 from './container/app';
import PasswordGesture from 'react-native-gesture-password';
import check from './check'
let Password1 = '';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '请设置您的密码',
            status: 'normal'
        }
    }

    onEnd(password) {
        if ( Password1 === '' ) {
            // The first password
            Password1 = password;
            this.setState({
                status: 'normal',
                message: '请确认您的密码'
            });

        } else {
            // The second password
            if ( password === Password1 ) {
                global.password=Password1
                AsyncStorage.setItem("password", global.password, (error, result)=> {

                })
                const {navigator} = this.props;
                navigator.resetTo({
                    component: check,
                    params:{
                        theme:this.theme
                    }
                });
                // this.setState({
                //     status: 'right',
                //     message: '你设置的密码为' + password
                // });
                Password1 = '';
            } else {
                this.setState({
                    status: 'wrong',
                    message:  '两次密码不一致，请重试'
                });
            }
        }
    }

    onStart() {
        if ( Password1 === '') {
            this.setState({
                message: '请设置您的密码'
            });
        } else {
            this.setState({
                message: '请确认您的密码'
            });
        }
    }

    render() {
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