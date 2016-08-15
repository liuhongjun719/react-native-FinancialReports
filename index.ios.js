/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

var styles = require('./HJStyles');
var HJHomeListView = require('./HJHomeListView');

var roleData = require('./roles.json');
var SudokuGrid = require('react-native-sudoku-grid');

var HJMore = require('./HJMore');

var JZWebView = require('./JZWebView');



var RoleSudokuGrid = React.createClass({
  render: function() {
    return (
      <SudokuGrid
       data = {roleData.items}
       info = {JZWebView}
       navigator={this.props.navigator}
      />
    );
  }
});


var FinancialReports = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'home'
    }
  },

  _changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },

  render: function() {
    return (
      <TabBarIOS
       barTintColor = 'rgba(242.0, 242.0, 242.0, 1.0)'
       titleTextColor = 'white'>
       <TabBarIOS.Item
        title = '财经头条'
        // icon={{uri: 'home_normal', scale: 2}}
        // icon={require('image!home_normal')}
        // selectedIcon={require('image!home_selected')}
        systemIcon = "most-recent"
        tintColor = 'rgba(216.0, 42.0, 42.0, 1.0)'
        unselectedTintColor = '#d3d3d3'
        onPress = {() => this._changeTab('home')}
        selected = {this.state.selectedTab === 'home'}>
        <NavigatorIOS
         style = {styles.home_container}
         initialRoute = {{
           title: '财经头条',
           titleTextColor: 'white',
           barTintColor: 'rgba(216.0, 42.0, 42.0, 1.0)',
           component:HJHomeListView,
           backButtonTitle: '首页',
           tintColor: 'white',
         }}
         />
       </TabBarIOS.Item>

       <TabBarIOS.Item
        title = '发现'
        // icon={require('image!search_normal')}
        // selectedIcon={require('image!search_selected')}
        systemIcon = 'search'
        tintColor = 'rgba(216.0, 42.0, 42.0, 1.0)'
        unselectedTintColor = '#d3d3d3'
        onPress = {() => this._changeTab('find')}
        selected = {this.state.selectedTab === 'find'}>
        <NavigatorIOS
         style = {styles.home_container}
         initialRoute = {{
           title: '发现',
           titleTextColor: 'white',
           barTintColor: 'rgba(216.0, 42.0, 42.0, 1.0)',
           component: RoleSudokuGrid,
           backButtonTitle: '发现',
           tintColor: 'white',
         }}
         />
       </TabBarIOS.Item>

       <TabBarIOS.Item
        title = '更多'
        // icon={require('image!more_normal')}
        // selectedIcon={require('image!more_selected')}
        systemIcon = 'more'
        tintColor = 'rgba(216.0, 42.0, 42.0, 1.0)'
        unselectedTintColor = '#d3d3d3'
        onPress = {() => this._changeTab('more')}
        selected = {this.state.selectedTab === 'more'}>
        <NavigatorIOS
         style = {styles.home_container}
         initialRoute = {{
           title: '更多',
           titleTextColor: 'white',
           barTintColor: 'rgba(216.0, 42.0, 42.0, 1.0)',
           component: HJMore,
           backButtonTitle: '更多',
           tintColor: 'white',
         }}
         />
       </TabBarIOS.Item>

      </TabBarIOS>

    );
  }
});



AppRegistry.registerComponent('FinancialReports', () => FinancialReports);
