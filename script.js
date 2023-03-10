// массив с продукцией.
const products = [
    {
        id: 1,
        title: "Сказочное заморское явство",
        brand: "Нямушка",
        ingredient: "с фуа-гра",
        promo: "10 порций<br>мышь в подарок",
        weight: "0,5",
        description: "Печень утки разварная с артишоками.",
        available: 1,
    },
    {
        id: 2,
        title: "Сказочное заморское явство",
        brand: "Нямушка",
        ingredient: "с рыбой",
        promo: "40 порций<br>2 мыши в подарок",
        weight: "2",
        description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        available: 2,
    },
    {
        id: 3,
        title: "Сказочное заморское явство",
        brand: "Нямушка",
        ingredient: "с курой",
        promo: "100 порций<br>5 мышей в подарок<br>заказчик доволен",
        weight: "5",
        description: "Филе из цыплят с трюфелями в бульоне.",
        available: 0,
    },
];

const content = document.querySelector('.content');
const itemPoster = document.querySelector('.content-item-poster');
const contentItem = document.querySelector('.content-item')

window.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
});

function displayProducts(listItems) {
    let displayProductItem = listItems.map(function (item) {

        if (item.available > 0) {

            return `<div class="content-item">
            <div class="content-item-poster">
            <img src="./images/Cat.png" alt="CatIMG">
            <div class="content-item-poster-titles">
                <h3>${item.title}</h3>
                <h1>${item.brand}</h1>
                <h2>${item.ingredient}</h2>
                <h4>${item.promo}</h4>
            </div>
            
            </div>
            <div class="content-item-buy">
            <p>Чего сидишь? Порадуй котэ, <a href="./">купи.</a></p>
            </div>
            
            <div class="path"></div>
            <div class="content-item-weight">
            <h1>${item.weight}<br>кг</h1>
            </div>
            </div>`;
        }

        else {
            return `<div class="content-item">
            <div class="content-item-poster filter-disabled">
            <img src="./images/Cat.png" alt="CatIMG">
            <div class="content-item-poster-titles">
                <h3>${item.title}</h3>
                <h1>${item.brand}</h1>
                <h2>${item.ingredient}</h2>
                <h4>${item.promo}</h4>
            </div>
            
            </div>
            <div class="content-item-buy">
            <p class="bottom-text-filter">Печалька, ${item.ingredient} закончился</p>
            </div>
            
            <div class="path filter-disabled"></div>
            <div class="content-item-weight filter-weigth-disabled">
            <h1>${item.weight}<br>кг</h1>
            </div>
            </div>`;
        }

    });
    displayProductItem = displayProductItem.join("");
    content.innerHTML = displayProductItem;
}





