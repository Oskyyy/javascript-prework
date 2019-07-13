{    
    const playGame = function(argPlayerInput) {
        
        clearMessages();

        let argPlayerMove = getMoveName(argPlayerInput);
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        let argComputerMove = getMoveName(randomNumber);
        
        console.log('Gracz wpisał: ' + argPlayerInput);
        displayResult(argComputerMove, argPlayerMove);
    }   

    const getMoveName = function(argMoveId) {
        console.log('Id: ', argMoveId);
            
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
        

    const displayResult = function(argComputerMove, argPlayerMove) {
            
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Mój ruch to: ' + argComputerMove + ', a twój ruch to: ' + argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            
        if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
            printMessage('Wygrywasz!');
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Przegrywasz!');
        }
    }


    let playrock = document.getElementById('play-rock');
    playrock.addEventListener('click', function() {
        playGame(1);
    });

    let playpaper = document.getElementById('play-paper');
    playpaper.addEventListener('click', function() {
        playGame(2);
    });

    let playscissors = document.getElementById('play-scissors');
    playscissors.addEventListener('click', function() {
        playGame(3);
    });
}