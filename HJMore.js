import React, {Component} from 'react';
import {
	ListView,
	Platform,
  	StyleSheet,
  	Text,
  	View,
    Image,
    TouchableHighlight,
} from 'react-native';


var styles = require('./HJStyles');


var HJMore = React.createClass({
  getInitialState: function() {
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    dataSource: ds.cloneWithRows(['推荐财经头条给好友', '去App Store给财经头条评分',
    '意见反馈', '清除缓存', '财经头条'])
  }
},

//分割线
renderSeparator:function(
  sectionID: number | string,
  rowID: number | string,
  adjacentRowHighlighted: boolean
){
  var style = (rowID == 0 || rowID == 3) ?  styles.more_cell_row_separator : styles.more_cell_row_no_separator;
  // if (adjacentRowHighlighted) {
  //   style = [style, styles.home_cell_row_Separator_hide];
  // };
  return (
    <View key = {'SEP_'+ sectionID + '_' + rowID} style={style}/>
  );
},

  renderRow:function(
    shopData: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ){


    if (rowID == 0) {
      return (
        <TouchableHighlight
        style = {styles.more_cell_parent}
        // onSelect={() => this.selectShop(shopData)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}>
          <View style = {styles.more_cell_highlight}>
            <View style = {styles.more_cell_top_line}></View>
            <View style = {styles.more_cell_content_view}>
              <Text style = {styles.more_cell_title} numberOfLines = {1}>{shopData}</Text>
              <Text numberOfLines = {1}>             </Text>
              <Image source = {rowID <= 3 ? require('image!indicator_right') : ''} style = {styles.more_right_indicator}></Image>
            </View>
            <View style = {styles.more_cell_bottom_line}></View>
          </View>

        </TouchableHighlight>
      );

    }else if (rowID == 1) {
      return (
        <TouchableHighlight
        style = {styles.more_cell_parent}
        // onSelect={() => this.selectShop(shopData)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}>
          <View style = {styles.more_cell_highlight}>
            <View style = {styles.more_cell_top_line}></View>
            <View style = {styles.more_cell_content_view}>
              <Text style = {styles.more_cell_title} numberOfLines = {1}>{shopData}</Text>
              <Text numberOfLines = {1}>             </Text>
              <Image source = {rowID <= 3 ? require('image!indicator_right') : ''} style = {styles.more_right_indicator}></Image>
            </View>
          </View>

        </TouchableHighlight>
      );
    }else if (rowID == 2) {
      return (
        <TouchableHighlight
        style = {styles.more_cell_parent}
        // onSelect={() => this.selectShop(shopData)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}>
          <View style = {styles.more_cell_highlight}>
            <View style = {[styles.more_cell_top_line, styles.more_cell_separator_line_marginLeft]}></View>
            <View style = {styles.more_cell_content_view}>
              <Text style = {styles.more_cell_title} numberOfLines = {1}>{shopData}</Text>
              <Text numberOfLines = {1}>             </Text>
              <Image source = {rowID <= 3 ? require('image!indicator_right') : ''} style = {styles.more_right_indicator}></Image>
            </View>
          </View>

        </TouchableHighlight>
      );
    }
    else if (rowID == 3) {
      return (
        <TouchableHighlight
        style = {styles.more_cell_parent}
        // onSelect={() => this.selectShop(shopData)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}>
          <View style = {styles.more_cell_highlight}>
            <View style = {[styles.more_cell_top_line, styles.more_cell_separator_line_marginLeft]}></View>
            <View style = {styles.more_cell_content_view}>
              <Text style = {styles.more_cell_title} numberOfLines = {1}>{shopData}</Text>
              <Text style = {styles.more_cell_content_text_color} numberOfLines = {1}>0.67M </Text>
              <Image source = {rowID <= 3 ? require('image!indicator_right') : ''} style = {styles.more_right_indicator}></Image>
            </View>
            <View style = {styles.more_cell_bottom_line}></View>
          </View>

        </TouchableHighlight>
      );
    }else if (rowID == 4) {
      return (
        <TouchableHighlight
        style = {styles.more_cell_parent}
        // onSelect={() => this.selectShop(shopData)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}>
          <View style = {styles.more_cell_highlight}>
            <View style = {styles.more_cell_top_line}></View>
            <View style = {styles.more_cell_content_view}>
              <Text style = {styles.more_cell_title} numberOfLines = {1}>{shopData}</Text>
              <Text style = {styles.more_cell_content_text_color} numberOfLines = {1}>V 1.1</Text>
              <Image source = {rowID <= 3 ? require('image!indicator_right') : ''} style = {styles.more_right_indicator}></Image>
            </View>
            <View style = {styles.more_cell_bottom_line}></View>
          </View>

        </TouchableHighlight>
      );
    }


  },







  render() {
    return (
      <ListView
       style = {styles.more_listView_top}
       dataSource = {this.state.dataSource}
       renderRow = {this.renderRow}
       renderSeparator = {this.renderSeparator}

      />
    );
  }







});


module.exports = HJMore;
