import React, {
  Image,
  Text,
  ToolbarAndroid,
  StyleSheet
} from 'react-native';

class TitleBarComponent extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <ToolbarAndroid
      style={styles.container}
      title='Discovery'
      subtitle="发现你的专属课程"
      navIcon={require('../drawable/icon_menu.png')}
      actions={[{title: '搜索', icon: require('../drawable/icon_search.png'), show: 'never', showWithText: true}]}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#6666ff',
    alignItems: 'center'
  }
});

export default TitleBarComponent;
