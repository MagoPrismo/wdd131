//code for the footer
const today = new Date();
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

//menu//

const dishes = [
    {
        dishName: "Premium Picanha",
        description: "Selected picanha cut grilled to perfection, juicy and flavorful.",
        price: 85.90,
        category: "Meats",
        available: true,
        suggestedPairings: ["Carreteiro Rice", "Egg Farofa", "Vinaigrette"],
        imageUrl: "https://media.istockphoto.com/id/1363601737/pt/foto/grilled-top-sirloin-or-cup-rump-beef-meat-steak-on-marble-board-black-background-top-view.jpg?s=1024x1024&w=is&k=20&c=ctYEFf8UQBFh4NxX8wiSTwr8aPKt-137E5uu-rMZ-Hk=" // Replace with actual URLs
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
        dishName: "Garlic Fried Chicken",
        description: "Pieces of chicken fried and seasoned with garlic and parsley, crispy on the outside and tender on the inside.",
        price: 45.00,
        category: "Appetizers",
        available: true,
        suggestedPairings: ["Lemon", "House Sauce"],
        imageUrl: "https://media.istockphoto.com/id/1348674992/pt/foto/honey-soy-chicken-wings.jpg?s=1024x1024&w=is&k=20&c=0qchH-q27joSm1FqlJLhIRapp1LodLAPfOxarwr0DLQ="
    },
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
        dishName: "Chicken Parmigiana",
        description: "Breaded chicken fillet topped with homemade tomato sauce and melted mozzarella cheese.",
        price: 58.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["White Rice", "Potato Sticks"],
        imageUrl: "https://media.istockphoto.com/id/506992668/pt/foto/frango-parmes%C3%A3o-cozido-em-molho-de-tomate-e-queijo-mozzarella.jpg?s=1024x1024&w=is&k=20&c=Nk4pgoOaGA_tFtTxhoC6cGmkkhjTAllJ6vpwzBRAIAg="
    },
    {
        dishName: "Complete Feijoada",
        description: "Our traditional feijoada with all the classic ingredients, served on Wednesdays and Saturdays.",
        price: 62.00,
        category: "Typical Dishes",
        available: false, // Example of a dish not available every day
        availabilityDays: ["Wednesday", "Saturday"],
        suggestedPairings: ["Sautéed Collard Greens", "Farofa", "Orange Slices"],
        imageUrl: "https://media.istockphoto.com/id/1313384844/pt/foto/feijoada-a-typical-brazilian-food.jpg?s=1024x1024&w=is&k=20&c=noFzgUURCXD7vN29G5NczCc_D_J7PCwAMnCnnV67FcI="
    },
    {
        dishName: "Carreteiro Rice",
        description: "Creamy rice with shredded jerky and homemade seasonings.",
        price: 30.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1352866089/pt/foto/arroz-de-carreteiro-brazilian-rice-with-dried-meat-close-up-in-the-bowl-horizontal-top-view.jpg?s=1024x1024&w=is&k=20&c=TcxeaEG0od2pbVkL0ngYVcZI2r5T3x6VlCnjn8rEsm0="
    }
];

createcardfood(dishes);

function createcardfood(foods) {
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