var searchData = [
  {id: 0, title : "#array #object sum(합) 구하기", src : "./22:11/day10/day10.html", date: "22.11.10", content: "콜백함수 활용해서 array, object 정렬하기"},
  {id: 1, title : "#reverse 문자열, array 반대정렬하기", src : "./22:11/day14/day14-1.html", date: "22.11.14", content: "reverse API"},
  {id: 2, title : "#else if #?, #sort, #..., #repeat", src : "./22:11/day14/day14-2.html", date: "22.11.14", content: "array 정렬 함수"},
  {id: 3, title : "#gcd최대공약수 #for반복문 #new Map <br>#array안 array #new Set", src : "./22:11/day15/day15-1.html", date: "22.11.15", content: ""},
  {id: 4, title : "#toString #Number #fill #Array", src : "./22:11/day15/day15-2.html", date: "22.11.15", content: ""},
  {id: 5, title : "#gcd #lcd #유클리드호제법", src : "./22:11/day16/day16-1.html", date: "22.11.16", content: "array 정렬 함수"},
  {id: 6, title : "#문자를 array로 변환 #split #[...] #array를 문자 변수로 변환 #array 숫자열로 변환 #숫자를 array로 변환", src : "./22:11/day16/day16-2.html", date: "22.11.16", content: "문자열 <--> array"},
  {id: 7, title : "#정규식", src : "./22:11/day16/day16-3.html", date: "22.11.16", content: "정규식 /[a-z]/"},
  {id: 8, title : "#문자열->숫자열로 바꾸기 #reduce #대문자소문자 변환 #팩토리얼", src : "./22:11/day21/day21.html", date: "22.11.21", content: "정규식 reduce 문자열"},
  {id: 9, title : "#가위바위보 #삼항연산자 #tilde(틸트연산자) #Math.floor #Math.max", src : "./22:11/day22/day22-1.html", date: "22.11.22", content: "~~, 삼항연산자, 틸트연산자"},
  {id: 10, title : "#Array from", src : "./22:11/day22/day22-2.html", date: "22.11.22", content: "연속숫자배열만들기"},
  {id: 11, title : "#unshift #shift #pop #slice #splice", src : "./22:11/day23/day23.html", date: "22.11.23", content: "배열자르고 붙이기"},
  {id: 12, title : "#array, object key, value #Object.entries", src : "./22:11/day24/day24-1.html", date: "22.11.24", content: "key value값이 있는 array와 object생성"},
  {id: 13, title : "#array, object key,value 넣기 #문자slice #newRexExp", src : "./22:11/day24/day24-2.html", date: "22.11.24", content: "최근 제일 어려웠던문제들"},
  {id: 14, title : "#소인수분해 #new Set #unshift #splice", src : "./22:11/day28/day28.html", date: "22.11.28", content: "최근 제일 어려웠던문제들2"},
  {id: 15, title : "#배열의 중복값 세기", src : "./22:12/day1/day1-1.html", date: "22.12.01", content: "배열 속 중복값 세기"},
  {id: 16, title : "#로그인성공 #치킨쿠폰 #등수 매기기 #특이한 정렬 #저주의 숫자 3", src : "./22:12/day1/day1-2.html", date: "22.12.01", content: "어려웠던문제들3"},
  {id: 17, title : "#백준 JS 입력값가져오기 #trim", src : "./22:12/day2/day2.html", date: "22.12.02", content: "백준코테-사칙연산(1)"},
  {id: 18, title : "#백틱사용하기 #사분면 #시간계산(60분)", src : "./22:12/day5/day5.html", date: "22.12.05", content: "백준코테-조건문, 반복문"},
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


//===========================
//게시물 총 개수
//===========================

$('.count').html('').append(
  `<h4>총게시물 : ${searchData.length} 개</h4>`
)