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
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0=" // Replace with actual URLs
    },
    {
        dishName: "Slow-Cooked Beef Ribs",
        description: "Beef ribs slow-cooked for 8 hours, falling off the bone.",
        price: 79.50,
        category: "Meats",
        available: true,
        suggestedPairings: ["French Fries", "Fried Cassava"],
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0="
    },
    {
        dishName: "Garlic Fried Chicken",
        description: "Pieces of chicken fried and seasoned with garlic and parsley, crispy on the outside and tender on the inside.",
        price: 45.00,
        category: "Appetizers",
        available: true,
        suggestedPairings: ["Lemon", "House Sauce"],
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0="
    },
    {
        dishName: "Grilled Salmon with Vegetables",
        description: "Fresh salmon fillet grilled, served with a mix of sautéed vegetables in butter.",
        price: 68.00,
        category: "Fish",
        available: true,
        suggestedPairings: ["White Rice", "Mashed Potatoes"],
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0="
    },
    {
        dishName: "Chicken Parmigiana",
        description: "Breaded chicken fillet topped with homemade tomato sauce and melted mozzarella cheese.",
        price: 58.00,
        category: "Classic Dishes",
        available: true,
        suggestedPairings: ["White Rice", "Potato Sticks"],
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0="
    },
    {
        dishName: "Complete Feijoada",
        description: "Our traditional feijoada with all the classic ingredients, served on Wednesdays and Saturdays.",
        price: 62.00,
        category: "Typical Dishes",
        available: false, // Example of a dish not available every day
        availabilityDays: ["Wednesday", "Saturday"],
        suggestedPairings: ["Sautéed Collard Greens", "Farofa", "Orange Slices"],
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0="
    },
    {
        dishName: "Carreteiro Rice",
        description: "Creamy rice with shredded jerky and homemade seasonings.",
        price: 30.00,
        category: "Sides",
        available: true,
        imageUrl: "https://media.istockphoto.com/id/1317622457/pt/foto/barbecue-picanha-meat-cut-on-wooden-board.jpg?s=612x612&w=0&k=20&c=u3EiEVd_PwewQVmlZGMinjqHtG8MkBJqlv2YWzLrAL0="
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
        price.innerHTML = `<span class="label">Price:</span> $${food.price}.00`;
        category.innerHTML = `<span class="label">Category:</span> ${food.category}`;

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