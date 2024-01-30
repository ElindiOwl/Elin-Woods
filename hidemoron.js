function hidemoron() {
    var x = document.getElementsByClassName("hidemoron");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
function buttonClick(elem) {
    elem.value = 'Nice one!';
}