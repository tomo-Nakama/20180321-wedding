document.addEventListener("DOMContentLoaded", function() {
  const dt = new Date();
  //年
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const date = dt.getDate();
  dateT = ["日", "月", "火", "水", "木", "金", "土"];
  const day = dateT[dt.getDay()];
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();
  console.log(hours, minutes, seconds);
  if (day > 21 && hours > 13 && minutes > 30) {
    $('.l-bgm').removeClass('is-hide')
  }
}, false);
//
// $(window).scroll(function() {
//   const _pos = $(window).scrollTop();
//   const pos = $(window).scrollTop();
//   console.log(pos);
// })

// 開いたときのwindowの高さを取得
var windowHeight = $(window).innerHeight();
console.log(windowHeight);

let nowPositionY = 0;
$(window).on('scroll', function() {
  let diffPositionY = nowPositionY - $(window).scrollTop();
  nowPositionY = $(window).scrollTop();
  if (diffPositionY > 0) {
    console.log('up', nowPositionY);
    $('#js-nav').addClass('is-hide')
  } else {
    $('#js-nav').removeClass('is-hide')
    // console.log('down', nowPositionY);
    if (parseInt(diffPositionY) > parseInt(windowHeight)) {
      console.log('aa');
    }
  }
});
//var startHeight = contentsHeight - windowHeight;
//
// $(window).scroll(function () {
//     var pos = $(window).scrollTop();
//
//     console.log(pos);
//     console.log(windowHeight * 2);
//
//     // 背景画像を移動距離に伴ってセピアからカラフルに
//     var percent = 100 - Math.round(pos / cntsHeight * 100);
//     var backroundSepiaImage = $('.hatsukoi__background');
//     backroundSepiaImage.css('filter', 'sepia(' + percent + '%)');
//
//     //  スクロール量によって移動
//     //    if (pos < windowHeight * 2) {
//     //        cntFst.addClass('is-fixed');
//     //        cntSnd.removeClass('is-absolute');
//     //        cntSnd.removeClass('is-fixed');
//     //        cntSnd.addClass('is-absoluteBefore');
//     //    } else if (pos < windowHeight * 3) {
//     //        cntSnd.addClass('is-fixed');
//     //    } else if (pos < windowHeight * 4) {
//     //        cntSnd.removeClass('is-absoluteBefore');
//     //        cntSnd.removeClass('is-fixed');
//     //        cntSnd.addClass('is-absolute');
//     //    };
//
//     //  スクロール量によって変化
//
//     var cntFstPosition = parseInt($('#trigger1 + div').css('padding-top'), 10);
//     console.log(cntFstPosition);
//     var spacerFst = $('.spacer--fst--bottom').position();
//     var spacerFstPosition = spacerFst.top - 450;
//     console.log(spacerFstPosition);
//     var opacityPercent = 1 - (pos - spacerFstPosition) / (101 + 300);
//     var blurPercent = (pos - spacerFstPosition) / (101 + 300) * 10;
//
//     if (pos > spacerFstPosition) {
//
//         cntFst.css('opacity', opacityPercent);
//         cntFst.css('filter', 'blur(' + blurPercent + 'px)');
//
//     } else if (pos < spacerFstPosition) {
//         cntFst.css('filter', 'blur(0)');
//         cntFst.css('opacity', '1');
//     };
//
//     // スクロールを禁止
//     function no_scroll() {
//         //PC用
//         var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
//         $(contents).on(scroll_event, function (e) {
//             e.preventDefault();
//         });
//         //SP用
//         $(contents).on('touchmove.noScroll', function (e) {
//             e.preventDefault();
//         });
//     };
//
//     // スクロールを復活
//     function return_scroll() {
//         //PC用
//         var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
//         $(contents).off(scroll_event);
//         //SP用
//         $(contents).off('.noScroll');
//     }
// });
//
// // 1つ目のボックスについてのアニメ
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger1",
//         duration: windowHeight * 2
//     })
//     .setPin("#js-cntFst")
//     .on("leave", function (event) {})
//         .addIndicators({
//             name: "1 (duration: 329)"
//         })
//     .addTo(controller);
//
// // 2つ目のボックスについてのアニメ
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger2",
//         duration: windowHeight
//     })
//     .setPin("#js-cntSnd")
//     //    .addIndicators({
//     //        name: "2 (duration: 329)"
//     //    })
//     .addTo(controller);
//
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger2",
//         duration: 300
//     })
//     .setTween("#js-cntSnd", {
//         x: 100,
//     })
//     .addTo(controller);
//
// // 3つ目のボックスについてのアニメ
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger3",
//         duration: windowHeight
//     })
//     .setPin("#js-cntThd")
//     //    .addIndicators({
//     //        name: "3 (duration: 329)"
//     //    })
//     .addTo(controller);
//
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger3",
//         duration: 300
//     })
//     .setTween("#js-cntThd", {
//         x: 100,
//     })
//     .addTo(controller);
//
// // 4つ目のボックスについてのアニメ
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger4",
//         duration: windowHeight
//     })
//     .setPin("#js-cntFour")
//     .setTween("#js-cntFour", {
//         x: 0
//     })
//     //    .addIndicators({
//     //        name: "4 (duration: 329)"
//     //    })
//     .addTo(controller);
//
// // 5つ目のボックスについてのアニメ
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger5"
//     })
//     .setVelocity("#js-cntFifth", {
//         opacity: 1
//     }, {
//         duration: 1000
//     })
//     //    .addIndicators({
//     //        name: "5 (duration: 1000)"
//     //    })
//     .addTo(controller);
