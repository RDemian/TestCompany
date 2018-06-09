'use strict';

var pageHeader = document.querySelector('.page-header');
var btnMenu = pageHeader.querySelector('.menu-btn');
var btnOpenText = document.querySelector('.notification__open-text');

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
btnOpenText.addEventListener('click', function (evt) {

  evt.preventDefault();


  console.log(evt);
  openText(evt);

});

btnMenu.addEventListener('click', function (evt) {

  evt.preventDefault();
  openMainMenu();

});
