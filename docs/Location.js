const x = document.getElementById("locati");

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    let mas = ['Good, GOOD!'];
    let n = 0;
    let hid = document.getElementsByClassName("hid") [0];
    let hido = document.getElementsByClassName("hido") [0];
    hid.onclick = function () {
        hido.innerHTML = mas[n % mas.length];
        n++
    }
    hid.click();
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
    }
}