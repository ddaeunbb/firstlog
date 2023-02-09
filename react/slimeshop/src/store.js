import { configureStore, createSlice } from '@reduxjs/toolkit'

let products = createSlice({
  name : 'products',
  initialState : [
    {
      id : 0,
      name : '슬라임 잔해',
      price : 2000,
      content : '어디서인가 구해진 슬라임 잔해',
      stock : 10
    },
    {
      id : 1,
      name : '우주쓰레기',
      price : 500,
      content : '우주에서 흔히 볼 수 있는 쓰레기',
      stock : 20
    },
    {
      id : 2,
      name : '별',
      price : 5000,
      content : '우주엔 많지만 구하긴 어려운 별',
      stock : 5
    }
  ]
})

export default configureStore({
  reducer: { 
    'products' : products.reducer
  }
}) 