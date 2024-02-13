import Koa from "koa";
import Router, { RouterContext } from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

const app: Koa = new Koa();
const router: Router = new Router();

router.get("/", async (ctx: RouterContext, next: any) => {
  ctx.body = { msg: "Hello worlda!" };
  await next();
});

router.post("/", async (ctx: RouterContext, next: any) => {
  // handle request data and body
  const reqHeader = ctx.request.headers;
  const reqBody = ctx.request.body;
   console.log(`Request :  ${JSON.stringify(ctx.request)}`);
  
  console.log(`Request Header - before stringify: ${reqHeader}`);
  console.log(`Request Header: : ${JSON.stringify(reqHeader)}`);
  console.log(`Request Body - before stringify: ${reqBody}`);
  console.log(`Request Body: ${JSON.stringify(reqBody)}`);

  // set response content
  ctx.body = reqBody;
  await next();
});

app.use(json());
app.use(logger()); //display the      --> POST / 200 11ms 58b
app.use(bodyParser()); // handle the post, without bodyParser() the reponseo: Request Body - before stringify: undefined
app.use(router.routes()).use(router.allowedMethods());

app.listen(10887, () => {
  console.log("Koa Started");
});
