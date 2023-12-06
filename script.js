document.addEventListener('DOMContentLoaded', function () {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createCard(message) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = `${getRandomNumber(200, 300)}px`;
        card.style.height = `${getRandomNumber(150, 250)}px`;
        card.style.left = `${getRandomNumber(0, window.innerWidth - parseInt(card.style.width))}px`;
        card.style.top = `${getRandomNumber(0, window.innerHeight - parseInt(card.style.height))}px`;

        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        card.appendChild(paragraph);

        card.addEventListener('mousedown', dragStart);
        card.addEventListener('mouseup', dragEnd);
        card.addEventListener('mousemove', dragMove);

        document.body.appendChild(card);
    }

    function dragStart(e) {
        isDragging = true;
        offsetX = e.clientX - e.target.getBoundingClientRect().left;
        offsetY = e.clientY - e.target.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragMove(e) {
        if (!isDragging) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        const card = e.target;
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
    }

    createCard('You light up my world, would you go on a date with me? 💖');
    createCard('You are extraordinary. Would you be my partner in crime? 😊');
    createCard('You make every moment special. Will you be my girlfriend? ❤️');
    createCard('Life is a journey, and I want you to be my travel companion. Will you? 🌍');
    createCard('Your smile is contagious. Would you make me the happiest person and be mine? 😄');
    createCard('In this crazy world, you\'re my constant. Will you be my forever? 🌟');
    createCard('You\'re the missing piece to my puzzle. Can we complete it together? 🧩');
    createCard('I don\'t believe in love at first sight, but your smile convinced me otherwise. Will you be mine? 😍');
});