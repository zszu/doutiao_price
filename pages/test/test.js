// pages/test/test.js
Page({
  tap:function(){
    this.setData({color:'info'});
  },

  /**
   * 页面的初始数据
   */
  data: {
    msg:'数据绑定',
    news:[
      '我特别能吃苦，不好意思多说一个字',
      '同样是腰间盘，你为何如此突出',
      '扁桃体，还没轮到你发炎，你先坐下',
      '你必须特别努力，才看起来毫不费力'
    ],
    isVip:false,
    color:'error',
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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