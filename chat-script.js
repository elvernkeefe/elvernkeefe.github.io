document.addEventListener('DOMContentLoaded', (event) => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const lenderList = document.getElementById('lenderList');
    const chatHeader = document.getElementById('chatHeader');

    const lenders = [
        { name: 'ABC Com', id: 'abc-com' },
        { name: 'EmpowerFinance Support', id: 'empower-finance-support' },
        { name: '123 Fin', id: '123-fin' }
    ];

    lenders.forEach(lender => {
        const li = document.createElement('li');
        li.textContent = lender.name;
        li.dataset.id = lender.id;
        li.addEventListener('click', () => {
            selectLender(lender);
        });
        lenderList.appendChild(li);
    });

    function selectLender(lender) {
        chatHeader.textContent = `Chat with ${lender.name}`;
        chatBox.innerHTML = '';
    }

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value;
        if (message.trim() !== '') {
            addMessage(message, 'user-message');
            userInput.value = '';
            setTimeout(() => {
                addMessage(botResponse(message), 'bot-message');
            }, 1000);
        }
    }

    function botResponse(userMessage) {
        const responses = [
            "Hello! How can I help you today?",
            "Can you provide more details?",
            "I'm here to assist you with your loan queries.",
            "Thank you for reaching out. We will get back to you soon.",
            "Please provide your loan application ID.",
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    window.sendMessage = sendMessage;
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px"; 
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}