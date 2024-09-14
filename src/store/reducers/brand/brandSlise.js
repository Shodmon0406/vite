import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBrand = createAsyncThunk("brand/getBrand", async () => {
    try {
        let { data } = await axios.get(`http://135.181.152.249:8072/Brand/get-brands`);
        return data?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const brandSlice = createSlice({
    name: "brand",
    initialState: {
        data: [],
        images: [
            "https://avatars.mds.yandex.net/i?id=0cf22c56a84d448b4b6740295653e72f_l-8258224-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=0cf22c56a84d448b4b6740295653e72f_l-8258224-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=0cf22c56a84d448b4b6740295653e72f_l-8258224-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=0cf22c56a84d448b4b6740295653e72f_l-8258224-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=0cf22c56a84d448b4b6740295653e72f_l-8258224-images-thumbs&n=13",
        ],
        loading: false
    },
    reducers: {
        setValue: (state, action) => {
            state[action.payload.key] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBrand.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBrand.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getBrand.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { setValue } = brandSlice.actions;
export default brandSlice.reducer;
