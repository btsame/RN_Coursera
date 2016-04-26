import React, {View,
  Text,
  StyleSheet,
  TouchableOpacity} from 'react-native';

import MainComponent from './MainComponent';

export default class LoginComponent extends React.Component{
  render(){
    var loginText = '登录';
    var registerText = '注册';
    return(
      <View style={styles.container}>
        <TouchableOpacity >
          <Text>
            {loginText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            {registerText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
