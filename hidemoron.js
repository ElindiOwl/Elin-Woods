function hidemoron() {
    let x = document.getElementsByClassName("hidemoron");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
function buttonClick(elem) {
    elem.value = 'Nice one!';
}