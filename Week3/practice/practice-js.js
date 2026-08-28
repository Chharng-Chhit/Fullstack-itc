// 1. Select and modify an element.
const target = document.querySelector("#dom-target");
const topicBox = document.querySelector(".topic-box");
const domMessage = document.querySelector("#dom-message");

document.querySelector("#highlight-button").addEventListener("click", function () {
    topicBox.classList.toggle("active");
    domMessage.textContent = "classList.toggle changed the highlight.";
});

document.querySelector("#rename-button").addEventListener("click", function () {
    target.textContent = "Updated title";
    domMessage.textContent = "textContent changed the target title.";
});

document.querySelector("#inspect-button").addEventListener("click", function () {
    const nextTopic = target.nextElementSibling;
    domMessage.textContent = "The next sibling says: " + nextTopic.textContent;
});

document.querySelector("#reset-dom-button").addEventListener("click", function () {
    target.textContent = "DOM selection";
    topicBox.classList.remove("active");
    domMessage.textContent = "The DOM section was reset.";
});

// 2. Create list items with textContent.
const topics = ["querySelector", "classList"];
const topicList = document.querySelector("#topic-list");
const topicInput = document.querySelector("#topic-input");

function showTopics() {
    topicList.textContent = "";
    for (let i = 0; i < topics.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = topics[i];
        topicList.appendChild(listItem);
    }
    document.querySelector("#list-message").textContent = topics.length + " topics loaded.";
}

document.querySelector("#add-topic-button").addEventListener("click", function () {
    const newTopic = topicInput.value.trim();
    if (newTopic === "") return;
    topics.push(newTopic);
    topicInput.value = "";
    showTopics();
});

document.querySelector("#sample-button").addEventListener("click", function () {
    topics.length = 0;
    topics.push("querySelector", "querySelectorAll", "textContent", "classList");
    showTopics();
});

document.querySelector("#clear-list-button").addEventListener("click", function () {
    topics.length = 0;
    showTopics();
});

// 3. Validate the form and show messages in the page.
const form = document.querySelector("#practice-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector("#name-error").textContent = "";
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#goal-error").textContent = "";
    document.querySelector("#form-message").textContent = "";

    let isValid = true;
    const name = document.querySelector("#student-name").value.trim();
    const email = document.querySelector("#student-email").value.trim();
    const goal = document.querySelector("#practice-goal").value;

    if (name === "") { document.querySelector("#name-error").textContent = "Name is required."; isValid = false; }
    if (!email.includes("@")) { document.querySelector("#email-error").textContent = "Enter a valid email."; isValid = false; }
    if (goal === "") { document.querySelector("#goal-error").textContent = "Choose a goal."; isValid = false; }
    if (isValid) document.querySelector("#form-message").textContent = "Form is valid. Good job!";
});

document.querySelector("#prefill-button").addEventListener("click", function () {
    document.querySelector("#student-name").value = "Alex Student";
    document.querySelector("#student-email").value = "alex@example.com";
    document.querySelector("#practice-goal").value = "selection";
});

document.querySelector("#reset-form-button").addEventListener("click", function () {
    form.reset();
    document.querySelector("#name-error").textContent = "";
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#goal-error").textContent = "";
    document.querySelector("#form-message").textContent = "";
});

// 4. Move a task to another drop zone.
let draggedTask;
const tasks = document.querySelectorAll(".task");
const zones = document.querySelectorAll(".drop-zone");
tasks.forEach(function (task) {
    task.addEventListener("dragstart", function () { draggedTask = task; });
});
zones.forEach(function (zone) {
    zone.addEventListener("dragover", function (event) { event.preventDefault(); });
    zone.addEventListener("drop", function (event) {
        event.preventDefault();
        zone.appendChild(draggedTask);
    });
});

document.querySelector("#reset-board-button").addEventListener("click", function () {
    const backlog = document.querySelector("#backlog-zone");
    tasks.forEach(function (task) { backlog.appendChild(task); });
});

// 5. Open and close the modal with a class.
const modal = document.querySelector("#practice-modal");
const modalMessage = document.querySelector("#modal-message");

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalMessage.textContent = "Modal is closed.";
}

document.querySelector("#open-modal-button").addEventListener("click", function () {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modalMessage.textContent = "Modal is open.";
});
document.querySelector("#close-modal-button").addEventListener("click", closeModal);
modal.addEventListener("click", function (event) { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeModal(); });
