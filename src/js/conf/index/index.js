/**
 * @file js
 * @synopsis  
 * @author zgc, er_567@foxmail.com
 * @version 1.0.0
 **/
define(function (require, exports, module) {
  'use strict';

  var opt;

  opt = {
      init: function () {
        this.bindEvent();
      },
      bindEvent: function () {
        $('#submitBtn').click(function(e){
          var param = {
            email: '',
            message: '',
            subject: '主题',
            username: '',
          }
          param.email = $('#email').val()
          param.message = $('#message').val()
          param.username = $('#username').val()
          param.subject = $('#subject').val()
          $.post('//jinluan-admin.er567.cn/api/feedback',param,function(res){
            layer.msg(res.message);
          })
        });
      },
      postFunc: function() {
        
      }
  }
  opt.init(); //初始化
});