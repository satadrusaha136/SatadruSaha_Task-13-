function checkOddEven() {
    let number = Number(document.getElementById("number").value);

    if (number % 2 === 0) {
        document.getElementById("result").innerHTML = number + " is an Even Number";
    } else {
        document.getElementById("result").innerHTML = number + " is an Odd Number";
    }
}