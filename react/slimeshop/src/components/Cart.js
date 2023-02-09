import { useState } from 'react'
import { useSelector } from 'react-redux'
import products from '../data.js'
import axios from 'axios'

function Cart(){

  let items = useSelector((state)=>{return state.products})
  let [moreBtn, setMoreBtn] = useState(true)

  return(
    <div className='cart-background'>
      <div className="cart-contents">
        <div className="products">

          {
            items.map((a,i)=>{
              return(
              <div className="product">
                <div className='productImg'>이미지</div>
                <h2>{ a.name }</h2>
                <h3>{ a.content } </h3>
                <p>잔여 { a.stock }개<br></br> { a.price }원</p>
                <button>구매하기</button>
              </div>
              )
            })
          }

        </div>

        {
          moreBtn ?
          <button className='moreBtn' onClick={()=>{
            axios.get('')
          }}>더보기</button>
          : null
        }
      </div>
    </div>
  )
}


export default Cart;