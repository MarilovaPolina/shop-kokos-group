export type FetchProductsArgs = {
    categoryFilter: string;
    currentPage: number;
  };
  
export type ProductItem = {
    id: string ;
    name: string;
    price: number;
    images: string[];
    sizes: string[];
    article:string;
    availability:boolean;
    color: string;
    gender:string;
    description: string;
    category: string;
}

export enum Status{
    LOADING='loading',
    SUCCESS="success",
    ERROR="error",
}

export interface ProductSliceState{
    items: ProductItem[];
    status: 'loading' | 'success' | 'error';
}