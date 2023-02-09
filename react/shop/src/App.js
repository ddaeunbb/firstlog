import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import bg from './img/bg.png'
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios';
import { lazy, Suspense, createContext, useEffect, useState } from 'react'
// import Detail from './routes/Detail.js'
// import Cart from './routes/Cart.js'
import { useQuery } from 'react-query'


const Detail = lazy(()=> import('./routes/Detail.js'));
const Cart =  lazy(()=> import('./routes/Cart.js'));

function App() {

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12])

  let [load, setLoad] = useState(0);
  let [clickCount, setClickCount] = useState(0);
  let navigate = useNavigate();
  let [moreButton, setMoreButton] = useState(0);

  useEffect(()=>{
    let watched = localStorage.getItem('watched');
    if (watched == null){
    localStorage.setItem('watched', JSON.stringify([]))
    }
  },[])

  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청됨')
      return a.data
     })
  })





  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading&&'로딩중입니다.'}
            {result.data&&result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <div>
            <div className='main-bg' style={{backgroundImage : 'url(' + bg +')'}}></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a,i) => {
                    return(
                      <Card shoes={shoes[i]} i={i+1} navigate={navigate}></Card>
                    )
                  })
                }
              </div>
            </div>
            {
              load ? <div className="alert alert-warning" style={{width: '600px', margin: '30px auto'}}> 로딩중입니다 </div> : null
              }
        
              {
                !moreButton ?
                <button onClick={()=>{
                  setLoad(1);
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=> {
                    setLoad(0);
                    let copy = [...shoes, ...result.data];
                    setShoes(copy);
                  })
                  .catch(()=>{
                    setLoad(0);
                  })
                  setMoreButton(1);
                }
              }>상품더보기</button>
              : null
              }
          </div>
        } />
        <Route path="/detail/:id" element={
          <Suspense fallback={<div>로딩중임</div>}>
            <Detail shoes={shoes} />
          </Suspense>
        } />
        <Route path="/cart" element={
        <Suspense>
          <Cart />
        </Suspense>
        }></Route>
        <Route path="*" element={<div>없는페이지입니다.</div>}/>
      </Routes>


    </div>
  );
}



function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i +'.jpg'} width="80%" />
      <h4>{ props.shoes.title}</h4>
      <p>{ props.shoes.price}</p>
      <Nav>
        <Nav.Link onClick={()=>{props.navigate('/detail/' + props.shoes.id)}} style={{margin: 'auto'}}>상품상세보기</Nav.Link>
      </Nav>
  </div>
  )
}

export default App;
