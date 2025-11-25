export type PaginationReqDto = {
    page?: number;
    perPage?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    filters?: Record<string, any>;
};

export type PageInfo = {
    page?: number;
    rowPerPage?: number;
    totalPage?: number;
    totalRows?: number;
};

export type ListResDto<T> = {
    rows: T[] | null;
    pageInfo: PageInfo;
};
