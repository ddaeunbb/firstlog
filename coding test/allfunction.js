$('.copy-button').click(function(e){
  var value = e.target.dataset.id;
  var text = document.querySelectorAll('.code')[value].innerHTML;
  window.navigator.clipboard.writeText(text);

  $('.modal').css('opacity', '1')

  setTimeout(function(){
    $('.modal').css('opacity', '0')
  }, 1500);

});
