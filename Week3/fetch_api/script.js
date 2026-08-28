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

const loadProducts = () => {
    message.textContent = "Loading products...";
    productList.innerHTML = "";

    fetch("https://dummyjson.com/products?limit=5")
        .then((response) => {
            if (!response.ok) {
                throw new Error("The API request failed.");
            }

            return response.json();
        })
        .then((data) => {
            if (data.products.length === 0) {
                message.textContent = "No products were found.";
                return;
            }

            message.textContent = "Products loaded successfully.";
            showProducts(data.products);
        })
        .catch((error) => {
            message.textContent = "Error: " + error.message;
        });
};

loadButton.addEventListener("click", loadProducts);
