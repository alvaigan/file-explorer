import { Context } from "elysia";
import { IFolderHandler } from "./interface";
import helper from "../utils/helper";
import { FolderService } from "../services/folder.service";

export class FolderHandler implements IFolderHandler {
    folderService: FolderService;

    constructor() {
        this.folderService = new FolderService();
    }

    get(ctx: Context): ResAPI {
        const result = this.folderService.get();

        return helper.Response("success", "Successs", result);
    }
    getById(ctx: Context): ResAPI {
        return helper.Response("success", "Successs");
    }
    create(ctx: Context): ResAPI {
        return helper.Response("success", "Successs");
    }
    update(ctx: Context): ResAPI {
        return helper.Response("success", "Successs");
    }
    delete(ctx: Context): ResAPI {
        return helper.Response("success", "Successs");
    }
}
