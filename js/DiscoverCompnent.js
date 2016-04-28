import React, {
  View,
  Text,
  ListView
} from 'react-native';

class DiscoverComponent extends React.Component{
  constructor(props){
    super(props);

    const categories = ['艺术与人文', '商务', '计算机科学', '数据科学', '生命科学', '数学和逻辑',
                        '个人发展', '物理科学与工程', '社会科学', '语言学习'];
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: dataSource.cloneWithRows(categories),
    };
  }

  render(){
    return(
      <ListView
      dataSource={this.state.dataSource}
      column={2}
      renderRow = {(rowData) => {
        return <Text>{rowData}</Text>
      }}
      />
    );
  }
}

export default DiscoverComponent;
