import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState(["남자코트추천", "강남우동 맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div>
        <h3 className="black-nav">블로그임</h3>
      </div>

      {
        글제목.map(function(a,i){
          return(<div className="list" key={i}>
          <h4 onClick={()=>{
            setModal(!modal);
            setTitle(i)
          }}>{ 글제목[i] }
          <span onClick={(e)=>{
            e.stopPropagation();
            let copy = [...따봉];
            copy[i] = copy[i] + 1;
            따봉변경(copy)
          }}>👍</span> {따봉[i]}
          </h4>

          <p>2월 18일 발행</p>
        </div>)
        })
      }

      <div className='inputBox'>
        <input onChange={(e)=>{ 입력값변경(e.target.value);}}/>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
          let 새따봉 = [...따봉];
          새따봉.push(0);
          따봉변경(새따봉)
        }}>입력</button>
      </div>

      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(<div className="modal">
    <h4>{ props.글제목[props.title] }</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;
