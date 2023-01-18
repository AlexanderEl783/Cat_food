// массив с продукцией.
const products = [
    {
        id: 1,
        title: "Сказочное заморское явство",
        brand: "Нямушка",
        ingredient: "с фуа-гр",
        promo: "10 порций<br>мышь в подарок",
        weight: "0,5",
        available: 1,
    },
    {
        id: 2,
        title: "Сказочное заморское явство",
        brand: "Нямушка",
        ingredient: "с рыбой",
        promo: "40 порций<br>2 мыши в подарок",
        weight: "2",
        available: 0,
    },
    {
        id: 3,
        title: "Сказочное заморское явство",
        brand: "Нямушка",
        ingredient: "с курой",
        promo: "100 порций<br>5 мышей в подарок<br>заказчик доволен",
        weight: "5",
        available: 1,
    },
];

const content = document.querySelector('.content');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
});

function displayProducts(listItems) {
    let displayProductItem = listItems.map(function (item) {
        return ` <div class="content-item">
        
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

      
    });
    displayProductItem = displayProductItem.join("");
    content.innerHTML = displayProductItem;
    available();
}

available = () => {
    for(let item of products) {
        if (item.available > 0) {
            console.log('yes')
        }
        else console.log('no')

        }
    }


// const select = document.getElementById('select');
// const btnAdd = document.getElementById('add-btn');
// const urlId = document.getElementById('urlId');
// const newCategoryDiv = document.getElementById('newCategory-div');
// const newCategorytId = document.getElementById('newCategorytId');
// const newCategoryBtn = document.getElementById('new-category-btn');

// newCategoryBtn.addEventListener('click', function () {
//     newCategoryDiv.classList.toggle('hide-category');
//     select.classList.toggle('hide-category');
// })

// btnAdd.addEventListener('click', () => {
//     let Object = {};
//     Object.id = list.length + 1;
//     Object.img = urlId.value;

//     if (!select.classList.contains('hide-category')) {
//         Object.category = select.value;
//     }
//     else {
//         Object.category = newCategorytId.value;
//     };
//     list.push(Object);

//     displayButtons();
//     displayPetsPhotos(list);
//     newCategoryDiv.classList.add('hide-category');
//     select.classList.remove('hide-category');
//     console.log(list);
//     displayOptions();
// });
