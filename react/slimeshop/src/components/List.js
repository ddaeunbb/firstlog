import { useEffect, useState } from 'react'
import products from '../data.js'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function List(){

  let navigate = useNavigate();

  let [items, setItems] = useState(products)
  let [moreBtn, setMoreBtn] = useState(true)

  return(
    <div className='cart-background'>
      <div className='modal'><h4>담겼어요!</h4></div>
      <button className='goCart' onClick={()=>{ navigate('/cart') }}></button>
      <div className="cart-contents">
        <div className="products">

          {
            items.map((a,i)=>{
              return(
              <div className="product" key={i}>
                <div className='productImg'>
                  <img src={`https://ddaeunbb.github.io/react/slimeshop/src/img/item${i}.png`} alt="상품"/>
                </div>
                <h2>{ a.name }</h2>
                <h5>{ a.content }</h5>
                <p>잔여 { a.stock }개<br></br> { a.price }원</p>
                <button onClick={()=>{
                  document.querySelector('.modal').style.opacity = 1;
                  setTimeout(()=>{
                    document.querySelector('.modal').style.opacity = 0;
                  }, 1800)

                  let copy = JSON.parse(localStorage.getItem(a.id))
                  if (copy == null){
                  localStorage.setItem(a.id, JSON.stringify({id: a.id, name: a.name, stock: a.stock, count: 0}))
                  } else{
                    copy.count = copy.count+1;
                    localStorage.setItem(a.id, JSON.stringify(copy))
                  }
                }}>장바구니 넣기</button>
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


export default List;