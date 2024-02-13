"use strict";

var json = require('koa-json');
var Koa = require('koa');
var app = new Koa();
app.use(json());
app.use(ctx => {
  ctx.body = {
    foo: 'bar'
  };
});