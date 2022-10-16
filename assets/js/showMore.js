'use strict';
let time = document.querySelectorAll('.product-list__item__info__time');
time.forEach(timeEl => {
    //количество элементов в этой строке
    let timeBlock = Array.from(timeEl.children);
    //длинна строки
    let timeWidth = timeEl.offsetWidth;
    timeBlock.forEach(el=>{
        //длина каждого элемента
        let blockWidth = el.offsetWidth;
        //количество элементов, которые помещаются в одну строку 
        let countElInTimeBlock = Number(timeWidth/blockWidth);
        if(timeBlock.length > countElInTimeBlock){
            let showMore = `<div class="product-list__item__info__time__block__more"><p>ещё...</p></div>`;
            timeEl.innerHTML += showMore;
        }
    })  
});
