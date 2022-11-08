// 모바일 부분 수정

// 1) 차트 부분 크기 수정
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $('.right').css('display', 'none');
  $('.left').css('display', 'none');
  $('.topNav').css('padding-top', '0px')
  $('.toggle').css('display', 'block');
}