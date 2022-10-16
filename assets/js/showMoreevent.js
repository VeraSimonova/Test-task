const el = document.querySelector('.product-list__item__info__time__block__more');
let times = document.querySelectorAll('.product-list__item__info__time');
    el.addEventListener('click', function (event) {
         el.style.display = 'none';
        for(let time of times){
            time.style.flexWrap = 'wrap';
            time.style.flexDirection = 'row';
            time.style.bottom = '80px';
        } 
    });