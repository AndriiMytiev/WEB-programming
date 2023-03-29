import {data} from './products.js'

const products = data;

const createProductList = (data) => {
    return `<ul id="productsList">${data.map(item => createListElement(item)).join('')}</ul>`
}

const createListElement = (item) => {
    return `<li class="productItem" id={item.id}>
            <div class="image">
                <img src=${item.image} alt=${item.name}>
            </div>

            <div class="info">
                <h3>${item.name}</h3>
                <h3>${item.color}</h3>
                <h4>${item.price}</h4>
                <h5>${item.article}</h5>
            </div>
        </li>`
}

window.addEventListener('load', () => {
    document.querySelector('.main').innerHTML = createProductList(products);
})