// jsを記述する際はここに記載していく

$(function() {

// メニューバーをフェードインさせる
$('.header-menus a').slideDown(800);

// 背景画像をフェードインさせる
$('.bgi').animate({'opacity': '1'}, 2000);

// ページ内スクロール
$('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop': position}, 500);
});

//　スライドショー
$('.about-images').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

});