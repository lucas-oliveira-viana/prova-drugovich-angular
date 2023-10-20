export enum StatusEnum {
    ATIVO = 'Ativo', INATIVO = 'Inativo'
}

export enum ScreenEnum {
    LIST,
    FORM
}

export interface IPagination<T> {
    data: Array<Array<T>>
    currentPage: number,
    itemsPerPage: number,
    pages: number[]
}