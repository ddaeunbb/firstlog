import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase, countIncrease } from '../store.js'
import { memo, useState } from 'react'

let Child = memo( function(){
  console.log('재랜더링됨ㅋ')
  return <div>자식임ㅋ</div>
})

function Cart(){

  let state = useSelector((state)=> state)
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return(
    <div>
      <Child count={count}></Child>
      <button onClick={()=>{ setCount(count+1) }}>버튼임ㅋ</button>
      <h4>{ state.user.age }</h4>
      <button onClick={()=>{
        dispatch(increase(100))
      }}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a,i)=>{
              return(
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                    <button onClick={()=>{
                      dispatch(countIncrease(state.cart[i].id))
                    }}>+</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;