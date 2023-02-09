import "./App.css";
import { useState } from "react";

function App() {
  let [titleList, setTitleList] = useState(["성수맛집추천", "헤어샵추천", "자바스크립트독학"]);
  let [likes, setLikes] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h1>블로그</h1>
      </div>

      {
        titleList.map(function(a,i){
          return(
            <div className='list'>
              <h4 onClick={()=>{
                setModal(!modal);
                setTitle(i);
              }}>{a}
              <span onClick={()=>{
                let copy = [...likes];
                copy[i] = copy[i] + 1;
                setLikes(copy)
              }}> 👍🏻 {likes[i]}</span></h4>
              <p>발행일 / 23.02.06</p>
              <button onClick={()=>{
                let copy = [...titleList];
                copy.splice(i,1);
                setTitleList(copy);
              }}>글지우기 ❌</button>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} titleList={titleList} /> : null
      }

      <input type="text" style={{marginTop : "30px", textAlign: "center"}} placeholder="쓰고싶은 글을적으세요" onChange={(e)=>{ setInputValue(e.target.value) }}/>
      <button style={{marginLeft : "10px"}}
      onClick={()=>{
        let copy = [...titleList];
        copy.push(inputValue);
        setTitleList(copy);
        let anotherCopy = [...likes];
        anotherCopy.push(0);
        setLikes(anotherCopy)
      }}
      >발행하기</button>

    </div>
  );
}

function Modal(props){
  return(<div className="modal">
    <h4>{ props.titleList[props.title] }</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;
