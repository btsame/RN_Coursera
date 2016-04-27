import React, {View,
  Text,
  StyleSheet,
  TouchableOpacity} from 'react-native';

import MainComponent from './MainComponent';
import Colors from './Colors'

export default class LoginComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var loginText = '登  录';
    var registerText = '注  册';
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {loginText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
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
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingVertical: 10,
    paddingHorizontal: 30,

    marginVertical: 10,

    width: 200,
    height: 50,

    borderColor: '#ff0000',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 20,
    backgroundColor: '#ffff00',
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',

    color: '#00ff00',

    fontWeight: 'bold',
    fontSize: 20,
  },
});
