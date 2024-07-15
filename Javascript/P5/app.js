let round = prompt("จำนวนรอบที่จะเล่น :");
var count = 0;

document.getElementById('game-round').innerHTML += "คุณต้องการเล่น " + round + " รอบ";


for (var i = 0; i < round; i++) {
    var answer = prompt("หัว หรือ ก้อย :");
    var numRamdom = Math.floor(Math.random() * 10);
    var randomAnswer = "";

    if (numRamdom <= 4) {
        randomAnswer = "หัว";
    } else {
        randomAnswer = "ก้อย";
    }

    if (answer == randomAnswer) {
        alert("คุณตอบถูก!!!!");
        count++;
    } else {
        alert("คุณตอบผิดTT");
    }

    document.getElementById('game-list').innerHTML += "รอบที่ " + (i + 1) + " คุณออก " + answer + "<br>";
    document.getElementById('game-list').innerHTML += "คำตอบที่ถูกคือ " + randomAnswer + "<br>";
}

document.getElementById("game-score").innerHTML = "คะแนนเต็ม : " + round + " คุณได้คะแนนไป : " + count + " คะแนน";

