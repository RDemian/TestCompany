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

var openText = function () {
  var notificationText = document.querySelectorAll('.notification__text');
  var notificationOpenText = document.querySelectorAll('.notification__open-text');

};

// События
btnMenu.addEventListener('click', function (evt) {

  evt.preventDefault();
  openMainMenu();

});

btnOpenText.addEventListener('click', function (evt) {

  evt.preventDefault();
  console.log(evt);
  //openText();

});
