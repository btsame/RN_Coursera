import React, {View,
  Navigator} from 'react-native';

import LoginComponent from './LoginComponent';

export default class NavigatorComponent extends React.Component{
  render(){
    var defaultName = 'navigatorComponent';
    var defaultComponent = LoginComponent;
    return(
      <Navigator
      initialRoute={{name: defaultName, component: defaultComponent}}
      configureScene={(route) => {
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
      }}
      renderScene={(route, navigator) => {
        var Component = route.component;
        return <Component {...route.params} navigator={navigator}/>
      }} />
    )
  }
}
