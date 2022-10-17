'use strict';
let time = document.querySelectorAll('.product-list__item__info__time');
time.forEach(timeEl => {

    let timeBlock = Array.from(timeEl.children);
    
    let timeWidth = timeEl.offsetWidth;
    timeBlock.forEach(el=>{
        let blockWidth = el.offsetWidth;
        let countElInTimeBlock = Number(timeWidth/blockWidth);
        
        if(timeBlock.length > countElInTimeBlock){
            let showMore = `<div class="product-list__item__info__time__block__more"><p>ещё...</p></div>`;
            timeEl.innerHTML += showMore;
            timeEl.style.bottom = '80px'
        }
    })  
});
