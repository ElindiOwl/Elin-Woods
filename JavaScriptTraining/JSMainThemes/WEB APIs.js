const locationText = document.getElementById("showLocation");

function getLocationAPI() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionAPI, showErrorOnPosition);
    } else {
        locationText.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPositionAPI(position) {
    locationText.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>" + "Longitude: " + position.coords.longitude;
}

function showErrorOnPosition(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationText.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            locationText.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            locationText.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            locationText.innerHTML = "An unknown error occurred."
            break;
    }
}


function validateFunction() {
    const inputObject = document.getElementById("validation");
    if (!inputObject.checkValidity()) {
        if (inputObject.validity.rangeUnderflow) {
            document.getElementById("showValidationResult").innerHTML =
                "Too small value";
        } else if (inputObject.validity.rangeOverflow) {
            document.getElementById("showValidationResult").innerHTML =
                "Too large value";
        } else {
            document.getElementById("showValidationResult").innerHTML =
                inputObject.validationMessage;
        }
    } else {
        document.getElementById("showValidationResult").innerHTML = "Success";
    }
}


localStorage.setItem("localItemName", "Daniel Dankovsky");
document.getElementById("localStorageAPI").innerHTML = localStorage.getItem("localItemName");

sessionStorage.setItem("sessionItemName", "Olga Dankovsky");
document.getElementById("sessionStorageAPI").innerHTML = sessionStorage.getItem("sessionItemName");


let worker;
function startWorker() {
    if (typeof (worker) === "undefined") {
        worker = new Worker("JavaScriptTraining/CountingWorker.js");
    }
    worker.onmessage = function (event) {
        document.getElementById("countingWorkerResult").innerHTML = event.data;
    };
}
function stopWorker() {
    worker.terminate();
    worker = undefined;
}


getText("/JavaScriptTraining/forFetch.txt");
async function getText(file) {
    let forFetchObject = await fetch(file);
    document.getElementById("fetchAPI").innerHTML = await forFetchObject.text();
}

let file = "/JavaScriptTraining/forFetch.txt";
fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("arrowFuncFetchAPI").innerHTML = y);