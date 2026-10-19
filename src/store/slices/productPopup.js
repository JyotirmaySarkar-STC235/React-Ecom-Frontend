import { createSlice } from "@reduxjs/toolkit";

const productPopupSlice = createSlice(
    {
        name: 'productPopupSlice',
        initialState: {
            isOpen: false,
            product: null
        },
        reducers: {
          setProductPopupOpen(state, action) {
            state.isOpen = action.payload
          },
          setProduct(state, action) {
            state.product = action.payload
          }
        }
    }
)
export const { setProductPopupOpen, setProduct } = productPopupSlice.actions
export const selectProductPopupOpen = (state) => state.productPopup.isOpen
export const selectProduct = (state) => state.productPopup.product
export default productPopupSlice.reducer