// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
const request=require("../../utils/requests.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'标题',
    source: '',
    time: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //文章 id
    var id = options.id;
    // var id = 'DVHVIBKF05372NVD';
    var that = this;
    // console.log(options.id);return ;
    request.getDetail(id , function(res){
      var data = (res.data[id]);
      // console.log(res);return;
      that.setData({
        title:data.title,
        source:data.source,
        time:data.ptime,
      });
      var body = data.body;
      // console.log(body);
      //替换内容中图片注释
      for(var i=0;i<data.img.length;i++){
        body = body.replace(data.img[i].ref, '<img src="' + data.img[i].src+'"  />');
      }
      that.setData({
        body:body
      });
      //  将HTML 转化成小程序可以识别 的内容

      //解析html标签
      WxParse.wxParse('body', 'html', body, that, 5);
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})