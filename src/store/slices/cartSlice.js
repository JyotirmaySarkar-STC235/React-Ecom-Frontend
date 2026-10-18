import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { wait } from '../../hooks/Cart'

// ponytail: swap wait for real POST /cart later
export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  await wait(1000) // api call in real case
  return product
})

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId)=>{
  await wait(1000) // api call in real case
  return productId
})

export const clearCart = createAsyncThunk('cart/clearCart', async ()=>{
  await wait(1000) // api call in real case
  return null
})

export const syncCart = createAsyncThunk('cart/syncCart', async ()=>{
  await wait(1000) // api call in real case
  return null
})



const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const product = action.payload
        const qty = product.quantity ?? 1
        const existing = state.items.find((item) => item.id === product.id)
        if (existing) {
          existing.quantity += qty
        } else {
          state.items.push({ ...product, quantity: qty })
        }
        state.status = 'idle'
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to add to cart'
      })
      // Remove from cart
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
        state.status = 'idle'
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to remove from cart'
      })
      // Clear cart
      .addCase(clearCart.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = []
        state.status = 'idle'
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to clear cart'
      })
      // Sync cart
      .addCase(syncCart.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(syncCart.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'idle'
      })
      .addCase(syncCart.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to sync cart'
      })
  },
})

export const selectCartItems = (state) => state.cart.items
export const selectCartStatus = (state) => state.cart.status
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export default cartSlice.reducer
