"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  /*
  Полифилы
  */
  // Полифил на forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  ;

  var formValidation = function formValidation() {
    var defaultConfig = {
      // class of the parent element where the error/success class is added
      classTo: 'top-footer__form',
      errorClass: 'has-danger',
      successClass: 'has-success',
      // class of the parent element where error text element is appended
      errorTextParent: 'top-footer__form',
      // type of element to create for the error text
      errorTextTag: 'div',
      // class of the error text element
      errorTextClass: 'text-help'
    };
    var form = document.querySelector('.form');
    var pristine = new Pristine(form, defaultConfig);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate(); // returns true or false

      if (valid) {
        form.submit();
      }
    });
  };

  var burgerMenu = function burgerMenu(className) {
    var burger = document.querySelector('.burger');
    var burgerMenu = document.querySelector(".".concat(className));

    if (burgerMenu) {
      burger.addEventListener('click', function (e) {
        burger.classList.toggle('is-active');
        burgerMenu.classList.toggle('is-active');
        document.querySelector('body').classList.toggle('lock');
      });
    }
  };

  var imgToBackground = function imgToBackground() {
    document.querySelectorAll(".ibg").forEach(function (el) {
      if (el.querySelector('img')) {
        el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
        el.querySelector('img').style.display = 'none';
      }
    });
  };

  var preloader = function preloader() {
    var preloaderBody = document.querySelector('.preloader__body');
    var preloader = document.querySelector('.preloader');
    var body = document.querySelector('body');

    if (preloader) {
      body.classList.add('lock');
      new Promise(function (resolve) {
        setTimeout(resolve, 800);
      }).then(function () {
        preloaderBody.style.display = 'none';
        preloader.classList.add('is-loaded');
        body.classList.remove('lock');
      });
    }
  };

  ;

  var filterItemToggle = function filterItemToggle() {
    document.querySelectorAll('.filter-item__header').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.target.closest('.filter-item').classList.toggle('is-opened');
      });
    });
  };

  var filterSlider = function filterSlider() {
    var stepsSlider = document.querySelector('.filter-slider__line');
    var input0 = document.querySelector('.filter-slider__value--from');
    var input1 = document.querySelector('.filter-slider__value--to');
    var inputs = [input0, input1];
    noUiSlider.create(stepsSlider, {
      start: [2500, 7000],
      connect: true,
      range: {
        'min': 0,
        'max': 10000
      },
      format: wNumb({
        decimals: 0,
        thousand: ''
      })
    });
    stepsSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });
    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
      });
    });
  };

  var toggleCategoryFilterMenu = function toggleCategoryFilterMenu() {
    document.querySelector('.js-filter-category-line').addEventListener('click', function (e) {
      e.target.closest('.filter-category').classList.toggle('is-opened');
    });
  };

  var addToFavourite = function addToFavourite() {
    var parents = document.querySelectorAll('.js-like-btn');
    parents.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.target.closest('.product-card__like').querySelector('.icon').classList.toggle('is-active');
      });
    });
  };

  var categoryListFilter = function categoryListFilter() {
    document.querySelector('.js-category-list').addEventListener('click', function (e) {
      if (e.target.closest('li')) {
        e.target.classList.toggle('is-current');
      }
    });
  };

  var footerListToggle = function footerListToggle() {
    var parents = document.querySelectorAll('.js-footer-list');
    parents.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target.closest('.middle-footer__list') && e.target.tagName != 'A') {
          e.target.closest('.middle-footer__list').classList.toggle('is-opened');
        }
      });
    });
  };

  burgerMenu('header__menu');
  imgToBackground();
  filterItemToggle();
  filterSlider();
  toggleCategoryFilterMenu();
  addToFavourite();
  categoryListFilter();
  footerListToggle();
  formValidation();
  preloader();
  svg4everybody();
});