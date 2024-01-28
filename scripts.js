//create specific cards with rank and suit
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.value = this.getValue(rank);
    }
    //assign values to each card
    getValue(){
        const rankValues = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 1
        };
        return rankValues[this.rank];
    }
}

class Deck {
    constructor() {
        this.cards = this.generateDeck();
        this.shuffle();
        // ... method to generate 52 cards
    }

    generateDeck(){
       const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
       const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
       const deck = [];

       for(let i = 0; i < suit.length; i++){
        for(let j = 0; j < rank.length; j++){
            deck.push(new Card(rank[j], suit[i]));
        }
       }
       return deck;
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        // ... shuffle the cards
    }
    

    deal(players) {
        this.shuffle();
        for(let i = 0; i < this.cards.length; i++) {
            players[i % players.length].hand.push(this.cards[i]);
        }
        // ... deal 26 cards to each player
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    playCard() {
        return this.hand.shift();
        // ... play a card from hand
    }

    
}

class Game {
    constructor() {
        this.players = [new Player("Player 1"), new Player("Player 2")];
        this.deck = new Deck();
        this.deck.deal(this.players);
       
    }
//loop through 26 rounds
    startGame() {
        for(let i = 0; i <26; i++) {
            this.playRound();
        }
        this.declareWinner();
        // ... setup and play the game
    }

    playRound() {
        const card1 = this.players[0].playCard();
        const card2 = this.players[1].playCard();
        

        console.log(`Player 1 plays ${card1.rank} of ${card1.suit}`);
        console.log(`Player 2 plays ${card2.rank} of ${card2.suit}`);

        if (card1.value > card2.value) { //this.players[0].score = i++;
            console.log('Player 1 wins this round!');
        } else if (card2.value > card1.value) { //this.players[1].score = i++;
            console.log('Player 2 wins the round!');
        } else {
            if (card1.value === card2.value) {
                console.log('Its a tie!');
            }
        }
    } 
        // ... logic for each round
    

    declareWinner() {
        console.log(`Player 1 Score: ${this.players[0].score}`);
        console.log(`Player 2 Score: ${this.players[1].score}`);

        if (this.players[0].score > this.players[1].score) {

            console.log('Player 1 wins!');
        } else if (this.players[1].score > this.players[0].score) {
            console.log('Player 2 wins!');
        } else console.log('Its a tie!');
        // ... determine and declare the winner
    }
}

// To start the game
const warGame = new Game();
warGame.startGame();