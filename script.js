function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function closeChatBot() {
    const chatBot = document.querySelector('.chat-bot');
    chatBot.classList.add("closed");
}

const chatInput = document.querySelector(".input-text textarea")
const sendChatBtn = document.querySelector(".input-text span")
const chatBox = document.querySelector(".chatbox")

let userMessage;


function createChatLine(message, className) {
    /* Creates a chat line element with the given message and class name.*/
    const chatLine = document.createElement("li");
    chatLine.classList.add("chat", className);
    let chatContent = className === "outgoing"? `<p>${message}</p>` : ` <span class="material-symbols-outlined"> smart_toy</span><p>${message}</p>`;
    chatLine.innerHTML = chatContent;
    return chatLine
}


function handleChat() {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    // appends the user message to the chatbox
    chatBox.append(createChatLine(userMessage, "outgoing"));

    setTimeout(()=> {
        chatBox.appendChild(createChatLine("Thinking....", "incoming"))
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);