$.get('https://ddaeunbb.github.io/JS/worksheet/store.json')
.done(function(data){
  var products = data.products;
  console.log(products);


  products.forEach((a, i)=>{
    var card = `<div class="card">
    <div class="card-img">
      <img src="${products[i].photo}" alt="">
    </div>
    <div class="card-text">
      <h3>${products[i].title}</h3>
      <h4>${products[i].brand}</h4>
      <h4>${products[i].price}원</h4>
    </div>
    <div class="buybtn">
      <button class="buy">담기</button>
    </div>
    <div style="clear: both;"></div>
  </div>`

  $('.card-container').append(card);
  })
})



