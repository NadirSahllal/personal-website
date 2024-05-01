function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function closeChatBot() {
  const chatBot = document.querySelector(".chat-bot");
  chatBot.classList.add("closed");
}

const chatInput = document.querySelector(".input-text textarea");
const sendChatBtn = document.querySelector(".input-text span");
const chatBox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler");
const chatCloseBtn = document.querySelector(".close-btn");
const chatInputHeight = chatInput.scrollHeight;
let userMessage;

function createChatLine(message, className) {
  /* Creates a chat line element with the given message and class name.*/
  const chatLine = document.createElement("li");
  chatLine.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : ` <span class="material-symbols-outlined"> smart_toy</span><p></p>`;
  chatLine.innerHTML = chatContent;
  chatLine.querySelector("p").textContent = message;
  return chatLine;
}

function handleChat() {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${chatInputHeight}px`;

  // appends the user message to the chatbox
  chatBox.append(createChatLine(userMessage, "outgoing"));
  chatBox.scrollTo(0, chatBox.scrollHeight);

  setTimeout(() => {
    chatBox.appendChild(createChatLine("Thinking....", "incoming"));
    chatBox.scrollTo(0, chatBox.scrollHeight);
  }, 600);
}

function closeChatBot() {
  document.body.classList.toggle("show-chatbot");
}

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${chatInputHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (element) => {
  if (element.key === "Enter" && !element.shiftKey) {
    element.preventDefault();
    handleChat();
  }
});

chatToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
chatCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

sendChatBtn.addEventListener("click", handleChat);
