const products = [
    {
        id: 1,
        name: "Headphones",
        price: 1999,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2999,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "Laptop",
        price: 55999,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    }
];

const productContainer = document.getElementById("product-container");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");

let cart = [];

// Display Products
function showProducts() {

    products.forEach((product) => {

        const card = document.createElement("div");

        card.classList =
            "product-card bg-white p-5 rounded-xl shadow-lg";

        card.innerHTML = `
            <img src="${product.image}"
                 class="w-full h-52 object-cover rounded-lg">

            <h2 class="text-xl font-bold mt-4">
                ${product.name}
            </h2>

            <p class="text-green-600 text-lg font-semibold mt-2">
                ₹${product.price}
            </p>

            <button onclick="addToCart(${product.id})"
                class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
                Add To Cart
            </button>
        `;

        productContainer.appendChild(card);

    });
}

// Add To Cart
function addToCart(id) {

    const product = products.find((item) => item.id === id);

    cart.push(product);

    updateCart();
}

// Update Cart
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="text-gray-500">
                No items added.
            </p>
        `;
    }

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.classList =
            "flex justify-between items-center border-b py-4";

        div.innerHTML = `
            <div>
                <h4 class="font-bold">
                    ${item.name}
                </h4>

                <p class="text-green-600">
                    ₹${item.price}
                </p>
            </div>

            <button onclick="removeItem(${index})"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Remove
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartCount.innerText = cart.length;

    totalPrice.innerText = `₹${total}`;
}

// Remove Item
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

showProducts();