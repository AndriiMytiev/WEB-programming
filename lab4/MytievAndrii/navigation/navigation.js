const navList = [
    {
        id: 1,
        title: 'Головна',
        link: './main.html'
    },
    {
        id: 2,
        title: 'Про нас',
        link: './about.html'
    },
    {
        id: 3,
        title: 'Новини',
        link: './news.html'
    },
    {
        id: 4,
        title: 'Послуги',
        link: './services.html'
    },
    {
        id: 5,
        title: 'Продукти',
        link: './products.html'
    },
];

const subNavList = [
    {
        id: 1,
        title: 'Історія',
        link: './history.html'
    },
    {
        id: 2,
        title: 'Команда',
        link: './team.html'
    },
    {
        id: 3,
        title: 'Контакти',
        link: './contacts.html'
    }]

const createList = (array) => {
    return `<ul>${array.map((item) => {
        if (item.title === 'Про нас') {
            return createListItem(item, true)
        }
        return createListItem(item, false)
    }).join('')}</ul>`;
}

const createListItem = (item, addAnotherList) => {
    if (addAnotherList === true) {
        return `<li id=${item.title + item.id}><a href=${item.link}>${item.title}</a></li>` +
            `<li id=${item.title + item.id} style="list-style: none">${createList(subNavList)}</li>`;
    } else {
        return `<li id=${item.title+item.id}><a href=${item.link}>${item.title}</a></li>`;
    }
}

// const task2 = () => {
//     const newElement = createList(navList);
//
//     const nav = document.querySelector('.nav');
//
//     console.log(newElement)
//
//     nav.innerHTML = newElement;
// }
//
// task2();

window.addEventListener("load", () => {
    const newElement = createList(navList);

    const nav = document.querySelector('.nav');

    console.log(newElement)

    nav.innerHTML = newElement;
})