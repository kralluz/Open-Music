const categories = [
    "Todos",
    "Pop",
    "MPB",
    "Forró",
    "Samba",
    "Baião",
    "Rap",
    "Hip-Hop",
    "Rock",
    "Reggae",
    "Country",
    "Gospel",
];

const products = [
    {
    title: "Magnetite",
    category: 8,
    price: 89.0,
    img: "./src/assets/img/1.jpg",
    band: "Scalene",
    year: 2017,
    id: 0,
    },
    {
    title: "Acabou o Chorare",
    category: 2,
    price: 66.0,
    img: "./src/assets/img/2.jpg",
    band: "Novos Baianos",
    year: 1972,
    id: 1,
    },
    {
    title: "Nirvana Discografia",
    category: 8,
    price: 50.0,
    img: "./src/assets/img/3.jpg",
    band: "Nirvana",
    year: 1990,
    id: 2,
    },
    {
    title: "Both Sides",
    category: 1,
    price: 22.0,
    img: "./src/assets/img/4.jpg",
    band: "Phil Collins",
    year: 1993,
    id: 3,
    },
];

const main = document.createElement("main");
document.body.appendChild(main);

const filter = document.createElement("section");
filter.classList.add("filter");
main.appendChild(filter);

const titleDiv = document.createElement("div");
titleDiv.classList.add("filter-title");
filter.appendChild(titleDiv);

const titleFilter = document.createElement("h2");
titleFilter.classList.add("filter__title");
titleFilter.innerHTML = "Gênero Musical";
titleDiv.appendChild(titleFilter);

const buttonsFilter = document.createElement("div");
buttonsFilter.classList.add("filter__buttons");
filter.appendChild(buttonsFilter);

const ulButtonsFilter = document.createElement("ul");
ulButtonsFilter.classList.add("filter__buttons-list");
buttonsFilter.appendChild(ulButtonsFilter);

const selectPrice = document.createElement("div");
selectPrice.classList.add("price-select");
filter.appendChild(selectPrice);

const topSelect = document.createElement("div");
topSelect.classList.add("price-select__top");
selectPrice.appendChild(topSelect);

const bottom = document.createElement("div");
bottom.classList.add("price-select__bottom");
selectPrice.appendChild(bottom);

const priceRange = document.createElement("input");
priceRange.classList.add("price-select__range");

const titleSelectprice = document.createElement("h2");
titleSelectprice.classList.add("title__selectPrice");
titleSelectprice.innerHTML = "Definir preço";
topSelect.appendChild(titleSelectprice);

const valueDisplay = document.createElement("span");
valueDisplay.classList.add("value__display");
priceRange.addEventListener("input", function (event) {
    if (valueDisplay == "") {
    valueDisplay.innerHTML = "Até ";
    } else {
    valueDisplay.innerHTML = "Até R$ " + priceRange.value;
    renderCards(activeCategory, Number(priceRange.value));
    }
});
topSelect.appendChild(valueDisplay);
priceRange.type = "range";
priceRange.min = "0";
priceRange.max = "1000";
priceRange.value = "100";
bottom.appendChild(priceRange);

const productsSection = document.createElement("section");
productsSection.classList.add("product");
main.appendChild(productsSection);

const productsTitle = document.createElement("h2");
productsTitle.classList.add("products-title");
productsTitle.innerHTML = "Álbuns encontrados";
productsSection.appendChild(productsTitle);

const renderProduct = document.createElement("div");
renderProduct.classList.add("product-section__render");
productsSection.appendChild(renderProduct);

let activeCategory = 0;

function renderCategories() {
    categories.forEach((element, index) => {
    const liButtonsFilter = document.createElement("li");
    ulButtonsFilter.appendChild(liButtonsFilter);

    const buttonCategories = document.createElement("button");
    buttonCategories.className = "button__categories";
    buttonCategories.innerHTML = element;

    buttonCategories.addEventListener("click", function () {
        activeCategory = index;
        renderCards(activeCategory, Number(priceRange.value));
        setActiveButton(buttonCategories);
    });

    liButtonsFilter.appendChild(buttonCategories);
    });
}

function setActiveButton(button) {
    const buttons = document.getElementsByClassName("button__categories");
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("button--Active");
    }
    button.classList.add("button--Active");
}

function renderCards(category, maxPrice) {
    renderProduct.innerHTML = "";

    const filteredProducts =
    category === 0
        ? products.filter((product) => product.price <= maxPrice)
        : products.filter(
            (product) =>
            product.category === category && product.price <= maxPrice
        );

    filteredProducts.forEach((element) => {
    const renderCards = document.createElement("div");
    renderCards.className = "render--cards";
    renderProduct.appendChild(renderCards);

    const card = document.createElement("div");
    card.classList.add("card");
    renderCards.appendChild(card);

    const cardImg = document.createElement("img");
    cardImg.classList.add("card--img");
    cardImg.src = element.img;
    card.appendChild(cardImg);

    const cardBotton = document.createElement("div");
    cardBotton.classList.add("card__botton");
    card.appendChild(cardBotton);

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card__title");
    cardTitle.innerHTML = element.band + " " + element.year;
    cardBotton.appendChild(cardTitle);

    const cardBand = document.createElement("h4");
    cardBand.classList.add("card__band");
    cardBand.innerHTML = element.title;
    cardBotton.appendChild(cardBand);

    const purchaceDiv = document.createElement("div");
    purchaceDiv.classList.add("purchace__div");
    cardBotton.appendChild(purchaceDiv);

    const cardPrice = document.createElement("h4");
    cardPrice.classList.add("purchace__price");
    cardPrice.innerHTML = "R$ " + element.price.toFixed(2);
    purchaceDiv.appendChild(cardPrice);
    const buttonPurchase = document.createElement("button");
    buttonPurchase.classList.add("button__purchase");
    buttonPurchase.innerHTML = "Comprar";
    purchaceDiv.appendChild(buttonPurchase);
    });
}

renderCategories();
renderCards(activeCategory, Number(priceRange.value));


function darktheme() {
    const buttonTheme = document.getElementById("theme");
    const imgButtons = document.getElementById("moon&sun");

    buttonTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        imgButtons.src = "./src/assets/img/sun.png";
    } else {
        imgButtons.src = "./src/assets/img/moon.png";
    }
    });
}


darktheme()