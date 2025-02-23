import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProductsArgs, ProductItem } from "./types";
import axios from "axios";

export const fetchProducts = createAsyncThunk<ProductItem[], FetchProductsArgs>('product/fetchProductsStatus', async (params) => {
    const { categoryFilter, currentPage } = params;
    const res = await axios.get<ProductItem[]>(
      `https://673b4d7c339a4ce4451b996a.mockapi.io/products?page=${currentPage}&limit=9`,
    );
    return res.data;
  });
  