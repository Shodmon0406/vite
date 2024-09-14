import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategori = createAsyncThunk("brand/getCategori", async () => {
    try {
        let { data } = await axios.get(`http://135.181.152.249:8072/Category/get-categories`);
        return data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const categoriSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {
        setValue: (state, action) => {
            state[action.payload.key] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategori.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCategori.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getCategori.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { setValue } = categoriSlice.actions;
export default categoriSlice.reducer;
