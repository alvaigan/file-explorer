import { FolderItemDto } from "../dtos/folder.dto";
import { ListResDto } from "../dtos/global.dto";
import { FolderHandler } from "../handlers/folder.handler";
import helper from "../utils/helper";
import { IFolderService } from "./interface";

export class FolderService implements IFolderService {
    get(): ListResDto<FolderItemDto> {
        const data: FolderItemDto[] = [
            {
                id: "123",
                name: "asdf",
                path: "asdf",
                created_at: "",
                updated_at: "",
                size: 10,
                type: "folder",
                sub: [],
            },
            {
                id: "123",
                name: "asdf",
                path: "asdf",
                created_at: "",
                updated_at: "",
                size: 10,
                type: "folder",
                sub: [],
            },
            {
                id: "123",
                name: "asdf",
                path: "asdf",
                created_at: "",
                updated_at: "",
                size: 10,
                type: "folder",
                sub: [],
            },
            {
                id: "123",
                name: "asdf",
                path: "asdf",
                created_at: "",
                updated_at: "",
                size: 10,
                type: "folder",
                sub: [],
            },
            {
                id: "123",
                name: "asdf",
                path: "asdf",
                created_at: "",
                updated_at: "",
                size: 10,
                type: "folder",
                sub: [],
            },
            {
                id: "123",
                name: "asdf",
                path: "asdf",
                created_at: "",
                updated_at: "",
                size: 10,
                type: "folder",
                sub: [],
            },
        ];

        const result: ListResDto<FolderItemDto> = {
            pageInfo: {
                page: 1,
                rowPerPage: 1,
                totalPage: 1,
                totalRows: 1,
            },
            rows: data,
        };

        return result;
    }
    getById(): FolderItemDto {
        return helper.Response("success", "Successs");
    }
    create(): any {
        return helper.Response("success", "Successs");
    }
    update(): any {
        return helper.Response("success", "Successs");
    }
    delete(): any {
        return helper.Response("success", "Successs");
    }
}
