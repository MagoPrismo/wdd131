//code for the footer
const today = new Date();
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

//code for the hamburguer menu

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>
{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const screenSize = window.innerWidth;

if (screenSize >= 500) {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
}

// temples data //

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3548.jpg"
      },
      {
        templeName: "Draper Utah",
        location: "Draper, Utah, United States",
        dedicated: "2009, March, 20",
        area: 58300,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-14077.jpg"
      },
      {
        templeName: "Ogden Utah",
        location: "Ogden, Utah, United States",
        dedicated: "1969, September, 8",
        area: 112232,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-4173.jpg"
      },
      {
        templeName: "Brasilia Brazil",
        location: "Brasilia, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39204.jpg"
      },
      {
        templeName: "Kirtland Ohio",
        location: "Kirtland, Ohio, United States",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-59480.jpg"
      },
  ];

// population //
page.innerHTML = "Home";
createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".temple-img").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-img").appendChild(card);
        
    })
}

// filter functions //

const Homebutton = document.querySelector('#home');
const Oldbutton = document.querySelector('#old');
const Newbutton = document.querySelector('#new');
const Largebutton = document.querySelector('#large');
const Smallbutton = document.querySelector('#small');

Homebutton.addEventListener('click', () => {
    createTempleCard(temples);
    page.innerHTML = "Home";
}
)

Oldbutton.addEventListener('click', () => {
    let OldTemp = temples.filter(temple => temple.dedicated.slice(0,4) <= "1900");
    createTempleCard(OldTemp);
    page.innerHTML = "Old";
})

Newbutton.addEventListener('click', () => {
    let NewTemp = temples.filter(temple => temple.dedicated.slice(0,4) >= "2000");
    createTempleCard(NewTemp);
    page.innerHTML = "New";
})

Largebutton.addEventListener('click', () => {
    let LargeTemp = temples.filter(temple => temple.area >= "90000");
    createTempleCard(LargeTemp);
    page.innerHTML = "Large";
})

Smallbutton.addEventListener('click', () => {
    let SmallTemp = temples.filter(temple => temple.area <= "10000");
    createTempleCard(SmallTemp);
    page.innerHTML = "Small";
})