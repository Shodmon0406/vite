import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const token = localStorage.getItem("access_token")

export const getProducts = createAsyncThunk(
  "brand/getProducts",
  async (arr) => {
    try {
      const { data } = await axios.get(
        `http://135.181.152.249:8072/Product/get-products?MinPrice=${arr[0]}&MaxPrice=${arr[1]}`
      );
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; 
    }
  }
);

export const search = createAsyncThunk(
  "brand/search",
  async (value) => {
    try {
      const { data } = await axios.get(
        `http://135.181.152.249:8072/Product/get-products?ProductName=${value}`
      );
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; 
    }
  }
);

export const postToCart = createAsyncThunk("brand/postToCart", async (id) => {
  try {
    await axios.post(
      `http://135.181.152.249:8072/Cart/add-product-to-cart?id=${id}`,
      "",
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error; 
  }
});

export const getInfo = createAsyncThunk("brand/getInfo", async (id) => {
  try {
    const { data } = await axios.get(
      `http://135.181.152.249:8072/Product/get-product-by-id?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error("Error fetching product info:", error);
    throw error; 
  }
});

export const getInfoBYSubCategory = createAsyncThunk("brand/getInfoBYSubCategory", async (id) => {
  try {
    const { data } = await axios.get(
      `http://135.181.152.249:8072/Product/get-products?SubcategoryId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error("Error fetching product info:", error);
    throw error; 
  }
});
export const getInfoByBrand = createAsyncThunk("brand/getInfoByBrand", async (id) => {
  try {
    const { data } = await axios.get(
      `http://135.181.152.249:8072/Product/get-products?BrandId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error("Error fetching product info:", error);
    throw error; 
  }
});


export const brandSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
    info: null, 
    error: null, 
    search: []
  },
  reducers: {
    setValue: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
      .addCase(getInfo.pending, (state) => {
        state.info = null; 
        state.error = null; 
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.info = null; 
        state.error = action.error.message; 
      })
      .addCase(getInfoBYSubCategory.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(getInfoByBrand.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(search.fulfilled, (state, action) => {
        state.search = action.payload
      })
      
  },
});

export const { setValue } = brandSlice.actions;
export default brandSlice.reducer;
