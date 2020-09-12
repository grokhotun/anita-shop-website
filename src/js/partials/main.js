document.addEventListener("DOMContentLoaded", function (event) {

    !!include('./partials/polyfills.js');
    !!include('./partials/common.js');

    const filterItemToggle = () => {
        document.querySelectorAll('.filter-item__header').forEach(item => {
            item.addEventListener('click', e => {
                e.target.closest('.filter-item').classList.toggle('is-opened');
            })
        })
    };

    const filterSlider = () => {
        const stepsSlider = document.querySelector('.filter-slider__line');
        const input0 = document.querySelector('.filter-slider__value--from');
        const input1 = document.querySelector('.filter-slider__value--to');
        const inputs = [input0, input1];

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

    const toggleCategoryFilterMenu = () => {
        document.querySelector('.js-filter-category-line').addEventListener('click', e => {
            e.target.closest('.filter-category').classList.toggle('is-opened');
        })
    };

    const addToFavourite = () => {
        const parents = document.querySelectorAll('.js-like-btn');
        parents.forEach(item => {
            item.addEventListener('click', event => {
                event.target.closest('.product-card__like').querySelector('.icon').classList.toggle('is-active');
            })
        })
    };

    const categoryListFilter = () => {
        document.querySelector('.js-category-list').addEventListener('click', e => {
            if (e.target.closest('li')) {
                e.target.classList.toggle('is-current')
            }
        })
    };

    const footerListToggle = () => {
        const parents = document.querySelectorAll('.js-footer-list');
        parents.forEach(item => {
            item.addEventListener('click', e => {
                if (e.target.closest('.middle-footer__list') && e.target.tagName != 'A') {
                    e.target.closest('.middle-footer__list').classList.toggle('is-opened')
                }
            })
        })
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