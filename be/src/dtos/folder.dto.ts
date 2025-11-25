export type FolderItemDto = {
  id: string;
  name: string;
  type: "folder" | "file";
  path: string;
  size: number;
  created_at: string;
  updated_at: string;
  sub: FolderItemDto[] | null;
};

// 'item' for 'folder' or 'file'
export type CreateItem = {
  name: string;
  type: "folder" | "file";
  parent_id?: string;
};

export type UpdateItem = {
  name: string;
  type: "folder" | "file";
  parent_id?: string;
};
