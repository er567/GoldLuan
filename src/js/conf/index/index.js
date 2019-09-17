/**
 * @file js
 * @synopsis  
 * @author zgc, er_567@foxmail.com
 * @version 1.0.0
 **/
define(function (require, exports, module) {
  'use strict';

  var $ = require('jquery'),
      opt;

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
            phone_number: ''
          }
          param.email = $('#email').val()
          param.message = $('#message').val()
          param.username = $('#email').val()
          param.phone_number = $('#phone_number').val()
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