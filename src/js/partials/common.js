const formValidation = () => {
    const defaultConfig = {
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

    var form = document.querySelector('.form')
    var pristine = new Pristine(form, defaultConfig);


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = pristine.validate(); // returns true or false
        if (valid) {
            form.submit();
        }
    });
};

const burgerMenu = (className) => {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector(`.${className}`);
    if (burgerMenu) {
        burger.addEventListener('click', (e) => {
            burger.classList.toggle('is-active');
            burgerMenu.classList.toggle('is-active');
            document.querySelector('body').classList.toggle('lock');
        })
    }
};

const imgToBackground = () => {
    document.querySelectorAll(".ibg").forEach(el => {
        if (el.querySelector('img')) {
            el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
            el.querySelector('img').style.display = 'none';
        }
    });
};

const preloader = () => {
    const preloaderBody = document.querySelector('.preloader__body');
    const preloader = document.querySelector('.preloader');
    const body = document.querySelector('body'); 
    if (preloader) {
        body.classList.add('lock');
        new Promise((resolve) => {
            setTimeout(resolve, 800)
        })
        .then(() => {
            preloaderBody.style.display = 'none';
            preloader.classList.add('is-loaded');
            body.classList.remove('lock');
        });
    }
};