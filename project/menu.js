//code for the footer
const today = new Date();
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

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
        imageUrl: "https://media.istockphoto.com/id/500130836/pt/foto/peito-de-frango-grelhado.jpg?s=1024x1024&w=is&k=20&c=N5M9J1X_G2V_J8Y_L7T_P6S_K4W_H3X_F1Z_E0A_C9B="
    },
    {
        dishName: "Lamb Chops with Mint Sauce",
        description: "Juicy lamb chops perfectly grilled, served with a fresh mint sauce.",
        price: 95.00,
        category: "Meats",
        available: true,
        suggestedPairings: ["Asparagus", "Risotto"],
        imageUrl: "https://media.istockphoto.com/id/955219220/pt/foto/costeletas-de-cordeiro.jpg?s=1024x1024&w=is&k=20&c=L_Y_B_2E_3W_4R_6T_8P_0O_9I_7U_V_F_C_Z_X="
    },
    {
        dishName: "Pork Ribs with Barbecue Sauce",
        description: "Smoked pork ribs covered in a sweet and tangy barbecue sauce.",
        price: 70.00,
        category: "Meats",
        available: true,
        suggestedPairings: ["Coleslaw", "Corn on the Cob"],
        imageUrl: "https://media.istockphoto.com/id/1409543168/pt/foto/barbecue-pork-ribs-on-a-wooden-board.jpg?s=1024x1024&w=is&k=20&c=L-C_1R_4T_7P_9U_0S_2A_3B_5C_6D_8E_F_G_H_I="
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
        imageUrl: "https://media.istockphoto.com/id/1294626155/pt/foto/bacalhau-assado-com-azeite-e-batatas-em-travessa-oval-de-vidro.jpg?s=1024x1024&w=is&k=20&c=Z_E_F_G_H_I_J_K_L_M_N_O_P_Q_R_S_T_U_V_W="
    },
    {
        dishName: "Shrimp Risotto",
        description: "Creamy risotto with sautéed shrimp and Parmesan cheese.",
        price: 88.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["White Wine", "Fresh Herbs"],
        imageUrl: "https://media.istockphoto.com/id/1325608759/pt/foto/risoto-de-camar%C3%A3o.jpg?s=1024x1024&w=is&k=20&c=Z_X_C_V_B_N_M_L_K_J_H_G_F_D_S_A_Q_W_E_R_T_Y="
    },
    {
        dishName: "Tuna Steak with Sesame",
        description: "Seared tuna steak with a sesame crust, served medium-rare.",
        price: 72.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["Soy Sauce", "Ginger Salad"],
        imageUrl: "https://media.istockphoto.com/id/1179040081/pt/foto/fil%C3%A9-de-atum-com-gergelim.jpg?s=1024x1024&w=is&k=20&c=Y_U_I_O_P_A_S_D_F_G_H_J_K_L_Z_X_C_V="
    },
    {
        dishName: "Moqueca Capixaba",
        description: "Traditional Brazilian fish stew with tomatoes, onions, cilantro, and annatto oil.",
        price: 80.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["White Rice", "Pirão"],
        imageUrl: "https://media.istockphoto.com/id/1364506283/pt/foto/moqueca-capixaba-brazilian-fish-stew.jpg?s=1024x1024&w=is&k=20&c=Q_W_E_R_T_Y_U_I_O_P_A_S_D_F_G_H_J_K_L_Z_X_C_V_B_N="
    },

    // --- Beverages (5 items) ---
    {
        dishName: "Coca-Cola (Can)",
        description: "Coca-Cola soft drink in a can, 350ml.",
        price: 8.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1179426992/pt/foto/coca-cola-can-330ml-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=z_H0L_P_Q0_D_F-m_L7_M_C_V_J9_G6_X5_E4_T3="
    },
    {
        dishName: "Guaraná Antarctica (Can)",
        description: "Guaraná Antarctica soft drink in a can, 350ml.",
        price: 8.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1293375871/pt/foto/guarana-antarctica-can-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=y-0vB_3R_B_6Q_9E_8P_4K_1L_D_F-J_C7_X2_T1="
    },
    {
        dishName: "Mineral Water (500ml)",
        description: "Still mineral water, 500ml.",
        price: 6.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1188095147/pt/foto/plastic-bottle-of-mineral-water.jpg?s=1024x1024&w=is&k=20&c=x_U0w_Q_0D_H_E_N_M_F_R_V_Z_A_I_P_O_S="
    },
    {
        dishName: "Orange Juice (Freshly Squeezed)",
        description: "Freshly squeezed orange juice, natural and refreshing.",
        price: 12.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1320490561/pt/foto/glass-of-freshly-squeezed-orange-juice-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Z_X_C_V_B_N_M_L_K_J_H_G_F_D_S_A_Q_W_E_R_T_Y="
    },
    {
        dishName: "Iced Tea (Lemon)",
        description: "Homemade iced tea with natural lemon flavor.",
        price: 10.00,
        category: "Beverages",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1360126487/pt/foto/iced-tea-with-lemon-and-mint.jpg?s=1024x1024&w=is&k=20&c=Q_W_E_R_T_Y_U_I_O_P_A_S_D_F_G_H_J_K_L_Z_X_C_V="
    },
    {
        dishName: "Craft Beer (IPA)",
        description: "IPA style craft beer, 500ml, with citrus notes and a distinct bitterness.",
        price: 25.00,
        category: "Beverages",
        available: true,
        isAlcoholic: true,
        imageUrl: "https://media.istockphoto.com/id/1206016393/pt/foto/craft-beer-ipa-glass.jpg?s=1024x1024&w=is&k=20&c=Y-H7D_0C_0B_1A_2S_3R_4Q_5P_6L_7K_8J_9I_T0="
    },


    // --- Desserts (5 items) ---
    {
        dishName: "Condensed Milk Pudding",
        description: "Classic Brazilian pudding, creamy with caramel sauce.",
        price: 18.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1297126130/pt/foto/pudim-de-leite-condensado.jpg?s=1024x1024&w=is&k=20&c=0sB_G8E3p0K3_d3Yc6f0_V3j_F-f-m0g-S6S-L4P_vY="
    },
    {
        dishName: "Passion Fruit Mousse",
        description: "Light and airy fresh passion fruit mousse, with a citrusy touch.",
        price: 16.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1360144670/pt/foto/passion-fruit-mousse-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=Y7v4J-f-1W5T_L9c_b5H_P0E_U9_M0w_D0_P-J3A_f4="
    },
    {
        dishName: "Lemon Pie",
        description: "Pie with a crunchy crust, creamy lemon filling, and toasted meringue topping.",
        price: 20.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1368940827/pt/foto/delicious-lemon-tart-with-meringue.jpg?s=1024x1024&w=is&k=20&c=4oJ6E_E_X0c_F9_Q_b3V_W8_L7_R_V2_N5_A_J8_G0="
    },
    {
        dishName: "Brigadeiro (Brazilian Fudge Ball)",
        description: "Traditional Brazilian chocolate fudge ball, coated in sprinkles.",
        price: 6.00,
        category: "Desserts",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1319808381/pt/foto/brigadeiro-brazilian-chocolate-truffle.jpg?s=1024x1024&w=is&k=20&c=P_O_I_U_Y_T_R_E_W_Q_A_S_D_F_G_H_J_K_L_Z_X="
    },
    {
        dishName: "Açaí Bowl with Granola",
        description: "Frozen açaí pulp topped with granola and fresh fruits.",
        price: 22.00,
        category: "Desserts",
        available: true,
        isVegan: true,
        imageUrl: "https://media.istockphoto.com/id/1283311822/pt/foto/a%C3%A7a%C3%AD-bowl-with-fresh-fruits.jpg?s=1024x1024&w=is&k=20&c=A_S_D_F_G_H_J_K_L_Q_W_E_R_T_Y_U_I_O_P_Z_X="
    },

    // --- Salads (5 items) ---
    {
        dishName: "Caesar Salad",
        description: "Romaine lettuce, croutons, Parmesan cheese, Caesar dressing, and grilled chicken breast.",
        price: 35.00,
        category: "Salads",
        available: true,
        isVegetarian: false,
        imageUrl: "https://media.istockphoto.com/id/1149725510/pt/foto/caesars-salad-with-grilled-chicken.jpg?s=1024x1024&w=is&k=20&c=v_J0_D_R_S_T_U_V_W_X_Y_Z_A_B_C_D_E_F_G_H_I_J_K_L="
    },
    {
        dishName: "Fresh Mixed Salad",
        description: "Mix of green leaves, cherry tomatoes, cucumber, grated carrot, and extra virgin olive oil.",
        price: 28.00,
        category: "Salads",
        available: true,
        isVegetarian: true,
        imageUrl: "https://media.istockphoto.com/id/1324707198/pt/foto/fresh-mixed-green-salad-bowl-with-tomatoes-and-cucumber.jpg?s=1024x1024&w=is&k=20&c=z_0F_1E_2D_3C_4B_5A_6Z_7Y_8X_9W_0V_1U_2T_3S_4R_5Q="
    },
    {
        dishName: "Caprese Salad",
        description: "Fresh mozzarella, ripe tomatoes, basil, and balsamic glaze.",
        price: 32.00,
        category: "Salads",
        available: true,
        isVegetarian: true,
        imageUrl: "https://media.istockphoto.com/id/1145265401/pt/foto/salada-caprese.jpg?s=1024x1024&w=is&k=20&c=V_B_N_M_L_K_J_H_G_F_D_S_A_Q_W_E_R_T_Y_U_I_O_P="
    },
    {
        dishName: "Quinoa Salad with Roasted Vegetables",
        description: "Nutritious quinoa salad with roasted seasonal vegetables and a lemon vinaigrette.",
        price: 38.00,
        category: "Salads",
        available: true,
        isVegan: true,
        imageUrl: "https://media.istockphoto.com/id/1154699564/pt/foto/salada-de-quinoa-vegana.jpg?s=1024x1024&w=is&k=20&c=X_Y_Z_A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P_Q_R_S_T="
    },
    {
        dishName: "Greek Salad",
        description: "Crisp lettuce, tomatoes, cucumbers, red onion, feta cheese, and Kalamata olives.",
        price: 30.00,
        category: "Salads",
        available: true,
        isVegetarian: true,
        imageUrl: "https://media.istockphoto.com/id/1149725510/pt/foto/salada-grega.jpg?s=1024x1024&w=is&k=20&c=V_B_N_M_L_K_J_H_G_F_D_S_A_Q_W_E_R_T_Y_U_I_O_P="
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
        imageUrl: "https://media.istockphoto.com/id/1185566373/pt/foto/strogonoff-de-carne.jpg?s=1024x1024&w=is&k=20&c=F_D_S_A_Q_W_E_R_T_Y_U_I_O_P_L_K_J_H_G_F_D_S="
    },
    {
        dishName: "Filet Mignon with Pepper Sauce",
        description: "Tender filet mignon steak cooked to perfection, topped with a rich pepper sauce.",
        price: 98.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["Gratin Potatoes", "Asparagus"],
        imageUrl: "https://media.istockphoto.com/id/1325992928/pt/foto/fil%C3%A9-mignon-ao-molho-pepper.jpg?s=1024x1024&w=is&k=20&c=D_F_G_H_J_K_L_Z_X_C_V_B_N_M_A_S_D_F_G_H="
    },
    {
        dishName: "Lasagna Bolognese",
        description: "Layers of pasta, rich bolognese sauce, bechamel, and melted cheese, baked to golden perfection.",
        price: 60.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["Garlic Bread", "Red Wine"],
        imageUrl: "https://media.istockphoto.com/id/1322079086/pt/foto/lasanha-bolonhesa.jpg?s=1024x1024&w=is&k=20&c=S_D_F_G_H_J_K_L_Z_X_C_V_B_N_M_A_Q_W_E_R_T_Y="
    },
    {
        dishName: "Spaghetti Carbonara",
        description: "Authentic Italian carbonara with guanciale, egg yolk, Pecorino Romano, and black pepper.",
        price: 52.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["Parmesan Cheese", "White Wine"],
        imageUrl: "https://media.istockphoto.com/id/1319766946/pt/foto/spaghetti-carbonara.jpg?s=1024x1024&w=is&k=20&c=C_V_B_N_M_L_K_J_H_G_F_D_S_A_Q_W_E_R_T_Y_U="
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
        imageUrl: "https://media.istockphoto.com/id/1368936657/pt/foto/french-fries-in-a-basket.jpg?s=1024x1024&w=is&k=20&c=A_S_D_F_G_H_J_K_L_Q_W_E_R_T_Y_U_I_O_P_Z_X="
    },
    {
        dishName: "Mashed Potatoes",
        description: "Creamy and smooth mashed potatoes, seasoned to perfection.",
        price: 22.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1368936657/pt/foto/mashed-potatoes-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=A_S_D_F_G_H_J_K_L_Q_W_E_R_T_Y_U_I_O_P_Z_X="
    },
    {
        dishName: "Sautéed Collard Greens",
        description: "Fresh collard greens quickly sautéed with garlic and olive oil.",
        price: 18.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1368936657/pt/foto/sauteed-collard-greens.jpg?s=1024x1024&w=is&k=20&c=A_S_D_F_G_H_J_K_L_Q_W_E_R_T_Y_U_I_O_P_Z_X="
    },
    {
        dishName: "Fried Cassava",
        description: "Crispy fried cassava sticks, a delicious Brazilian snack.",
        price: 28.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1368936657/pt/foto/fried-cassava.jpg?s=1024x1024&w=is&k=20&c=A_S_D_F_G_H_J_K_L_Q_W_E_R_T_Y_U_I_O_P_Z_X="
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