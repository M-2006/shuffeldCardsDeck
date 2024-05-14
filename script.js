document.addEventListener("DOMContentLoaded", function() {
    const cardPanel = document.getElementById("cardPanel");
    const shuffleButton = document.getElementById("shuffleButton");
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

    shuffleButton.addEventListener("click", function() {
        startShuffle();
    });

    function createDeck() {
        let deck = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push(rank + " of " + suit);
            }
        }
        return deck;
    }

    function shuffleDeck(deck) {
        return deck.sort(() => Math.random() - 0.5);
    }

    function updateCardPanel(deck) {
        cardPanel.innerHTML = "";
        for (let card of deck) {
            let cardWrapper = document.createElement("div");
            cardWrapper.className = "card-wrapper";
            cardWrapper.textContent = card;
            cardPanel.appendChild(cardWrapper);
        }
    }

    function startShuffle() {
        let deck = createDeck();
        let startTime = Date.now();
        let shuffledDeck = shuffleDeck(deck);
        let endTime = Date.now();
        updateCardPanel(shuffledDeck);
        let elapsedTime = endTime - startTime;
        let shuffleRate = deck.length / (elapsedTime / 1000);

        let toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = "Shuffle complete!";
        document.body.appendChild(toast);

        setTimeout(function() {
            toast.classList.add("show");
        }, 100);

        setTimeout(function() {
            toast.classList.remove("show");
            setTimeout(function() {
                toast.remove();
            }, 500);
        }, 3000);
    }
});
