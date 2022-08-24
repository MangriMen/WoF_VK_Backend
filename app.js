import "dotenv/config";
import Koa from "koa";
import { router } from "./routes/index.js";

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());
app.listen(process.env.APPLICATION_PORT);
