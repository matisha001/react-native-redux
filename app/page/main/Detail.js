import React , { Component } from 'react';
import {
  Navigator ,
  View ,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Dimensions
} from 'react-native';

class Detail extends Component {
  constructor (props){
    super(props);

  }

  componentWillMount(){
    // const { aid } = this.props;
    // const { getArticleDetail } = this.props.actions;
    // getArticleDetail(aid)
  }

  componentWillUnmount(){
    // const { actions } = this.props;
    // actions.clearCacheDetail();
  }
  render (){
    // const { data } = this.props.Detail;
    return (
      <View style={[styles.container]}>
          <Text>28319021</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingBottom:Platform.OS == 'ios' ? 0 : 50,
  },
})
export const LayoutComponent = Detail;
export function mapStateToProps(state){
  return {
    Detail : state.Detail
  }
}
