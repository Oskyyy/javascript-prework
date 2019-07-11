{    
    const playGame = function(argPlayerInput) {
        
        clearMessages();
        let argPlayerMove = getMoveName(argPlayerInput);
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        let argComputerMove = getMoveName(randomNumber);
        
        function getMoveName(argMoveId) {
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
            printMessage('Mój ruch to: ' + argComputerMove + '. Twój ruch to: ' + argPlayerMove);
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Przegrywasz!');
            }
            
            if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Przegrywasz');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Wygrywasz!');
            }
            
            if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                printMessage('Przegrywasz!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Wygrywasz!');
            }

            if (argComputerMove == argPlayerMove) {
                printMessage('Remis');
            }
        }

        console.log('Gracz wpisał: ' + argPlayerInput);
        displayResult(argComputerMove, argPlayerMove);
    }

    const playrock = document.getElementById('play-rock');
    playrock.addEventListener('click', function() {
        playGame(1);
    });

    const playpaper = document.getElementById('play-paper');
    playpaper.addEventListener('click', function() {
        playGame(2);
    });

    const playscissors = document.getElementById('play-scissors');
    playscissors.addEventListener('click', function() {
        playGame(3);
    });
}