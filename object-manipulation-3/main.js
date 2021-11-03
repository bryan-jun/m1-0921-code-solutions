console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cardCount) {

  var playerCollection = [
    { name: players[0], hand: [] }, { name: players[1], hand: [] }, { name: players[2], hand: [] }, { name: players[3], hand: [] }
  ];

  var cards = [
    { rank: 'Ace', suit: 'Clubs', value: 1 }, { rank: '2', suit: 'Clubs', value: 2 }, { rank: '3', suit: 'Clubs', value: 3 }, { rank: '4', suit: 'Clubs', value: 4 }, { rank: '5', suit: 'Clubs', value: 5 }, { rank: '6', suit: 'Clubs', value: 6 }, { rank: '7', suit: 'Clubs', value: 7 }, { rank: '8', suit: 'Clubs', value: 8 }, { rank: '9', suit: 'Clubs', value: 9 }, { rank: '10', suit: 'Clubs', value: 10 }, { rank: 'Jack', suit: 'Clubs', value: 10 }, { rank: 'Queen', suit: 'Clubs', value: 10 }, { rank: 'King', suit: 'Clubs', value: 10 },
    { rank: 'Ace', suit: 'Clubs', value: 1 }, { rank: '2', suit: 'Clubs', value: 2 }, { rank: '3', suit: 'Clubs', value: 3 }, { rank: '4', suit: 'Clubs', value: 4 }, { rank: '5', suit: 'Clubs', value: 5 }, { rank: '6', suit: 'Clubs', value: 6 }, { rank: '7', suit: 'Clubs', value: 7 }, { rank: '8', suit: 'Clubs', value: 8 }, { rank: '9', suit: 'Clubs', value: 9 }, { rank: '10', suit: 'Clubs', value: 10 }, { rank: 'Jack', suit: 'Clubs', value: 10 }, { rank: 'Queen', suit: 'Clubs', value: 10 }, { rank: 'King', suit: 'Clubs', value: 10 },
    { rank: 'Ace', suit: 'Clubs', value: 1 }, { rank: '2', suit: 'Clubs', value: 2 }, { rank: '3', suit: 'Clubs', value: 3 }, { rank: '4', suit: 'Clubs', value: 4 }, { rank: '5', suit: 'Clubs', value: 5 }, { rank: '6', suit: 'Clubs', value: 6 }, { rank: '7', suit: 'Clubs', value: 7 }, { rank: '8', suit: 'Clubs', value: 8 }, { rank: '9', suit: 'Clubs', value: 9 }, { rank: '10', suit: 'Clubs', value: 10 }, { rank: 'Jack', suit: 'Clubs', value: 10 }, { rank: 'Queen', suit: 'Clubs', value: 10 }, { rank: 'King', suit: 'Clubs', value: 10 },
    { rank: 'Ace', suit: 'Clubs', value: 1 }, { rank: '2', suit: 'Clubs', value: 2 }, { rank: '3', suit: 'Clubs', value: 3 }, { rank: '4', suit: 'Clubs', value: 4 }, { rank: '5', suit: 'Clubs', value: 5 }, { rank: '6', suit: 'Clubs', value: 6 }, { rank: '7', suit: 'Clubs', value: 7 }, { rank: '8', suit: 'Clubs', value: 8 }, { rank: '9', suit: 'Clubs', value: 9 }, { rank: '10', suit: 'Clubs', value: 10 }, { rank: 'Jack', suit: 'Clubs', value: 10 }, { rank: 'Queen', suit: 'Clubs', value: 10 }, { rank: 'King', suit: 'Clubs', value: 10 }
  ];

  var shuffled = _.shuffle(cards);

  var cardCount2 = 0;

  playerCollection[0].hand = _.slice(shuffled, cardCount2, cardCount2 + cardCount);
  cardCount2 = cardCount2 + cardCount;
  playerCollection[1].hand = _.slice(shuffled, cardCount2, cardCount2 + cardCount);
  cardCount2 = cardCount2 + cardCount;
  playerCollection[2].hand = _.slice(shuffled, cardCount2, cardCount2 + cardCount);
  cardCount2 = cardCount2 + cardCount;
  playerCollection[3].hand = _.slice(shuffled, cardCount2, cardCount2 + cardCount);

  console.log(playerCollection);

  var player1 = 0;
  var player2 = 0;
  var player3 = 0;
  var player4 = 0;

  for (let x = 0; x <= cardCount - 1; x++) {
    player1 = player1 + playerCollection[0].hand[x].value;
    player2 = player2 + playerCollection[1].hand[x].value;
    player3 = player3 + playerCollection[2].hand[x].value;
    player4 = player4 + playerCollection[3].hand[x].value;

  }

  playerCollection[0].value = player1;
  playerCollection[1].value = player2;
  playerCollection[2].value = player3;
  playerCollection[3].value = player4;

  var rankedCollection = _.sortBy(playerCollection, ['value']);

  var winner = rankedCollection[3].name;

  console.log(winner, 'is the winner of this game!');

}

cardGame(['bryan', 'ian', 'sean', 'yuna'], 2);
