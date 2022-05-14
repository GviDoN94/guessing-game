const answer = parseInt(Math.random() * 100);

let playerNumber = 1;

while(true){ //false - ложь

    let userAnswer = prompt("Угадайте число от 1 до 100.\nХодит игрок " + playerNumber + ".\nДля выхода нажмите q");

    if(userAnswer == 'q') {
        break;
    }

    userAnswer = parseInt(userAnswer);

    if(userAnswer == answer){
        alert("Поздравляю! Победил игрок " + playerNumber);
        break;
    } else if( userAnswer > answer) {
        alert("Вы ввели слишком большое число");
    } else if(userAnswer < answer) {
        alert("Вы ввели слишком маленькое число");
    }

    if(playerNumber == 1){
        playerNumber = 2;
    } else {
        playerNumber = 1;
    }
}

alert("Праильный ответ: " + answer);