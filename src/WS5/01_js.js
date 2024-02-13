import Koa from "koa";

import logger from "koa-logger";
import json from "koa-json";
const app = new Koa();

app.use(json());
app.use(logger());
