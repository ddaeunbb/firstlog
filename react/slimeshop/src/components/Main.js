import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Main(){

  let navigate = useNavigate();

  return(
  <div className='main-background'>
    <div className="main-contents">
      <div className="main-slime"></div>
      <h3 style={{lineHeight: "1.8em", color: "white"}}>우주슬라임이 배고파해요. 😢<br></br>먹이를 주세요!</h3>
      <button className='feedBtn' onClick={()=>{navigate('/list')}}>먹이주기</button>
    </div>
  </div>)
}

export default Main;