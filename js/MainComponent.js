import React, {
  AppRegistry,
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  View
} from 'react-native';

export default class MainComponent extends Component {
  render() {
    var navigationView = (
      <View style={styles.container}>
        <Text style={styles.instructions}>I am a drawer</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
      drawerWidth={200}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome yangbo!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
      </DrawerLayoutAndroid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
