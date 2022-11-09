//===========================
//상품진열기능
//===========================

let products = [];
let cart = [];

$.get('https://ddaeunbb.github.io/JS/worksheet/store.json').then((data)=>{
  products = data.products;

  data.products.forEach((a, i) => {
    $('.card-container').append(
      `<div class="card" data-id="${a.id}" draggable="true">
        <div class="card-img">
          <img src="${a.photo}" alt="">
        </div>
        <div class="card-text">
          <h3 class="title">${a.title}</h3>
          <h3>${a.brand}</h3>
          <h5>${a.price}원</h5>
        </div>
        <button class="buy" data-id="${a.id}">담기</button>
        <div style="clear: both;"></div>
      </div>`)
  });

//========================
//담기버튼 누르면 일어날 일들
//========================


$('.buy').click(function(e){
  let productId = e.target.dataset.id;

  let putIn = cart.findIndex((a)=> {return a.id == productId;})
  
  if (putIn == -1){
    let item = products.find((a)=> {return a.id == productId;})
    item.count = 1;
    cart.push(item);
  } else{
    cart[putIn].count++;
  }

  $('.cart').html('');
  cart.forEach((a, i)=> {
    $('.cart').append(
      `<div class="card" data-id="${a.id}">
        <div class="card-img">
          <img src="${a.photo}" alt="">
        </div>
      <div class="card-text">
        <h3 class="title">${a.title}</h3>
        <h3>${a.brand}</h3>
        <h5>${a.price}원</h5>
      </div>
      <div class="count">
        <input class="totalCount" type="number" value="${a.count}">
      </div>
      <div style="clear: both;"></div>
  </div>`);
  })
})


$('.card').on('dragstart', function(e){
  e.originalEvent.dataTransfer.setData('id', e.target.dataset.id)
})

$('.cart').on('dragover', function(e){
  e.preventDefault();
})

$('.cart').on('drop', function(e){
  let productId = e.originalEvent.dataTransfer.getData('id');
  $('.buy').eq(productId).click();
})

//========================
//모바일용 드래그드롭
//========================
// $('.card').on('touchstart', function(e){
//   console.log(e.target);
// })





//========================
//검색 기능 만들기
//========================

$('.search').on('input', function(){
  let search = $('.search').val();

  let newProducts = products.filter((a)=>{
    return a.title.includes(search) || a.brand.includes(search)
  })

  $('.card-container').html('');
  newProducts.forEach((a,i)=>{
    $('.card-container').append(
      `<div class="card" data-id="${a.id}" draggable="true">
        <div class="card-img">
          <img src="${a.photo}" alt="">
        </div>
        <div class="card-text">
          <h3 class="title">${a.title}</h3>
          <h3>${a.brand}</h3>
          <h5>${a.price}원</h5>
        </div>
        <button class="buy" data-id="${a.id}">담기</button>
        <div style="clear: both;"></div>
      </div>`)
  })

  $('.card-text h3').each(function(i, effect){
    let title = effect.innerHTML;
    title = title.replace(search, `<span style="background: yellow;">${search}</span>`)
    effect.innerHTML = title;
  })

})


});






