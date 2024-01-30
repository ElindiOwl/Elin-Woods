let r = document.querySelector(':root');

function Funkie_get() {
    let rs = getComputedStyle(r);
    alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}
function Funkie_set() {
    r.style.setProperty('--blue', 'lightblue');
}