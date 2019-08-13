'use strict';
// checkbox
const checkbox = document.querySelectorAll(".filter-check_checkbox");

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function(){
        if (this.checked){
            this.nextElementSibling.classList.add("checked");
        } else {
            this.nextElementSibling.classList.remove("checked");
        }
    });
}

// end checkbox

// cart
const btnCart = document.getElementById('cart'),
    modalCart = document.querySelector('.cart'),
    closeCart = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

// end cart

// добавление товаров в корзину
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
   const btn = card.querySelector('button');

   btn.addEventListener('click', () => {
    //    копируем карточку товара со всеми картинками
    const cardClone = card.cloneNode(true);
    cartWrapper.appendChild(cardClone);
    cartEmpty.remove();
    showData();
   });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}

// end добавление товаров в корзину
