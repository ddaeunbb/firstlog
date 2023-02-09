import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState : {name : "kim", age: 20},
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    increase(state, action){
      state.age += action.payload
    },
  }
})

export let { changeName, increase } = user.actions


let stock = createSlice({
  name: 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    countIncrease(state, action){
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count++
    },
    refreshCart(state, action){
      state.push(action.payload);
    }
  } 
})

export let { countIncrease, refreshCart } =  cart.actions


export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 