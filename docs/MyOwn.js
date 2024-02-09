document.getElementById("tryme").innerHTML = "What? HTML part in JS already?";
document.getElementById("tryme").style.fontSize = "20px";
document.getElementById("tryme").style.color = "white";
document.getElementById("tryme").style.backgroundColor = "black";
document.getElementById("tryme").style.padding = "10px";
function changetext() {
    document.getElementById("tryme").innerHTML = "Hello World and JS!";
    document.getElementById("tryme").style.fontSize = "30px";
    document.getElementById("tryme").style.color = "#ff0808";
    document.getElementById("tryme").style.backgroundColor = "#4b1616";
    document.getElementById("tryme").style.padding = "15px";
}
function light(sw) {
    let pic;
    if (sw == 0) {
        pic = "imgs/pic_bulboff.gif"
    } else {
        pic = "imgs/pic_bulbon.gif"
    }
    document.getElementById('Bulbie').src = pic;
}