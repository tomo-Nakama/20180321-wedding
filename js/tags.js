'use strict';

// 開いたときのwindowの高さを取得
const windowHeight = $(window).innerHeight();
const windowWidth = $(window).width();
console.log(windowHeight);

function addShow() {
  let windowTop = $(window).scrollTop();
  $('.js-hide').each(function(index, el) {
    var $el = $(el);
    if (!$el.is('.js-show')) {
      const y = $el.offset().top;
      const oy = windowTop + windowHeight;
      if (y < (oy - 100)) {
        $el.addClass('js-show');
      }
    }
  });
}

// function showStore(e) {
//   // const storeHandle = $('.js-storeshow')
//   // console.log(storeHandle);
//   // this.on('click')
//   $('.js-storeshow').on('click',function(){
//     this.target.toggleClass('is-show')
//     this.target.next('dd').toggleClass('is-show')
//   });
//   // $('.js-storeshow').click(function(){
//   //   console.log(this);
//   //   // const storeHandle = this;
//   //   this.toggleClass('is-show')
//   //   storeHandle.next('dd').toggleClass('is-show')
//   // });
//   // storeHandle.each(function(index, el) {
//   //   el.addEventListener("click", function() {
//   //     storeHandle.toggleClass('is-show')
//   //     storeHandle.next('dd').toggleClass('is-show')
//   //   })
//   // })
// }


let nowPositionY = 0;
$(window).on('scroll', function() {
  addShow();

  let diffPositionY = nowPositionY - $(window).scrollTop();
  nowPositionY = $(window).scrollTop();
  if (diffPositionY > 0) {
    console.log('up', nowPositionY);
    if (nowPositionY > 667) {
        $('#js-nav').removeClass('is-hide')
    }
  } else {
    $('#js-nav').addClass('is-hide')
    // console.log('down', nowPositionY);
    if (parseInt(diffPositionY) > parseInt(windowHeight)) {
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const dt = new Date();
  //年
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const date = dt.getDate();
  const dateT = ["日", "月", "火", "水", "木", "金", "土"];
  const day = dateT[dt.getDay()];
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();
  console.log(date, hours, minutes);
  if (date >= 21 && hours >= 14) {
    $('.l-bgm').removeClass('is-hide')
  }
}, false);
