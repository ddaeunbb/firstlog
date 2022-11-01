var products = [
  {id : 0, title : '희대의 화가가 쓴 분필', price : 10},
  {id : 1, title : '미켈란젤로가 버린 조각상', price : 50},
  {id : 2, title : '비틀즈가 쪼갠 레코드판', price : 20}
];

var accessory = [
  {id : 0, title : '중세시대 좌물쇠', price : 80},
  {id : 1, title : '중세시대의 향수', price : 50},
  {id : 2, title : '알 수 없는 중세시대 물건', price : 70}
];

var etc = [
  {id : 0, title : '스티브잡스가 쓰던 아이팟', price : 70},
  {id : 1, title : '앤디워홀의 전화기', price : 100},
  {id : 2, title : '마이클잭슨의 장난감', price : 90}
];


products.forEach((a, i) =>{
  var card = `<div class="card">
      <img class="card-img-top" alt="...">
      <div class="card-body">
      <h5>${a.title}</h5>
      <p>가격: ${a.price}억</p>
      <a href="#" class="btn btn-primary">장바구니에 넣기</a>
    </div>
  </div>`;

  $('.work-area').append(card);
  $('.card-img-top').eq(i).attr('src', `../source/worksheet12-${i+1}.jpeg`)
});

count = 0;

$('.moreButton').click(function(){
  if (count == 0){
  accessory.forEach((a, i)=>{
  var card = `<div class="card">
  <img class="card-img-top" alt="...">
  <div class="card-body">
  <h5>${a.title}</h5>
  <p>가격: ${a.price}억</p>
  <a href="#" class="btn btn-primary">장바구니에 넣기</a>
  </div>
  </div>`;

  $('.work-area').append(card)
  $('.card-img-top').eq(i+3).attr('src', `../source/worksheet12-${i+4}.jpeg`)
  });
  count = count + 1;
} else if(count == 1){
  etc.forEach((a, i)=>{
    var card = `<div class="card">
    <img class="card-img-top" alt="...">
    <div class="card-body">
    <h5>${a.title}</h5>
    <p>가격: ${a.price}억</p>
    <a href="#" class="btn btn-primary">장바구니에 넣기</a>
    </div>
    </div>`;
  
    $('.work-area').append(card)
    $('.card-img-top').eq(i+6).attr('src', `../source/worksheet12-${i+7}.jpeg`)
    });
  count = count + 1;
} else{ return;}
});



$('.listButton').click(function(){
  if (count == 0){
    products.sort(function(a,b){
      return a.price - b.price;
    });
    $('.work-area').html('');
    
    products.forEach((a, i) =>{
      var card = `<div class="card">
          <img class="card-img-top" alt="...">
          <div class="card-body">
          <h5>${a.title}</h5>
          <p>가격: ${a.price}억</p>
          <a href="#" class="btn btn-primary">장바구니에 넣기</a>
        </div>
      </div>`;
    
      $('.work-area').append(card);
      $('.card-img-top').eq(0).attr('src', `../source/worksheet12-1.jpeg`)
      $('.card-img-top').eq(1).attr('src', `../source/worksheet12-3.jpeg`)
      $('.card-img-top').eq(2).attr('src', `../source/worksheet12-2.jpeg`)
    });
  } else if (count == 1){
    var second = [
      ...products,
      ...accessory
    ];

    second.sort(function(a,b){
      return a.price - b.price;
    });
    
    $('.work-area').html('');

    second.forEach((a, i) =>{
      var card = `<div class="card">
          <img class="card-img-top" alt="...">
          <div class="card-body">
          <h5>${a.title}</h5>
          <p>가격: ${a.price}억</p>
          <a href="#" class="btn btn-primary">장바구니에 넣기</a>
        </div>
      </div>`;
    
      $('.work-area').append(card);
      $('.card-img-top').eq(0).attr('src', `../source/worksheet12-1.jpeg`)
      $('.card-img-top').eq(1).attr('src', `../source/worksheet12-3.jpeg`)
      $('.card-img-top').eq(2).attr('src', `../source/worksheet12-2.jpeg`)
      $('.card-img-top').eq(3).attr('src', `../source/worksheet12-5.jpeg`)
      $('.card-img-top').eq(4).attr('src', `../source/worksheet12-6.jpeg`)
      $('.card-img-top').eq(5).attr('src', `../source/worksheet12-4.jpeg`)
    });    
  } else if (count == 2 ){
    var third = [
      ...products,
      ...accessory,
      ...etc
    ];
    third.sort(function(a,b){
      return a.price - b.price;
    })

    $('.work-area').html('');

    third.forEach((a,i)=>{
      var card = `<div class="card">
      <img class="card-img-top" alt="...">
      <div class="card-body">
      <h5>${a.title}</h5>
      <p>가격: ${a.price}억</p>
      <a href="#" class="btn btn-primary">장바구니에 넣기</a>
      </div>
    </div>`;

        
      $('.work-area').append(card);
      $('.card-img-top').eq(0).attr('src', `../source/worksheet12-1.jpeg`)
      $('.card-img-top').eq(1).attr('src', `../source/worksheet12-3.jpeg`)
      $('.card-img-top').eq(2).attr('src', `../source/worksheet12-2.jpeg`)
      $('.card-img-top').eq(3).attr('src', `../source/worksheet12-5.jpeg`)
      $('.card-img-top').eq(4).attr('src', `../source/worksheet12-6.jpeg`)
      $('.card-img-top').eq(5).attr('src', `../source/worksheet12-7.jpeg`)
      $('.card-img-top').eq(6).attr('src', `../source/worksheet12-4.jpeg`)
      $('.card-img-top').eq(7).attr('src', `../source/worksheet12-9.jpeg`)
      $('.card-img-top').eq(8).attr('src', `../source/worksheet12-8.jpeg`)
    });
  } else{ return;}
});