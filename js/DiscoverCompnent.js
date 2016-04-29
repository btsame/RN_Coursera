import React, {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import TitleBarComponent from './TitleBarComponent';
var thisComponent;

class DiscoverComponent extends React.Component{
  constructor(props){
    super(props);

    thisComponent = this;

    const categories = ['艺术与人文', '商务', '计算机科学', '数据科学', '生命科学', '数学和逻辑',
                        '个人发展', '物理科学与工程', '社会科学', '语言学习'];
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: dataSource.cloneWithRows(categories),
    };
  }

  render(){
    return(
      <View style={styles.container}>
      <TitleBarComponent/>
      <ListView
      contentContainerStyle={styles.list}
      dataSource={this.state.dataSource}
      renderRow = {this.renderRow}
      />

      </View>
    );
  }

  _pressRow(rowID){
    ToastAndroid.show('rowID:' + rowID, ToastAndroid.SHORT);
  }

  renderRow(rowData, sectionID, rowID){
    return(
      <TouchableOpacity onPress={() => thisComponent._pressRow(rowID)} style={styles.itemDecoration} underlayColor="transparent">
        <View style={styles.item}>
          <Text style={styles.text}>
            {rowData}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackground: {
    flex: 1,
    width: 100,
    height: 800

  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  itemDecoration: {
    width: 150,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 10,

    backgroundColor: '#44ff44',

    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  item: {
    width: 140,
    height: 40,

    justifyContent: 'center',

    backgroundColor: '#ececec'
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default DiscoverComponent;
