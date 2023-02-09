import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import {Nav, Link, Item} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase, refreshCart, countIncrease } from '../store.js'

function Detail(props){
  
  let state = useSelector((state)=> state.cart)
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let {id} = useParams();
  let index = props.shoes.find(a=> {return a.id == id})
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(2);
  let [fade2, setFade2] = useState('');

  useEffect(()=>{
    let watchedArray = JSON.parse(localStorage.getItem('watched'))
    watchedArray.push(index.id)
    watchedArray = [...new Set(watchedArray)];
    localStorage.setItem('watched', JSON.stringify(watchedArray))
  },[])



  
  useEffect(()=>{
    setFade2('end')
    return()=>{
      setFade2('');
    }
  }, [])

  useEffect(()=>{
    if(isNaN(num) == true){
      alert('경고 : 숫자만 입력하세요.')
    }
  }, [num])

  return(
<div className={"container start " + fade2}>
  <div className="row">
    <div className="col-md-6">
      <img  src={"https://codingapple1.github.io/shop/shoes" + (index.id + 1) + ".jpg"} width="100%" />
    </div>
    <div className="col-md-6 mt-4">
      <input type="text" placeholder="수량 입력칸" style={{textAlign : 'center'}}
      onChange={(e)=>{ setNum(e.target.value) }}></input>
      <h4 className="pt-5">{index.title}</h4>
      <p>{index.content}</p>
      <p>{index.price}</p>
      <button className="btn btn-danger" onClick={()=>{
        let a = state.findIndex(a=> a.id == index.id);
        if (a >= 0){
          dispatch(countIncrease(a))
        } else{
        let copy = index;
        copy.count = 1;
        copy.name = copy.title;
        delete copy.title;
        delete copy.content;
        delete copy.price;
        dispatch(refreshCart(copy))
        }
        navigate("/cart")
      }}>주문하기</button> 
    </div>
  </div>


  <Nav variant="tabs" defaultActiveKey="/home" style={{margin : '50px 0'}}>
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
    </Nav.Item>
  </Nav>

  <TabContent tab={tab} shoes={props.shoes} />

</div> 
  )
}


function TabContent({tab}){

  let [fade, setFade] = useState();

  useEffect(()=>{
    let  a = setTimeout(()=>{setFade('end')},10)
    return ()=>{
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={'start ' + fade}>
   { [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab] } 
  </div>)
}


export default Detail;
