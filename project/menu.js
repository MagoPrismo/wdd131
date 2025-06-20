//code for the footer
const today = new Date();
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

//code for the hamburguer menu

const mainnav = document.querySelector('.navigation2');
const hambutton = document.querySelector('#hidden-menu');

hambutton.addEventListener('click', () =>
{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const screenSize = window.innerWidth;

if (screenSize <= 500) {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
}

//menu//

const dishes = [
    // --- Meats (5 items) ---
    {
        dishName: "Premium Picanha",
        description: "Selected picanha cut grilled to perfection, juicy and flavorful.",
        price: 85.90,
        category: "Meats",
        available: true,
        suggestedPairings: ["Carreteiro Rice", "Egg Farofa", "Vinaigrette"],
        imageUrl: "https://media.istockphoto.com/id/1363601737/pt/foto/grilled-top-sirloin-or-cup-rump-beef-meat-steak-on-marble-board-black-background-top-view.jpg?s=1024x1024&w=is&k=20&c=ctYEFf8UQBFh4NxX8wiSTwr8aPKt-137E5uu-rMZ-Hk="
    },
    {
        dishName: "Slow-Cooked Beef Ribs",
        description: "Beef ribs slow-cooked for 8 hours, falling off the bone.",
        price: 79.50,
        category: "Meats",
        available: true,
        suggestedPairings: ["French Fries", "Fried Cassava"],
        imageUrl: "https://media.istockphoto.com/id/1257628760/pt/foto/korean-braised-pork-ribs-with-red-pepper-flakes-cherry-tomato-and-parsley.jpg?s=1024x1024&w=is&k=20&c=SrtmktG8NvmpwqeaK3gKr5WgJhbI_SpAeaJRanA6BbU="
    },
    {
        dishName: "Grilled Chicken Breast",
        description: "Tender chicken breast grilled, seasoned with herbs.",
        price: 48.00,
        category: "Meats",
        available: true,
        suggestedPairings: ["Steamed Vegetables", "Mashed Potatoes"],
        imageUrl: "https://media.istockphoto.com/id/1217760999/pt/foto/grilled-chicken-breasts-with-thyme-garlic-and-lemon-slices-on-a-grill-pan-close-up.jpg?s=1024x1024&w=is&k=20&c=A8cHNa0SQ6U3fRNykkk4d5GNSjBk3TvvcyGSSWRBya4="
    },
    {
        dishName: "Lamb Chops with Mint Sauce",
        description: "Juicy lamb chops perfectly grilled, served with a fresh mint sauce.",
        price: 95.00,
        category: "Meats",
        available: true,
        suggestedPairings: ["Asparagus", "Risotto"],
        imageUrl: "https://media.istockphoto.com/id/1140193057/pt/foto/lamb-chops-served-with-yogurt-sauce-and-fresh-mint.jpg?s=1024x1024&w=is&k=20&c=oRKUZo41Nbb_mbNRKW4D0fRYUnOkNd86awAuAhXiGrI="
    },
    {
        dishName: "Pork Ribs with Barbecue Sauce",
        description: "Smoked pork ribs covered in a sweet and tangy barbecue sauce.",
        price: 70.00,
        category: "Meats",
        available: true,
        suggestedPairings: ["Coleslaw", "Corn on the Cob"],
        imageUrl: "https://media.istockphoto.com/id/1086140442/pt/foto/closeup-of-pork-ribs-grilled-with-bbq-sauce-and-caramelized-in-honey-tasty-snack-to-beer-on-a.jpg?s=1024x1024&w=is&k=20&c=Wtd_hdThf1bslLNn4VqFhBYZL6yzsr9VCQvcNWpJHoc="
    },

    // --- Fish (5 items) ---
    {
        dishName: "Grilled Salmon with Vegetables",
        description: "Fresh salmon fillet grilled, served with a mix of sautéed vegetables in butter.",
        price: 68.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["White Rice", "Mashed Potatoes"],
        imageUrl: "https://media.istockphoto.com/id/175028181/pt/foto/filete-de-salm%C3%A3o-com-legumes.jpg?s=1024x1024&w=is&k=20&c=5IvGAIygZTB08XwSGH-4grAMJdxYkkqmXCvzpM4gyLI="
    },
    {
        dishName: "Codfish in Olive Oil",
        description: "Flaked codfish baked with potatoes, onions, peppers, and abundant olive oil.",
        price: 75.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["Broccoli", "Black Olives"],
        imageUrl: "https://media.istockphoto.com/id/1433381001/pt/foto/bacalhau-%C3%A0-gomes-de-s%C3%A1-one-of-the-most-famous-dishes-of-portuguese-cuisine.jpg?s=1024x1024&w=is&k=20&c=hx7U6SKFqTfsOYl4IDSlYwa1THk3nfLkENtqjjtz4ZA="
    },
    {
        dishName: "Shrimp Risotto",
        description: "Creamy risotto with sautéed shrimp and Parmesan cheese.",
        price: 88.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["White Wine", "Fresh Herbs"],
        imageUrl: "https://media.istockphoto.com/id/1475375781/pt/foto/risotto.jpg?s=1024x1024&w=is&k=20&c=zpv6WNU-gx6y_9aht4EZJSETGmBLeYW8u4GVSXIaKn0="
    },
    {
        dishName: "Tuna Steak with Sesame",
        description: "Seared tuna steak with a sesame crust, served medium-rare.",
        price: 72.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["Soy Sauce", "Ginger Salad"],
        imageUrl: "https://media.istockphoto.com/id/1222217606/pt/foto/sesame-seed-crusted-seared-tuna-steak.jpg?s=1024x1024&w=is&k=20&c=omzjNd_W1uAvc06oaIlXMQ52s0Je04o86u2a132796k="
    },
    {
        dishName: "Moqueca Capixaba",
        description: "Traditional Brazilian fish stew with tomatoes, onions, cilantro, and annatto oil.",
        price: 80.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["White Rice", "Pirão"],
        imageUrl: "https://media.istockphoto.com/id/1326687357/pt/foto/moqueca-capixaba.jpg?s=1024x1024&w=is&k=20&c=8A_UBfWtO-GYRrIcfY8V675HF0kd4JJ8Oq7gup_pb7w="
    },

    // --- Beverages (4 items) ---
    {
        dishName: "Coca-Cola (Can)",
        description: "Coca-Cola soft drink in a can, 350ml.",
        price: 8.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/487787108/pt/foto/lata-de-coca-cola-com-gelo.jpg?s=1024x1024&w=is&k=20&c=7ytkYRo1LgXhlfWC20cOGWpgV2TzA1wQEAPevEbaSWI="
    },
    {
        dishName: "Orange Juice (Freshly Squeezed)",
        description: "Freshly squeezed orange juice, natural and refreshing.",
        price: 12.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/452030153/pt/foto/por%C3%A7%C3%A3o-de-suco-de-laranja-fresco-feito.jpg?s=1024x1024&w=is&k=20&c=-JOtQtBhRS3A5TFnPY_xTOMsibsxwxLfLzqyikhDuS8="
    },
    {
        dishName: "Iced Tea (Lemon)",
        description: "Homemade iced tea with natural lemon flavor.",
        price: 10.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/497892585/pt/foto/feito-em-casa-ch%C3%A1-gelado-com-lim%C3%B5es.jpg?s=1024x1024&w=is&k=20&c=XJ5MljXJ_qmgWpsrSt-jSXBf0cuetoRm9epiZr1x8LE="
    },
    {
        dishName: "Craft Beer (IPA)",
        description: "IPA style craft beer, 500ml, with citrus notes and a distinct bitterness.",
        price: 25.00,
        category: "Beverages",
        available: true,
        isAlcoholic: true,
        imageUrl: "https://media.istockphoto.com/id/1190246079/pt/foto/cannabis-infused-amber-ale.jpg?s=1024x1024&w=is&k=20&c=g4MtkL-LztRLOZCyAEIi4e26VXsSVAbVz96nCWXbvSs="
    },


    // --- Desserts (5 items) ---
    {
        dishName: "Condensed Milk Pudding",
        description: "Classic Brazilian pudding, creamy with caramel sauce.",
        price: 18.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1690798173/pt/foto/condensed-milk-pudding-or-pudim-de-leite-condensado-in-portuguese-traditional-dessert-also.jpg?s=1024x1024&w=is&k=20&c=wwDRHYH_3gHiElVQJdnhpUzhINJx2-L3Q-agJdXXpoU="
    },
    {
        dishName: "Passion Fruit Mousse",
        description: "Light and airy fresh passion fruit mousse, with a citrusy touch.",
        price: 16.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1299827971/pt/foto/passion-fruit-mousse-refreshing-dessert-with-fresh-passion-fruit-topping.jpg?s=1024x1024&w=is&k=20&c=CAIdJodL_aLVwycvx5YElfQQ2PJ8Q_YfzH_diwWcrL8="
    },
    {
        dishName: "Lemon Pie",
        description: "Pie with a crunchy crust, creamy lemon filling, and toasted meringue topping.",
        price: 20.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/606673278/pt/foto/bolo-de-queijo-de-lim%C3%A3o.jpg?s=1024x1024&w=is&k=20&c=mhT25lLTMOWhf8vgrnonPaspFpBrNmfxD_ujTtriOHY="
    },
    {
        dishName: "Brigadeiro (Brazilian Fudge Ball)",
        description: "Traditional Brazilian chocolate fudge ball, coated in sprinkles.",
        price: 6.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1653356906/pt/foto/assorted-brigadier-flat-layer-view.jpg?s=1024x1024&w=is&k=20&c=4bZmDnBg5KMqBOgqAOXmmBIHwYz6X3mHIRePaAymu5I="
    },
    {
        dishName: "Açaí Bowl with Granola",
        description: "Frozen açaí pulp topped with granola and fresh fruits.",
        price: 22.00,
        category: "Desserts",
        available: true,
        isVegan: true,
        imageUrl: "https://media.istockphoto.com/id/1454093997/pt/foto/acai-bowl-on-the-table-with-bananas-strawberries-and-granola.jpg?s=1024x1024&w=is&k=20&c=g3BsZ-c-KRHJJs4s5OYli1n6bTO1gWh-mFzwH4Crzhs="
    },

    // --- Salads (5 items) ---
    {
        dishName: "Caesar Salad",
        description: "Romaine lettuce, croutons, Parmesan cheese, Caesar dressing, and grilled chicken breast.",
        price: 35.00,
        category: "Salads",
        available: true,
        isVegetarian: false,
        imageUrl: "https://media.istockphoto.com/id/534139231/pt/foto/saud%C3%A1vel-frango-grelhado-salada-c%C3%A9sar.jpg?s=1024x1024&w=is&k=20&c=XhwLwoqW2Gnw2UmDaTfmLXR9dAAkl_8ko6QclzKTigk="
    },
    {
        dishName: "Fresh Mixed Salad",
        description: "Mix of green leaves, cherry tomatoes, cucumber, grated carrot, and extra virgin olive oil.",
        price: 28.00,
        category: "Salads",
        available: true,
        isVegetarian: true,
        imageUrl: "https://media.istockphoto.com/id/919666108/pt/foto/two-fresh-salad-bowls.jpg?s=1024x1024&w=is&k=20&c=_ZL5DVSUemjLH-IJOX9o1rqeYN94HNaMJoYqcei7Mc8="
    },
    {
        dishName: "Caprese Salad",
        description: "Fresh mozzarella, ripe tomatoes, basil, and balsamic glaze.",
        price: 32.00,
        category: "Salads",
        available: true,
        isVegetarian: true,
        imageUrl: "https://media.istockphoto.com/id/1345888788/pt/foto/caprese-salad.jpg?s=1024x1024&w=is&k=20&c=H_c44oCGt1YRYJ4Ebymf6m7-dvWI809U8FCbg1gTWNs="
    },
    {
        dishName: "Quinoa Salad with Roasted Vegetables",
        description: "Nutritious quinoa salad with roasted seasonal vegetables and a lemon vinaigrette.",
        price: 38.00,
        category: "Salads",
        available: true,
        isVegan: true,
        imageUrl: "https://media.istockphoto.com/id/893716434/pt/foto/healhty-vegan-lunch-bowl-avocado-quinoa-sweet-potato-tomato-spinach-and-chickpeas-vegetables.jpg?s=1024x1024&w=is&k=20&c=fsQdrXG_NilGk7deZM7wt29DFglGtLp_5bRNZps-gdY="
    },
    {
        dishName: "Greek Salad",
        description: "Crisp lettuce, tomatoes, cucumbers, red onion, feta cheese, and Kalamata olives.",
        price: 30.00,
        category: "Salads",
        available: true,
        isVegetarian: true,
        imageUrl: "https://media.istockphoto.com/id/1461256163/pt/foto/feta-cheese-salad-on-wooden-table.jpg?s=1024x1024&w=is&k=20&c=wx2Obb9FgkECoaSeDbk9YwcaPnEnWVJ4ksyGLKHzPsI="
    },

    // --- Classic Dishes (5 items) ---
    {
        dishName: "Chicken Parmigiana",
        description: "Breaded chicken fillet topped with homemade tomato sauce and melted mozzarella cheese.",
        price: 58.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["White Rice", "Potato Sticks"],
        imageUrl: "https://media.istockphoto.com/id/506992668/pt/foto/frango-parmes%C3%A3o-cozido-em-molho-de-tomate-e-queijo-mozzarella.jpg?s=1024x1024&w=is&k=20&c=Nk4pgoOaGA_tFtTxhoC6cGmkkhjTAllJ6vpwzBRAIAg="
    },
    {
        dishName: "Strogonoff (Beef)",
        description: "Creamy beef strogonoff with mushrooms, served with white rice and potato sticks.",
        price: 55.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["White Rice", "Potato Sticks"],
        imageUrl: "https://media.istockphoto.com/id/1460067261/pt/foto/beef-stroganoff-mushroom-rice-straw-potato.jpg?s=1024x1024&w=is&k=20&c=vbtbYMVQ41TaTaI-r2nm7S_ycFkV_1tZf3AQe_JCsQE="
    },
    {
        dishName: "Filet Mignon with Pepper Sauce",
        description: "Tender filet mignon steak cooked to perfection, topped with a rich pepper sauce.",
        price: 98.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["Gratin Potatoes", "Asparagus"],
        imageUrl: "https://media.istockphoto.com/id/1191425335/pt/foto/american-food-concept-grilled-pork-ribs-with-grilled-sauce-with-smoke-spices-and-rosemary.jpg?s=1024x1024&w=is&k=20&c=ugOUKTD-CP8g4Ls6YNEpyWvi9qyWGpJzBJMy7PBNOVE="
    },
    {
        dishName: "Lasagna Bolognese",
        description: "Layers of pasta, rich bolognese sauce, bechamel, and melted cheese, baked to golden perfection.",
        price: 60.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["Garlic Bread", "Red Wine"],
        imageUrl: "https://media.istockphoto.com/id/504045128/pt/foto/lasanha-tradicionais-feitas-com-carne-picada-molho-bolonhesa.jpg?s=1024x1024&w=is&k=20&c=q2DLGpTrgITmQxIi26POqA-FhVB2EzXi9gqFP192PX0="
    },
    {
        dishName: "Spaghetti Carbonara",
        description: "Authentic Italian carbonara with guanciale, egg yolk, Pecorino Romano, and black pepper.",
        price: 52.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["Parmesan Cheese", "White Wine"],
        imageUrl: "https://media.istockphoto.com/id/1581084025/pt/foto/plate-with-spaghetti-carbonara-on-a-laid-table.jpg?s=1024x1024&w=is&k=20&c=fNV_AIrD_80Gk5PRZAxi3pm0iAbvgf43nH5zDEJRIb8="
    },

    // --- Sides (5 items) ---
    {
        dishName: "Carreteiro Rice",
        description: "Creamy rice with shredded jerky and homemade seasonings.",
        price: 30.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1352866089/pt/foto/arroz-de-carreteiro-brazilian-rice-with-dried-meat-close-up-in-the-bowl-horizontal-top-view.jpg?s=1024x1024&w=is&k=20&c=TcxeaEG0od2pbVkL0ngYVcZI2r5T3x6VlCnjn8rEsm0="
    },
    {
        dishName: "French Fries",
        description: "Crispy golden french fries, perfect as a side.",
        price: 25.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/966934632/pt/foto/appetizing-french-fries-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=bBlj2QrYkToqxbdr9H49EktizDktKbjeNVS-p0-BqlE="
    },
    {
        dishName: "Mashed Potatoes",
        description: "Creamy and smooth mashed potatoes, seasoned to perfection.",
        price: 22.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1480942558/pt/foto/mashed-potato-with-parmesan-cheese-top-view-with-copy-space.jpg?s=1024x1024&w=is&k=20&c=XpSjUTSi7o6vZmi9F-ZkLAH4srz9iF4oVnuwb6bx1cI="
    },
    {
        dishName: "Sautéed Collard Greens",
        description: "Fresh collard greens quickly sautéed with garlic and olive oil.",
        price: 18.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/898402322/pt/foto/homemade-organic-green-collard-greens.jpg?s=1024x1024&w=is&k=20&c=sazUmoH5_S6wlMrprBJiXtIZG9NO6C25QolvjIqFh3E="
    },
    {
        dishName: "Fried Cassava",
        description: "Crispy fried cassava sticks, a delicious Brazilian snack.",
        price: 28.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1370995474/pt/foto/fried-cassava.jpg?s=1024x1024&w=is&k=20&c=wYm5u1MR8Wf49EMe9Y3phm4B1gaUd9A6uvx27cNBxOA="
    }
];

createcardfood(dishes);

function createcardfood(foods) {
    document.querySelector(".dishes").innerHTML = "";
    foods.forEach(food => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let description = document.createElement('p');
        let price = document.createElement('p');
        let category = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = food.dishName;
        description.innerHTML = `<span class="label"></span> ${food.description}`;
        price.innerHTML = `<span class="label"><strong>Price:</strong></span> $${food.price.toFixed(2)}`;
        category.innerHTML = `<span class="label"><strong>Category:</strong></span> ${food.category}`;

        img.setAttribute('src', food.imageUrl);
        img.setAttribute('alt', `${food.dishName}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('id', "imgmenu");

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(category);

        document.querySelector(".dishes").appendChild(card);
    })
}

const Meatsbutton = document.querySelector('#meats');
const Drinksbutton = document.querySelector('#drinks');
const Saladsbutton = document.querySelector('#salads');
const Dessertsbutton = document.querySelector('#desserts');
const Fishesbutton = document.querySelector('#fishes');
const Sidesbutton = document.querySelector('#sides');
const Classicsbutton = document.querySelector('#classics');

Meatsbutton.addEventListener('click', () => {
    let meats = dishes.filter(meat => meat.category === "Meats");
    createcardfood(meats);
})

Drinksbutton.addEventListener('click', () => {
    let drinks = dishes.filter(drink => drink.category === "Beverages");
    createcardfood(drinks);
})

Saladsbutton.addEventListener('click', () => {
    let salads = dishes.filter(salad => salad.category === "Salads");
    createcardfood(salads);
})

Dessertsbutton.addEventListener('click', () => {
    let desserts = dishes.filter(dessert => dessert.category === "Desserts");
    createcardfood(desserts);
})

Fishesbutton.addEventListener('click', () => {
    let fishes = dishes.filter(fish => fish.category === "Fish");
    createcardfood(fishes);
})

Sidesbutton.addEventListener('click', () => {
    let sides = dishes.filter(side => side.category === "Sides");
    createcardfood(sides);
})

Classicsbutton.addEventListener('click', () => {
    let classics = dishes.filter(classic => classic.category === "Classic Dishes");
    createcardfood(classics);
})