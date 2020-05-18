// pages/home/home.js
var requestData=require("../../utils/util.js")
Page({
  showChannel:function(){
    this.setData({isShow:true});
  },
  hideChannel:function(){
    this.setData({isShow:false});
  },

  changeChannel:function(e){
    var id =e.currentTarget.dataset.id;
    // console.log(id);
    this.setData({activeChannel:id});

    //判断是否有数据 没有请求接口获取数据
    //获取当前频道 index
    var index = e.currentTarget.dataset.index;
    if(this.data.channels[index].data.length == 0){
        var that = this;
        wx:wx.request({
          url: 'http://c.m.163.com/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
          success(res) {
            // console.log(res.data);
            var key = 'channels['+index+'].data';
            //使用[] 系统认为是变量
            that.setData({[key]: res.data.data})
          }
        })
    };
  },
  //滑动
  swiperChangeChannel:function(e){
    var id = e.detail.currentItemId;
    //设置对应导航
    this.setData({activeChannel:id});
    //设置对应模块 内容
    var index = e.detail.current;
    // console.log(e);
    if(this.data.channels[index].data.length == 0){
      var that = this;
      wx:wx.request({
        url: 'http://c.m.163.com/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
        success(res) {
          // console.log(res.data);
          var key = 'channels['+index+'].data';
          //使用[] 系统认为是变量
          that.setData({[key]: res.data.data})
        }
      })
  };

    
  },
  /**
   * 页面的初始数据
   */
  data: {
    height:1000,
    isShow:false,
    channels:[
      {title:'推荐',name:'recommand',id:'recommand',data:[]},
      {title:'热点',name:'hot',id:'hot',data:[]},
      {title:'本地',name:'local',id:'local',data:[]},
      {title:'社会',name:'society',id:'society',data:[]},
      {title:'娱乐',name:'entertainment',id:'entertainment',data:[]},
      {title:'军事',name:'military',id:'military',data:[]},
      {title:'科技',name:'technology',id:'technology',data:[]},
      {title:'汽车',name:'car',id:'car',data:[]},

    ],
    activeChannel:'recommand'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var height = wx.getSystemInfoSync().screenHeight - 45;
      this.setData({height:height});

      var that = this;
      //请求 新闻 数据
      wx:wx.request({
        url: 'http://c.m.163.com/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址

        success(res) {
          console.log(res.data);
          that.setData({'channels[0].data': res.data.data})
        }
      })
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