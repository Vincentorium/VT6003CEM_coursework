"use strict";

var _koa = _interopRequireDefault(require("koa"));
var _koaRouter = _interopRequireDefault(require("koa-router"));
var _koaLogger = _interopRequireDefault(require("koa-logger"));
var _koaJson = _interopRequireDefault(require("koa-json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = new _koa.default();
const router = new _koaRouter.default();
router.get('/', async (ctx, next) => {
  ctx.body = {
    msg: 'Hello world!'
  };
  await next();
});
app.use((0, _koaJson.default)());
app.use((0, _koaLogger.default)());
app.use(router.routes()).use(router.allowedMethods());
app.listen(10888, () => {
  console.log("Koa Started");
});