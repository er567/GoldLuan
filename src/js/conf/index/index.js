/**
 * @file js
 * @synopsis  
 * @author zgc, er_567@foxmail.com
 * @version 1.0.0
 **/
define(function (require, exports, module) {
  'use strict';

  var $ = require('../lib/jquery/jquery'),
      opt;

  opt = {
      init: function () {
        this.bindEvent();
      },
      bindEvent: function () {
        console.log(6)
      }
  }
  opt.init(); //初始化
});