import { FolderItemDto } from "../dtos/folder.dto";
import { ListResDto } from "../dtos/global.dto";

export interface IFolderService {
    get(): ListResDto<FolderItemDto>;
    getById(): FolderItemDto;
    create(): any;
    update(): any;
    delete(): any;
}
