const apiurl = require("./apiurl.js");
const utils = require("./util.js");

function request(url , data , successCb , errorCb , completeCb){
  wx.request({
    url: url,
    method:'GET',
    data:data,
    success:function(res) { 
      utils.isFunction(successCb) && successCb(res); 
      },
    error:function() { 
      utils.isFunction(errorCb) && errorCb(); 
      },
    complete:function() { 
      utils.isFunction(completeCb) && completeCb(); 
      },
  })

}

//列表
function getList(data , successCb , errorCb , completeCb){
  request(apiurl.getList , data , successCb ,errorCb , completeCb);
}
//详情
function getDetail(id , successCb , errorCb , completeCb){
  request(apiurl.getDetail+ id +"/full.html" , "" , successCb ,errorCb , completeCb);
}

module.exports = {getList:getList,getDetail:getDetail}