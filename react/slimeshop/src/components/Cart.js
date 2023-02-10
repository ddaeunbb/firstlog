import { useState } from 'react'
import products from '../data.js'
import axios from 'axios'

function Cart(){

  let [items, setItems] = useState(products)
  let [moreBtn, setMoreBtn] = useState(true)

  return(
    <div className='cart-background'>
      <div className="cart-contents">
        <div className="products">

          {
            items.map((a,i)=>{
              return(
              <div className="product">
                <div className='productImg'>
                  <img src={`https://ddaeunbb.github.io/react/slimeshop/src/img/item${i}.png`} alt="상품"/>
                </div>
                <h2>{ a.name }</h2>
                <h5>{ a.content }</h5>
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
            axios.get('https://ddaeunbb.github.io/react/slimeshop/src/data2.json')
            .then((response)=>{
              let copy = [...items, ...response.data]
              setItems(copy);
              setMoreBtn(false)
            })
          }}>더보기</button>
          : null
        }
      </div>
    </div>
  )
}


export default Cart;