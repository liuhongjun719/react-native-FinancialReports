/*
* props from parent: cell, onPress;
* cell is a json data contains: picName, name;
*/

'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';


var item_width = Dimensions.get('window').width/4;
var item_height = item_width;



var gridCell = React.createClass({
  render: function() {
    var picName = this.props.cell.picName;
    var name = this.props.cell.name;

    var TouchableElement = TouchableOpacity;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };

    return (
      <View>
        <TouchableElement
          onPress={this.props.onPress}>
          <View style={styles.container}>
            <Image style={styles.cellImage} source={{uri:picName}} />
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        </TouchableElement>
      </View>

    );
  },



});

var styles = StyleSheet.create({
  container: {
    flex:1,
    width:item_width,
    height:item_height,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  name: {
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(76.0, 74.0, 75.0, 1)',

  },
  cellImage: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    width: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'stretch',
  },
});

module.exports = gridCell;
