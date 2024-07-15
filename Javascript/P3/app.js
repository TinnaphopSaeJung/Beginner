let score = prompt("Your score:");

if (score >= 80) {
    document.getElementById("result").innerHTML = "GPA : A";
} else if (score >=70 && score < 80) {
    document.getElementById("result").innerHTML = "GPA : B";
} else if (score >= 60 && score < 70) {
    document.getElementById("result").innerHTML = "GPA : C";
} else if (score >= 50 && score < 60) {
    document.getElementById("result").innerHTML = "GPA : D";
} else if (score < 50) {
    document.getElementById("result").innerHTML = "GPA : F";
}