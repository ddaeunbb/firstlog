localStorage.removeItem('cart');

var products = [
  {id : 0, title : '카메라', price : 20, source : "../source/worksheet13-0.jpeg"},
  {id : 1, title : '헤드폰', price : 50, source : "../source/worksheet13-1.jpeg"},
  {id : 2, title : '공책', price : 5, source : "../source/worksheet13-2.jpeg"}
];

// 기본으로 보여지는 work-area 부분

products.forEach((a,i) => {
  var card = `<div class="card">
  <img src="../source/worksheet13-${i}.jpeg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${a.title}</h5>
    <p class="card-text">${a.price}만원</p>
    <button class="btn btn-primary">장바구니에 넣기</button>
  </div>
  </div>`
  $('.work-area').append(card);
});

// 모달창 보이기

$('.btn').click(function(){
  $('.modal-container').addClass('view');
  setTimeout(function(){
    $('.modal-container').removeClass('view');
  }, 800);
})

// 가격순으로 보기

$('.listButton').one('click', function(){
  products.sort(function(a, b){
    return a.price - b.price;
  })

  $('.work-area').html('');

  products.forEach((a,i) => {
    var card = `<div class="card">
    <img class="card-img-top" src="${a.source}">
    <div class="card-body">
      <h5 class="card-title">${a.title}</h5>
      <p class="card-text">${a.price}만원</p>
      <button href="#" class="btn btn-primary">장바구니에 넣기</button>
    </div>
    </div>`
    $('.work-area').append(card);
  });


  // 모달창 보이기

  $('.btn').click(function(){
    $('.modal-container').addClass('view');
    setTimeout(function(){
      $('.modal-container').removeClass('view');
    }, 800);
  })
})

$('.btn').click(function(e){
  var title = $(e.target).siblings('h5').text();
  if (localStorage.getItem('cart') != null ){
    var 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(title);
    localStorage.setItem('cart', JSON.stringify(꺼낸거));
  } else {
    localStorage.setItem('cart', JSON.stringify([title]))
  }
});


