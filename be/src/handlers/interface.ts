import { Context } from "elysia";

export interface IFolderHandler {
    get(ctx: Context): ResAPI;
    getById(ctx: Context): ResAPI;
    create(ctx: Context): ResAPI;
    update(ctx: Context): ResAPI;
    delete(ctx: Context): ResAPI;
}
