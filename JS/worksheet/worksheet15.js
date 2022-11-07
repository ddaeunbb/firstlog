let 시작좌표 = 0;
let 두번째좌표 = 0;
let 세번째좌표 = 0;
let 눌렀냐 = false;
let 눌렀냐1 = false;
let 눌렀냐2 = false;
let 기본값 = 600;
let 기본값2 = 1200;

// 데스크탑 or 노트북 기기

// 첫 번째 이미지 박스

$('.slide-box').eq(0).on('mousedown', function(e){
  시작좌표 = e.clientX;
  눌렀냐 = true;
  });

$('.slide-box').eq(0).on('mousemove', function(e){
  if (눌렀냐 === true) {
    if (e.clientX - 시작좌표 < 0){
    $('.slide-container').css('transform', `translateX( ${e.clientX - 시작좌표}px )`)
  } else {
    $('.slide-container').css('transform', 'translateX(0px)')
  }}
});

$('.slide-box').eq(0).on('mouseup', function(e){
  눌렀냐 = false;

  if(e.clientX - 시작좌표 < -100){
    $('.slide-container')
    .css('transform', 'translateX(-600px)')
    .css('transition', 'all 0.5s')
  } else{
    $('.slide-container')
    .css('transform', 'translateX(0px)')
    .css('transition', 'all 0.5s')
  }

  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 300)
})

// 두번째 이미지 박스


$('.slide-box').eq(1).on('mousedown', function(e){
  두번째좌표 = e.clientX;
  눌렀냐1 = true;
  });

$('.slide-box').eq(1).on('mousemove', function(e){
if (눌렀냐1 === true){
  $('.slide-container').css('transform', `translateX(${e.clientX - 두번째좌표 - 기본값}px)`)
  }
});

$('.slide-box').eq(1).on('mouseup', function(e){
  눌렀냐1 = false;

  if(e.clientX - 두번째좌표 < -100){
    $('.slide-container')
    .css('transform', 'translateX(-1200px)')
    .css('transition', 'all 0.5s')
  } else if (e.clientX - 두번째좌표 > 100){
    $('.slide-container')
    .css('transform', 'translateX(0px)')
    .css('transition', 'all 0.5s')
  } else{
    $('.slide-container')
    .css('transform', 'translateX(-600px)')
    .css('transition', 'all 0.5s')
  }

  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 300)
})

// 세번째 이미지 박스

$('.slide-box').eq(2).on('mousedown', function(e){
  세번째좌표 = e.clientX;
  눌렀냐2 = true;
  });

$('.slide-box').eq(2).on('mousemove', function(e){
  if (눌렀냐2 === true){
    if (e.clientX - 시작좌표 > 0){
  $('.slide-container').css('transform', `translateX(${e.clientX - 시작좌표 - 기본값2}px )`)
  } else {
  $('.slide-container').css('transform', 'translateX(-1200px)')
  }}
});

$('.slide-box').eq(2).on('mouseup', function(e){
  눌렀냐2 = false;
  if (e.clientX - 세번째좌표 > 0){
    $('.slide-container')
    .css('transform', 'translateX(-600px)')
    .css('transition', 'all 0.5s')
  }

  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 300)
});


// 모바일 기기 

let 기본값3 = 350;
let 기본값4 = 700;

// 첫번째 이미지 박스

$('.slide-box').eq(0).on('touchstart', function(e){
  시작좌표 = e.touches[0].clientX;
  눌렀냐 = true;
  });

$('.slide-box').eq(0).on('touchmove', function(e){
  if (눌렀냐 === true) {
    if (e.touches[0].clientX - 시작좌표 < 0){
    $('.slide-container').css('transform', `translateX( ${e.touches[0].clientX - 시작좌표}px )`)
  } else {
    $('.slide-container').css('transform', 'translateX(0px)')
  }}
});

$('.slide-box').eq(0).on('touchend', function(e){
  눌렀냐 = false;

  if(e.changedTouches[0].clientX - 시작좌표 < -50){
    $('.slide-container')
    .css('transform', 'translateX(-350px)')
    .css('transition', 'all 0.5s')
  } else{
    $('.slide-container')
    .css('transform', 'translateX(0px)')
    .css('transition', 'all 0.5s')
  }

  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 300)
})

// 두번째 이미지 박스

$('.slide-box').eq(1).on('touchstart', function(e){
  두번째좌표 = e.touches[0].clientX;
  눌렀냐1 = true;
  });

$('.slide-box').eq(1).on('touchmove', function(e){
if (눌렀냐1 === true){
  $('.slide-container').css('transform', `translateX(${e.touches[0].clientX - 두번째좌표 - 기본값3}px)`)
  }
});

$('.slide-box').eq(1).on('touchend', function(e){
  눌렀냐1 = false;

  if(e.changedTouches[0].clientX - 두번째좌표 < -50){
    $('.slide-container')
    .css('transform', 'translateX(-700px)')
    .css('transition', 'all 0.5s')
  } else if (e.changedTouches[0].clientX - 두번째좌표 > 50){
    $('.slide-container')
    .css('transform', 'translateX(0px)')
    .css('transition', 'all 0.5s')
  } else{
    $('.slide-container')
    .css('transform', 'translateX(-350px)')
    .css('transition', 'all 0.5s')
  }

  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 300)
})

// 세번째 이미지 박스

$('.slide-box').eq(2).on('touchstart', function(e){
  세번째좌표 = e.touches[0].clientX;
  눌렀냐2 = true;
  });

$('.slide-box').eq(2).on('touchmove', function(e){
  if (눌렀냐2 === true){
    if (e.touches[0].clientX - 시작좌표 > 0){
  $('.slide-container').css('transform', `translateX(${e.touches[0].clientX - 시작좌표 - 기본값4}px )`)
  } else {
  $('.slide-container').css('transform', 'translateX(-700px)')
  }}
});

$('.slide-box').eq(2).on('touchend', function(e){
  눌렀냐2 = false;
  if (e.changedTouches[0].clientX - 세번째좌표 > 0){
    $('.slide-container')
    .css('transform', 'translateX(-350px)')
    .css('transition', 'all 0.5s')
  }

  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 300)
});



