import './App.css';
import { useState, useEffect } from 'react'
import products from './data.js'
import moreProducts from './data2.js'
import item0 from './img/item0.png'
import item1 from './img/item1.png'
import item2 from './img/item2.png'



function App() {

  let [money, setMoney] = useState('10000원');
  let [items, setItems] = useState(products);

  return (
    <div className="App">
      <div className="background">


        <div className="center-contents">
          <div className="mission">
            <h2 style={{lineHeight: '1.5em'}}>우주슬라임이 배고파해요😵<br></br>먹이를 장바구니에 넣어주세요.</h2>
            <h3>내 잔고 : {money} </h3>
          </div>

          <div className="products">
            {
              items.map((a,i)=>{
                return(
                <div className="product" key={i}>
                    <div>
                      <img src={item0} alt="상품"/>
                    </div>
                    <h3>{ a.name }</h3>
                    <p>{ a.content }</p>
                    <p>{ a.price }원</p>
                    <button>장바구니</button>
                </div>
                )
              })
            }
          </div>

          <div className="moreBtn">
            <button onClick={()=>{}}>더보기</button>
          </div>

        </div>



      </div>
    </div>
  );
}

export default App;
