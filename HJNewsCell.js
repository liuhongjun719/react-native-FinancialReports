/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
 Image,
 PixelRatio,
 Platform,
 StyleSheet,
 Text,
 TouchableHighlight,
 TouchableNativeFeedback,
 View
} from 'react-native';

//变量
var getImageSource = require('./getImageSource');
var styles = require('./HJStyles');

var HJNewsCell = React.createClass({
  render: function() {
    var TouchableElement = TouchableHighlight;

    return(
      <View>
       <TouchableElement
        onPress = {this.props.onSelect}
        onShowUnderlay = {this.props.onHighlight}
        onHideUnderlay = {this.props.onUnhighlight}>
        <View style = {styles.home_cell_row}>
         <Image
          source = {getImageSource(this.props.shopData, 'thumbnail')}
          style = {styles.home_cell_image}
         />
         <View style = {styles.home_cell_textContainer}>
          <Text style = {styles.home_cell_title} numberOfLines = {2}>
           {this.props.shopData.title}
          </Text>

          <Text style = {styles.home_cell_source} numberOfLines={2}>
           {this.props.shopData.title}
          </Text>

          <Text style = {styles.home_cell_ptime_color}>
          {this.props.shopData.ga_prefix}
          </Text>
         </View>
        </View>
       </TouchableElement>
      </View>
    );
  },
});

module.exports = HJNewsCell;
