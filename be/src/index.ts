import { Elysia } from "elysia";
import { folderRoutes } from "./router/routes";

const app = new Elysia()
  .use(folderRoutes)
  .get("/", () => "")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
