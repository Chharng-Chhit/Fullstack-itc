const productTitle = document.querySelector("#productTitle");
const productPrice = document.querySelector("#productPrice");
const message = document.querySelector("#message");
const result = document.querySelector("#result");

const showResult = (data) => {
    result.textContent = JSON.stringify(data, null, 2);
};

const getProduct = async () => {
    try {
        message.textContent = "Getting product...";
        const response = await fetch("https://dummyjson.com/products/1");

        if (!response.ok) throw new Error("GET request failed.");

        const data = await response.json();
        message.textContent = "GET request completed.";
        showResult(data);
    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
};

const postProduct = async () => {
    try {
        message.textContent = "Adding product...";
        const response = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: productTitle.value,
                price: Number(productPrice.value)
            })
        });

        if (!response.ok) throw new Error("POST request failed.");

        const data = await response.json();
        message.textContent = "POST request completed.";
        showResult(data);
    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
};

const putProduct = async () => {
    try {
        message.textContent = "Updating product...";
        const response = await fetch("https://dummyjson.com/products/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: productTitle.value,
                price: Number(productPrice.value)
            })
        });

        if (!response.ok) throw new Error("PUT request failed.");

        const data = await response.json();
        message.textContent = "PUT request completed.";
        showResult(data);
    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
};

const deleteProduct = async () => {
    try {
        message.textContent = "Deleting product...";
        const response = await fetch("https://dummyjson.com/products/1", {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("DELETE request failed.");

        const data = await response.json();
        message.textContent = "DELETE request completed.";
        showResult(data);
    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
};

document.querySelector("#getButton").addEventListener("click", getProduct);
document.querySelector("#postButton").addEventListener("click", postProduct);
document.querySelector("#putButton").addEventListener("click", putProduct);
document.querySelector("#deleteButton").addEventListener("click", deleteProduct);
