/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 愁眉弯唇皆是为你从此眉间心上再无一人
 */


import React, {Component} from 'react';
import {
	ListView,
	Platform,
  	StyleSheet,
  	Text,
  	View,
} from 'react-native';

//变量
var TimerMixin = require('react-timer-mixin');//这里需要执行一个命令，把包导入npm i react-timer-mixin --save
var HJNewsCell = require('./HJNewsCell');
var styles = require('./HJStyles');
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';
var JZWebView = require('./JZWebView');
var HJHomeDetail = require('./HJHomeDetail');


var commend_url = 'http://news-at.zhihu.com/api/2/news/latest';
var resultsCache = {
	shopData:{},//商家列表数据
};

var LOADING = {};






var HJHomeListView = React.createClass({
	mixins: [TimerMixin],

  	timeoutID: (null: any),

  	getInitialState:function(){
  		return {
  			isLoading: false,
  			isLoadingTail: false,
  			dataSource: new ListView.DataSource({
  				rowHasChanged: (row1, row2) => row1 !== row2,
  			}),
  			filter:'',
  			queryNumber:0,
  		};
  	},

  	componentDidMount:function(){
  		this.getCommendData();
  	},

  	getCommendData:function(){
  		this.timeoutID = null;

  		// LOADING
  		resultsCache.shopData = null;
  		this.setState({
  			isLoading: true,
  			isLoadingTail: false,
  		});

  		fetch(commend_url)
  			.then((response) => response.json())
  			.catch((error) => {
  				resultsCache.shopData = undefined;

  				this.setState({
  					dataSource: this.getDataSource([]),
  					isLoading: false,
  				});
  			})
  			.then((responseData) => {
  				resultsCache.shopData = responseData.news;//news是json数据中的一个key

  				this.setState({
  					isLoading: false,
  					dataSource: this.getDataSource(responseData.news),
  				});
  			})
  			.done();

  	},

  	getDataSource:function(datas: Array<any>): ListView.DataSource {
  		return this.state.dataSource.cloneWithRows(datas);
  	},

  	//选中一行
  	selectShop:function(shopData : Object){
  		if (Platform.OS === 'ios') {
  			this.props.navigator.push({
  				title:'财经头条',
          titleTextColor: 'white',
          barTintColor: 'rgba(216.0, 42.0, 42.0, 1.0)',
  				component:HJHomeDetail,
  				passProps:{shopData},
  			});
  		}else{
  			//android对应的处理
  		}
  	},
  	//分割线
  	renderSeparator:function(
  		sectionID: number | string,
  		rowID: number | string,
  		adjacentRowHighlighted: boolean
  	){
  		var style = styles.home_cell_row_separator;
  		if (adjacentRowHighlighted) {
  			style = [style, styles.home_cell_row_Separator_hide];
  		};
  		return (
  			<View key = {'SEP_'+ sectionID + '_' + rowID} style={style}/>
  		);
  	},
    onRefresh(PullRefresh){
        console.log('refresh');
        this.setState({
            a:1
        });

        setTimeout(function(){
            PullRefresh.onRefreshEnd();
        },1000);

    },

  	renderRow:function(
  		shopData: Object,
  		sectionID: number | string,
    	rowID: number | string,
    	highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  	){
  		return (
  			<HJNewsCell
  			//传到下一个界面的参数，下一个界面可以通过this.props.***来使用
  				key = {shopData.id}
  				  onSelect={() => this.selectShop(shopData)}
        		onHighlight={() => highlightRowFunc(sectionID, rowID)}
        		onUnhighlight={() => highlightRowFunc(null, null)}
        		shopData={shopData}
  			/>
  		);
  	},
	render:function(){
		var content = this.state.dataSource.getRowCount === 0 ?
			<NoCommend
				isLoading = {this.state.isLoading}
			/> :
			<ListView
				ref = "listview"
				renderSeparator = {this.renderSeparator}
				dataSource={this.state.dataSource}
        renderRow={this.renderRow}

        automaticallyAdjustContentInsets={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={true}
        // renderScrollComponent={(props) => <PullRefreshScrollView onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)} {...props}     />}
			/>;


		return (
		    <View style = {styles.home_noComment_container}>
		    	<View style = {styles.home_cell_separator} />
		    		{content}
		    </View>
		);
	}
});

var NoCommend = React.createClass({
	render : function(){
		var text = '';
		if (!this.props.isLoading) {
			text = 'No recommend shop';
		};

		return (
			<View style={[styles.home_noComment_container, styles.home_noComment_centerText]}>
				<Text style = {styles.home_noComment_text}>
					{text}
				</Text>
			</View>
		);
	}
});



module.exports = HJHomeListView;
