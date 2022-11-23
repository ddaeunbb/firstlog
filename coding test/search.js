var searchData = [
  {id: 0, title : "#array #object sum(합) 구하기", src : "./day10/day10.html", date: "22.11.10", content: "콜백함수 활용해서 array, object 정렬하기"},
  {id: 1, title : "#reverse 문자열, array 반대정렬하기", src : "./day14/day14-1.html", date: "22.11.14", content: "reverse API"},
  {id: 2, title : "#else if #?, #sort, #..., #repeat", src : "./day14/day14-2.html", date: "22.11.14", content: "array 정렬 함수"},
  {id: 3, title : "#gcd최대공약수 #for반복문 #new Map <br>#array안 array #new Set", src : "./day15/day15-1.html", date: "22.11.15", content: ""},
  {id: 4, title : "#toString #Number #fill #Array", src : "./day15/day15-2.html", date: "22.11.15", content: ""},
  {id: 5, title : "#gcd #lcd #유클리드호제법", src : "./day16/day16-1.html", date: "22.11.16", content: "array 정렬 함수"},
  {id: 6, title : "#문자를 array로 변환 #split #[...] #array를 문자 변수로 변환 #array 숫자열로 변환 #숫자를 array로 변환", src : "./day16/day16-2.html", date: "22.11.16", content: "문자열 <--> array"},
  {id: 7, title : "#정규식", src : "./day16/day16-3.html", date: "22.11.16", content: "정규식 /[a-z]/"},
  {id: 8, title : "#문자열->숫자열로 바꾸기 #reduce #대문자소문자 변환 #팩토리얼", src : "./day21/day21-1.html", date: "22.11.21", content: "정규식 reduce 문자열"},
  {id: 9, title : "#가위바위보 #삼항연산자 #tilde(틸트연산자) #Math.floor #Math.max", src : "./day22/day22-1.html", date: "22.11.22", content: "~~, 삼항연산자, 틸트연산자"},
  {id: 10, title : "#Array from", src : "./day22/day22-2.html", date: "22.11.22", content: ""},
]

// 처음에 들어왔을 때, 리스트 생성

searchData.forEach((a,i)=> {
  $('.list-container').append(
    `<a href="${a.src}">
    <div class="list">
      <h3>${a.title}</h3>
      <h5 class="date">${a.date}</h5>
      <h4>${a.content}</h4>
    </div>
  </a>`
  )
})




// input 태그를 누르면 search 버튼 누르는 효과

function enter(){
  $('.searchBtn').click();
}

//===========================
//검색기능
//===========================

$('.searchBtn').click(function(){
  let search = $('.search').val();

  let newsearch = searchData.filter((a)=>{
    return a.title.includes(search); 
  })

  $('.list-container').html('');

  newsearch.forEach((a,i) =>{
    $('.list-container').append(
      `<a href="${a.src}">
    <div class="list">
      <h3>${a.title}</h3>
      <h5 class="date">${a.date}</h5>
      <h4>${a.content}</h4>
    </div>
  </a>`
    )
  })

  $('.list h3').each(function(i, effect){
    let title = effect.innerHTML;
    title = title.replace(search, `<span style="background: rgb(255, 205, 68)">${search}</span>`)
    effect.innerHTML = title;
  })

})