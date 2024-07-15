let number = prompt("Your Number:");
console.log(number);

let num_Random = Math.floor(Math.random() * 1000); //Math.random สุ่ม 0 - 1  && Math.floor ปัดเศษลง
console.log(num_Random);

document.getElementById("random").innerHTML = num_Random;

if (number == num_Random) {
    document.getElementById("result").innerHTML = "คุณถูกรางวัล!!!"
} else {
    document.getElementById("result").innerHTML = "โดนแดก 5555"
}
