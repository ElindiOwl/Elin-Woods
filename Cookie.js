function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You've baked " + localStorage.clickcount + " cookies!";
    } else {
        document.getElementById("result").innerHTML = "Oh, your browser doesn't support web storage... that's sad";
    }
}
document.getElementById("result").style.color = "Brown";

