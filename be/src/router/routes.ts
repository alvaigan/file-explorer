import Elysia from "elysia";
import { FolderHandler } from "../handlers/folder.handler";

const folderHandler = new FolderHandler();

export const folderRoutes = new Elysia({ prefix: "/folder" });
folderRoutes.get("/", (ctx) => folderHandler.get(ctx));
folderRoutes.get("/:id", (ctx) => folderHandler.getById(ctx));
folderRoutes.post("/create", (ctx) => folderHandler.create(ctx));
folderRoutes.post("/update/:id", (ctx) => folderHandler.update(ctx));
folderRoutes.delete("/:id", (ctx) => folderHandler.delete(ctx));
