import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const token = localStorage.getItem("access_token")

export const getCart = createAsyncThunk(
  "cart/getCart",
  async () => {
    try {
      const { data } = await axios.get(
        "http://135.181.152.249:8072/Cart/get-products-from-cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data?.data[0];
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }
);


export const delProduct = createAsyncThunk(
  "cart/delProduct",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.delete(
        `http://135.181.152.249:8072/Cart/delete-product-from-cart?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } 
      );

      console.log(data);
      
      
      if (data.statusCode === 200) {
        await dispatch(getCart()); 
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
);

export const clearAll = createAsyncThunk(
  "cart/clearAll",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.delete(
        "http://135.181.152.249:8072/Cart/clear-cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getCart());
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }
);

export const plus = createAsyncThunk(
  "cart/plus",
  async ( id, { dispatch }) => {
    try {
      const { data } = await axios.put(
        `http://135.181.152.249:8072/Cart/increase-product-in-cart?id=` + id , "",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.statusCode === 200) {
        await dispatch(getCart());
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }
);
export const minus = createAsyncThunk(
  "cart/minus",
  async ( id , { dispatch }) => {
    try {
      const { data } = await axios.put(
        `http://135.181.152.249:8072/Cart/reduce-product-in-cart?id=` + id, "",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.statusCode === 200) {
        await dispatch(getCart()); 
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    setValue: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [action.payload];
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const { setValue } = cartSlice.actions;
export default cartSlice.reducer;
