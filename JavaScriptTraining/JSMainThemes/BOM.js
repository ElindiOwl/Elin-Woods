document.getElementById("BOMInnerWidthAndHeight").innerHTML =
    "Browser inner window width: " + window.innerWidth + "px<br>" +
    "Browser inner window height: " + window.innerHeight + "px";

document.getElementById("BOMScreenParameters").innerHTML =
    "Screen width is " + screen.width + "px" + "<br>" +
    "Screen Height: " + screen.height + "px" + "<br>" +
    "Available Screen Width (minus interface features like the Windows Taskbar): " + screen.availWidth + "px" + "<br>" +
    "Available Screen Height (minus interface features like the Windows Taskbar): " + screen.availHeight + "px" + "<br>" +
    "Screen Color Depth: " + screen.colorDepth + "bit" + "<br>" +
    "Screen Pixel Depth: " + screen.pixelDepth + "px" + "<br>" +
    "For modern computers, Color Depth and Pixel Depth are equal.";

document.getElementById("BOMLocation").innerHTML =
    "Page location is " + window.location.href + "<br>" +
    "Page hostname is " + window.location.hostname + "<br>" +
    "Page path is " + window.location.pathname + "<br>" +
    "Page protocol is " + window.location.protocol + "<br>" +
    "Port number is " + window.location.port +
    "(Most browsers will not display default port numbers (80 for http and 443 for https))" + "<br>";

function returnToTheFirstPage() {
    window.location.assign("TheProject.html")
}

function goBackInHistory() {
    window.history.back()
}

function goForwardInHistory() {
    window.history.forward()
}

function goToSpecificURLInHistoryList() {
    window.history.go(-3);
}

document.getElementById("BOMNavigator").innerHTML =
    "cookiesEnabled is " + navigator.cookieEnabled + "<br>" +
    "navigator.appName is " + navigator.appName + "<br>" +
    "navigator.appCodeName is " + navigator.appCodeName + "<br>" +
    "navigator.product is " + navigator.product + "<br>" +
    navigator.appVersion + "<br>" +
    "the browser platform (operating system): " + navigator.platform + "<br>" +
    "the browser's language: " + navigator.language + "<br>" +
    "is the browser online: " + navigator.onLine + "<br>" +
    "is Java enabled: " + navigator.javaEnabled();

function confirmBox() {
    let resultText;
    if (confirm("Choose one")) {
        resultText = "You pressed OK";
    } else {
        resultText = "You pressed Cancel";
    }
    document.getElementById("showChoise").innerHTML = resultText;
}

function promptBox() {
    let promptText;
    let userPrompt = prompt("Enter \nyour \nname:", "");
    if (userPrompt === null || userPrompt === "") {
        promptText = "Prompt is cancelled";
    } else {
        promptText = "Hello " + userPrompt;
    }
    document.getElementById("promptBoxShowChoise").innerHTML = promptText;
}

function alertForTimeOut() {
    alert("Here I finally am");
}

function alertToAnnoy() {
    let toStopAndToRun = setInterval(Annoyer, 3000);

    function Annoyer() {
        alert("I will not go away");
    }

    function remove() {
        clearInterval(toStopAndToRun);
    }

    setTimeout(remove, 12000);
}

/*document.cookie = "username=Warwond Blackfur; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
document.cookie = "username=Jenireth Ishar; expires=Thu, 11 Jan 2019 12:00:00 UTC; path=/";*/
document.getElementById("showCookies").innerHTML = document.cookie;

function setCookie(cookieName, cookieValue, expireDays) {
    const forCookieDate = new Date();
    forCookieDate.setTime(forCookieDate.getTime() + (expireDays*24*60*60*1000));
    let expireText = "expires=" + forCookieDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expireText + ";path=/";
}
function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let splitedArray = decodedCookie.split(';');
    for (let i = 0; i < splitedArray.length; i++) {
        let variable = splitedArray[i];
        while (variable.charAt(0) == ' ') {
            variable = variable.substring(1);
        }
        if (variable.indexOf(name) == 0) {
            return variable.substring(name.length, variable.length);
        }
    }
    return "";
}
window.addEventListener('load', function checkOrAskForCookieData() {
    let username = getCookie("username");
    if (username != "") {
        alert("Welcome back " + username);
    } else {
        username = prompt("Hello stranger! \nYou are you?", "");
        if (username != "" && username != null) {
            setCookie("username", username, 30);
        }
    }
});