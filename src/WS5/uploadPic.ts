import Koa from 'koa';
import KoaBody from 'koa-body';
import Router, { RouterContext } from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import path from 'path';
import koaStatic from 'koa-static';
const app: Koa = new Koa();
const router: Router = new Router();

app.use(json());
app.use(logger());
//app.use(KoaBody({ multipart: true, formidable: { multiples: true } }));// for handle FormData e.g. picture or file
app.use(KoaBody({
  multipart: true, // support pic files
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'), // set the folder for upload
    keepExtensions: true, //保留拓展名
  }
}))
app.use(koaStatic(path.join(__dirname, 'public'))); // set the base static folder
// Apply Koa-Body to this route

interface File {
  size: number;
  filepath: string;
  originalFilename: string | null;
  newFilename?: string;
  mimetype?: string | null;
  mtime?: Date | null | undefined;
  hashAlgorithm?: false | "sha1" | "md5" | "sha256";
  hash?: string | null;
}
router.post('/', async (ctx: RouterContext, next: any) => {
  console.log("enter post");

  const reqHeader = ctx.request.headers;
  const reqBody = ctx.request.body;
  const reqFiles = ctx.request.files;

  const fileNameABC = reqFiles?.fileNameABC;
  const filePicABC: (File | any) = reqFiles?.filePicABC;


  console.log(`Request Header - before stringify: ${reqHeader}`);
  console.log(`Request Header: : ${JSON.stringify(reqHeader)}`);

  console.log(`Request Body - before stringify: ${reqBody}`);
  console.log(`Request Body: ${JSON.stringify(reqBody)}`);

  console.log(`Request File - before stringify: ${reqFiles}`);
  console.log(`Request File: ${JSON.stringify(reqFiles)}`);

  console.log(`Request File - before stringify: ${reqFiles?.fileNameABC}`); // seem non byte or string is ignore
  console.log(`Request File - before stringify: ${reqFiles?.filePicABC}`);

  console.log(`Request File - before stringify: ${filePicABC.originalFilename}`);

  const basename = path.basename(filePicABC.filepath);

  console.log(`__dirname is: ${__dirname}`)
  console.log(`Request File - basename: ${basename}`);
  ctx.body = {
    url: `${ctx.origin}/uploads/${basename}`,
    // sql - 只保留路root之外的路徑和文件名，然後直接從靜態路徑加載。 問題在於，靜態路徑，一般放哪
  };
});

app.use(router.routes());

app.listen(10888, () => {
  console.log("Koa Started");
});