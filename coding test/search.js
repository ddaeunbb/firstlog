var searchData = [
  {id: 0, title : "#array #object sum(합) 구하기", src : "./day10.html", date: "22.11.10", content: "콜백함수 활용해서 array, object 정렬하기"}
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
    title = title.replace(search, `<span style="background: rgb(182, 182, 182)">${search}</span>`)
    effect.innerHTML = title;
  })

})