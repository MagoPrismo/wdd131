//code for the footer//
const today = new Date();
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

//product array//

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function createProduct(products) {
    products.forEach(product => {
        let card = document.createElement('option');
        let name = document.createElement('h3');

        name.textContent = product.name;
        card.setAttribute('name', name);
        card.setAttribute('value', name);
        card.appendChild(name);

        document.querySelector('#product-name').appendChild(card);
    }) 
}

createProduct(products);

//counter//

function counter() {
  const STORAGE_KEY = 'reviewsCompleted';

  let reviewsCount = localStorage.getItem(STORAGE_KEY);

  if (reviewsCount === null) {
    reviewsCount = 0;
  } else {
    reviewsCount = parseInt(reviewsCount, 10);
  }

  reviewsCount++;

  //localStorage.getItem(STORAGE_KEY, reviewsCount);//

  //document.getElementById('reviewCounter').textContent = reviewsCount;//
}

counter();