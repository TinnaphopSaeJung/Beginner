const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const messages = [
    "Good Morning",
    "Good Night",
    "Hellooo",
    "Welcome",
    "Thanks You"
];


btn.addEventListener("click", () => createNotification());

function createNotification() {
    const notificationElement = document.createElement("div");
    notificationElement.classList.add("notification");
    notificationElement.innerText = randomMessage();
    container.appendChild(notificationElement);
    
    setTimeout(() => {
        notificationElement.remove();
    }, 3000);
}

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

