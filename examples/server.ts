import express from "express";
import bodyParser from "body-parser";
import { createRoutes } from "./data.js";

const router = express.Router();
const app = express();
//设置跨域访问
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With",
  );
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 可以带cookies
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
registerUserRouter();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
const port = process.env.PORT || 8080;
export default app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
router.get("/sse", (req, res) => {
  res.set({
    "Content-Type": "text/event-stream", //设定数据类型
    "Cache-Control": "no-cache", // 长链接拒绝缓存
    Connection: "keep-alive", //设置长链接
  });

  console.log("进入到长连接了");
  //持续返回数据
  setInterval(() => {
    console.log("正在持续返回数据中ing");
    const data = {
      message: `Current time is ${new Date().toLocaleTimeString()}`,
    };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);
});

function registerUserRouter() {
  router.get("/user/routes", function (req, res) {
    console.log("-------------------------");
    const token = req.headers.token;
    console.log("🚀 ~ token:", token);
    // if (!token) return { code: 200, data: { message: "获取用户信息失败" } };
    const data = { code: 200, data: createRoutes() };
    res.json(data);
  });
}
