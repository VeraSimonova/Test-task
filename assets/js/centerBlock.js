
    let priceBlock = document.querySelectorAll('.product-list__item__info__price');
    priceBlock.forEach(el => {
        let childCount = el.childElementCount;
        if(childCount < 2){
            el.style.height = '46px'
        }
    });
