'use strict';

var pageHeader = document.querySelector('.page-header');
var btnMenu = pageHeader.querySelector('.menu-btn');
var btnsOpenText = document.querySelectorAll('.notification__open-text');
var newsList = document.querySelector('.news-list');
var newsWrap = document.querySelector('.news-wrap');


var openMainMenu = function () {

  var siteNav = pageHeader.querySelector('.site-nav');
  var comparing = pageHeader.querySelector('.comparing');
  var userLogin = pageHeader.querySelector('.user-login');
  var callBack = pageHeader.querySelector('.call-back');

  if (btnMenu.classList.contains('menu-btn--open')) {

    btnMenu.classList.remove('menu-btn--open');
    btnMenu.classList.add('menu-btn--close');
    pageHeader.classList.remove('page-header--nav-hide');
    siteNav.classList.remove('site-nav--hide');
    comparing.classList.remove('comparing--hide');
    userLogin.classList.remove('user-login--hide');
    callBack.classList.add('call-back--left-align');

  } else if (btnMenu.classList.contains('menu-btn--close')) {

    btnMenu.classList.remove('menu-btn--close');
    btnMenu.classList.add('menu-btn--open');
    pageHeader.classList.add('page-header--nav-hide');
    siteNav.classList.add('site-nav--hide');
    comparing.classList.add('comparing--hide');
    userLogin.classList.add('user-login--hide');
    callBack.classList.remove('call-back--left-align');

  }
}

var openText = function (clickEvt) {

  var currentBtn = clickEvt.path[0];
  var currentArticle = clickEvt.path[1];
  var currentText = currentArticle.querySelector('.notification__text');

  if (currentBtn.classList.contains('notification__close-text')) {
    currentBtn.classList.remove('notification__close-text');
    currentText.classList.add('notification__text--hide');
  } else {
    currentBtn.classList.add('notification__close-text');
    currentText.classList.remove('notification__text--hide');
  }
};

// События
// Показ, скрытие текстовых блоков
for (var btnOpenTxt of btnsOpenText) {
  btnOpenTxt.addEventListener('click', function (evt) {

    evt.preventDefault();
    console.log(evt);
    openText(evt);

  })
};

// Показ главного меню
btnMenu.addEventListener('click', function (evt) {

  evt.preventDefault();
  openMainMenu();

});

// Прокрутка ленты новостей
var startX = 0;
var endX = 0;

newsWrap.addEventListener('mousedown', function (evt) {

  startX = evt.pageX;

});

newsWrap.addEventListener('mouseup', function (evt) {

  endX = evt.pageX;

  leafNews();

});

newsWrap.addEventListener('touchstart', function (evt) {

  startX = evt.touches[0].pageX;

});

newsWrap.addEventListener('touchend', function (evt) {

  endX = evt.changedTouches[0].pageX;

  leafNews();

});


var leafNews = function () {

  var left = newsList.style.left;

  (left === '') ? left = 0 : left;
  left = parseInt(left); // значение без px

  var positionLeft = left - (startX - endX);

  if (positionLeft < -768) {
    positionLeft = -768;
  }
  if (positionLeft > 0) {
    positionLeft = 0;
  }

  newsList.style.left = positionLeft +'px';

}
