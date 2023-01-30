let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

sendMsgBtn.onclick = function() {
    let userEnteredMsg = userInput.value;

    let messageContainer = document.createElement("div");
    messageContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(messageContainer);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userEnteredMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    messageContainer.appendChild(userMsgEl);

    userInput.value = "";

    getReplayChatbotMsg();
};

function getReplayChatbotMsg() {
    let noOfChatbotMsg = chatbotMsgList.length;

    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsg) - 1];

    let messageContainer = document.createElement("div");
    messageContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(messageContainer);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = chatbotMsg;
    userMsgEl.classList.add("msg-from-chatbot");
    messageContainer.appendChild(userMsgEl);
}