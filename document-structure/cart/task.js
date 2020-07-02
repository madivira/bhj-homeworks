const productValue = document.querySelectorAll(".product__quantity-value");//количество выбранного товара(не может быть отрицательным) 
const productControl = document.querySelectorAll(".product__quantity-control");//регулировка кол-ва товара в корзине
const add = document.querySelectorAll(".product__add");//добавление в корзину
let products = document.querySelector(".cart__products");//корзина

//увеличение и уменьшение выбранного товара(не может быть отрицательным)
productControl.forEach( element => {

    let parent = element.closest(".product__quantity-controls");
    let product = parent.querySelector(".product__quantity-value");//количество в корзине

    element.addEventListener('click', function(){
        
        if(element.classList.contains("product__quantity-control_dec")) {//уменьшить кол-во товара в корзине
            if(Number(product.textContent) === 1){
                product.textContent = 1;
            } else {
                product.textContent = Number(product.textContent) - 1;
            }
        } else if(element.classList.contains("product__quantity-control_inc")){//увеличивает кол-во товара в корзине
            
            product.textContent = Number(product.textContent) + 1;
        };
    });
});

//добавление в корзину
add.forEach(element => {
    element.addEventListener('click', function() {

        let parent = element.closest(".product__quantity");
        let product = parent.querySelector(".product__quantity-value");//количество в корзине
        
        const elementAdd = document.createElement('div');//создаем элемент
        elementAdd.classList.add('cart__product');//присваиваем ему класс
        const parentEl = element.closest('.product');//родительский элемент
        elementAdd.dataset.id =`${parentEl.dataset.id}`;//присваиваем карточке в корзине data id
        
        elementAdd.innerHTML = `<div class="cart__product-count">${product.textContent}</div>`;
        elementAdd.insertAdjacentElement('afterbegin', parentEl.querySelector('img').cloneNode(false));
        elementAdd.querySelector('img').className = "cart__product-image";//изменить класс у добавленного изображения

        if(products.querySelector(".cart__product")){//если элемент добавляется не первым в корзину
            for (let element of Array.from(products.querySelectorAll(".cart__product"))){//рабочий вариант, но добавляет новый элемент в конец
                if (element.dataset.id == elementAdd.dataset.id) {// если найден такой эл то заменяем его новым
                    elementAdd.querySelector('.cart__product-count').textContent = Number(elementAdd.querySelector('.cart__product-count').textContent) + Number(element.querySelector('.cart__product-count').textContent)
                    
                    element.replaceWith(elementAdd);
                } else {
                    products.insertAdjacentElement('beforeend',elementAdd);//если не найден, то добавляем новый
                    
                }
            } 
        } else {//если добавляется первый элемент
            products.insertAdjacentElement('beforeend',elementAdd);
        }
    })
});
