/**
 * 全局样式
 * @flow
 */
import {
    Dimensions,
    StyleSheet,
} from 'react-native'

const {height, width} = Dimensions.get('window');
const themeFlag='#3E55C5';
module.exports ={
    line: {
        height: 1,
        opacity:0.5,
        backgroundColor: 'darkgray',
    },
    cell_container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:2
    },
     listView_container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundColor: '#fff',
    listView_height:(height-(20+40)),
    window_height:height,
    window_width:width,
    nav_bar_height_ios:44,
    nav_bar_height_android:50,

    theme:{
        themeColor:themeFlag,
        backgroundColor:'#eee',
        styles:StyleSheet.create({
            selectedTitleStyle:{
                color: themeFlag
            },
            tabBarSelectedIcon: {
                tintColor: themeFlag
            },
            navBar:{
                backgroundColor:themeFlag,
            },
            themeColor:{
                color:themeFlag
            },

        })
    }


};