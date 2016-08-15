/*
* sudoku style grid:
* props from parent: data, info
* data: json data like: ./Example/roles.json
* info: a js file render how girdCell click to show by navigator, like: ./Example/roleInfo.js
*/
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  ListView,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Animated,
} from 'react-native';


var item_width = Dimensions.get('window').width/4;
var item_height = item_width;

var GridCell = require('./gridCell');


var sudokuGrid = React.createClass({
  getInitialState: function() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    return {
      dataSource: this.getDataSource(this.props.data),
    };
  },

  render: function() {
    // var rolePicName = roles.roles[0].rolePicName;
    // var roleName = roles.roles[0].roleName;
    var content = <ListView
      contentContainerStyle={styles.list}
      ref="listview"
      dataSource={this.getDataSource(this.props.data)}
      renderRow={this.renderRow}
      // automaticallyAdjustContentInsets={false}
      pageSize={4}

      />;
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  },

  renderRow: function (
    listItem: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <GridCell
        style={styles.item}
        onPress={()=> this.selectCell(listItem)}
        cell={listItem}
      />
    );
  },

  getDataSource: function(items: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(items);
  },

  selectCell: function(listItem: Object) {
    if (listItem.search_detail_url.length == 0) {
      return;
    }
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: listItem.name,
        component: this.props.info,
        passProps: {listItem},
        titleTextColor: 'white',
        barTintColor: 'rgba(216.0, 42.0, 42.0, 1.0)',

      });
    }
    // else {
    //   dismissKeyboard();
    //   this.props.navigator.push({
    //     title: item.itemName,
    //     name: 'movie',
    //     movie: movie,
    //   });
    // }
  },

});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },

  item: {
      margin: 0,
      backgroundColor: 'white',
  },
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

module.exports = sudokuGrid;
