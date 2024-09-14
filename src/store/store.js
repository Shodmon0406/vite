import { configureStore } from '@reduxjs/toolkit'
import brandRedurs from "./reducers/brand/brandSlise";
import productsRedurs from "./reducers/products/productsSlise";
import categoriRedurs from "./reducers/categori/categoriSlise";
import cartRedurs from "./reducers/cart/cartSlice"

export const store = configureStore({
  reducer: {
    brand: brandRedurs,
    products: productsRedurs,
    categori: categoriRedurs,
    cart: cartRedurs, 
  },
})