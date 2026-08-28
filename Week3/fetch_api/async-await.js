const loadButton = document.querySelector("#loadButton");
const message = document.querySelector("#message");
const productList = document.querySelector("#productList");

const showProducts = (products) => {
    productList.innerHTML = products.map((product) => {
        return `
            <article class="product-card">
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <p>Stock: ${product.stock}</p>
            </article>
        `;
    }).join("");
};

const loadProducts = async () => {
    message.textContent = "Loading products...";
    productList.innerHTML = "";

    try {
        const response = await fetch("https://dummyjson.com/products?limit=5");

        if (!response.ok) {
            throw new Error("The API request failed.");
        }

        const data = await response.json();

        if (data.products.length === 0) {
            message.textContent = "No products were found.";
            return;
        }

        message.textContent = "Products loaded successfully.";
        showProducts(data.products);
    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
};

loadButton.addEventListener("click", loadProducts);
