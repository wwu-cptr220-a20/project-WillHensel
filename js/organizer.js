'use strict';

// Global state variable
let state = {
    games: [
        {name:"Secret Hitler", rating:5},
        {name:"Munchkin", rating:4},
        {name:"Bang!", rating:5},
    ],
    inputText: '',
};

// Create the visible elements
function createGameElement(game, id) {
    let newGame = document.createElement('tr');

    let th = document.createElement('th');
    th.scope = "row";
    th.textContent = id;
    newGame.appendChild(th);

    let tr1 = document.createElement('td');
    tr1.textContent = game.name;
    newGame.appendChild(tr1);

    let tr2 = document.createElement('td');
    tr2.textContent = game.rating + " stars";
    tr2.addEventListener('click', function() {
        if(game.rating == 5) {
            game.rating = 0;
        }
        else {
            game.rating += 1
        }
        renderGameTable();
    });
    newGame.appendChild(tr2);

    return newGame;
}

// Render the table with the visible elements
function renderGameTable() {
    let tableElement = document.querySelector('#game-list');
    tableElement.innerHTML = '';
    state.games.forEach((game, index) => {
        tableElement.appendChild(createGameElement(game, index + 1));
    });
    renderInput();
}
renderGameTable();

// Input logic
function addNewGame() {
    state.games.push({
        name: state.inputText,
        rating: 0
    });
    state.inputText = '';
    renderGameTable();
}

document.querySelector('input').addEventListener('input', function() {
    state.inputText = document.querySelector('input').value;
    renderInput();
});

document.getElementById('submit-button').addEventListener('click', addNewGame);

function renderInput() {
    document.querySelector('input').value = state.inputText;
    if(state.inputText == '') {
        document.getElementById('submit-button').disabled = true;
    }
    else {
        document.getElementById('submit-button').disabled = false;
    }
}