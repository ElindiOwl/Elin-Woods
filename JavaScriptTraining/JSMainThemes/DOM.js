
{
    const element = document.getElementById("intro");
    document.getElementById("findingElementWithIDInDOM").innerHTML =
        "If we find the intro it will be: " + "\"" + element.innerHTML + "\"";

    const pElements = document.getElementsByTagName("p");
    document.getElementById("findingElementByTagNameInDOM").innerHTML =
        'The text in first paragraph (index 0) is: ' + "<br>" +
        "\"" + pElements[0].innerHTML + "\"";

    const x = document.getElementById("hint");
    const y = x.getElementsByTagName("p");
    document.getElementById("findingElementByTagNameInsideOfIdInDOM").innerHTML =
        'The first paragraph (index 0) inside of "hint" is: ' + "<br>" +
        "\"" + y[0].innerHTML + "\"";

    const fromDocument = document.getElementsByClassName("toFindinDOM");
    document.getElementById("findingElementByClassNameInDOM").innerHTML =
        'The Third text containing item (index 2) with class="toFindinDOM" is: ' + "<br>" +
        "\"" + fromDocument[2].innerHTML + "\"";

    const querySelectorFromDocument = document.querySelectorAll("p.toFindinDOM");
    document.getElementById("findingElementByQuerySelectorInDOM").innerHTML =
        'The Second paragraph (index 1) with class="toFindinDOM" is: ' + "<br>" +
        "\"" + querySelectorFromDocument[1].innerHTML + "\"";
}

{
    const fromForm = document.forms["form"];

    function validateForm() {
        let formvalF = document.forms["form"]["fname"].value;
        let formvalL = document.forms["form"]["lname"].value;
        if (formvalF === "" || formvalL === "") {
            alert("Fill the form first");
            return false;
        } else {
            let valuesText = "";
            for (let i = 0; i < fromForm.length; i++) {
                valuesText += fromForm.elements[i].value + " ";
            }
            document.getElementById("findingElementByObjectCollectionsInDOM").innerHTML = "Hello! " + valuesText;
        }
    }

    document.getElementById("changeStyleOfButt").style.backgroundColor = "Orange";
}


{
    function privetstvie() {
        document.getElementById("pic").src = "imgs/Kategorich.png";
    }
}

{
    function moveIt() {
        let startPoint = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(startPoint);
        startPoint = setInterval(frame, 5);

        function frame() {
            if (pos === 175) {
                clearInterval(startPoint);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    function changeColor(variable) {
        variable.style.backgroundColor = "Red";
    }
}


{
    document.getElementById("anotherButton").onclick = showDate;

    function showDate() {
        document.getElementById("showHere").innerHTML = Date();
    }
}


function checkAreCookiesEndabled() {
    let text = "";
    if (navigator.cookieEnabled === true) {
        text = "Cookies enabled";
    } else {
        text = "Cookies disabled";
    }
    document.getElementById("CheckCookieOnload").innerHTML = text;
}


function toUpperCase() {
    const bg = document.getElementById("frameToBiggify");
    bg.value = bg.value.toUpperCase();
}

function AfterLeavingToUpperCase() {
    const afterLeaving = document.getElementById("frameAfterBiggify");
    afterLeaving.value = afterLeaving.value.toUpperCase();
}


function mouseHover(a) {
    a.innerHTML = "Ok now get away";
    a.style.color = "White";
}

function mouseUnhover(b) {
    b.innerHTML = "Hover or don't";
    b.style.color = "Black";
}


document.getElementById("clickEventListener").addEventListener("click", function () {
    alert("Boo");
});

document.getElementById("clickEventListenerExternalFunction").addEventListener("click", BooFunction);

function BooFunction() {
    alert("Boo Boo");
}


let even = document.getElementById("manyEventListenersInOne");
even.addEventListener("mouseover", forHoverFunction);
even.addEventListener("mouseout", forUnhoverFunction);
even.addEventListener("click", forClickFunction);

function forHoverFunction() {
    const varib = document.getElementById("showOfListeners");
    varib.style.font = "normal small-caps bolder 15px century gothic";
    varib.innerHTML = "Moused over" + " ";
}

function forUnhoverFunction() {
    const varib2 = document.getElementById("showOfListeners");
    varib2.style.font = "italic normal normal 16px arial";
    varib2.innerHTML = "Moused out" + " ";
}

function forClickFunction() {
    const varib3 = document.getElementById("showOfListeners");
    varib3.style.font = "normal small-caps bold 17px lucida console";
    varib3.innerHTML = "Mouse clicked";

}


window.addEventListener("resize", function () {
    document.getElementById("eventOnWindow").innerHTML = Math.random().toFixed(3);
});


let one123 = document.getElementById("calcInput1").innerHTML;
let two123 = document.getElementById("calcInput2").innerHTML;
let oneVal = one123.value;
let twoVal = two123.value;
document.getElementById("incrementionNotButton").addEventListener("click",
    function () {
        incremention(oneVal, twoVal);
    });

function incremention(one, two) {
    document.getElementById("lilCalcResult").innerHTML = one * two;
}


document.getElementById("myP1").addEventListener("click", function () {
    alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function () {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, true);


const paragraph = document.createElement("p");
const nodeForParagraph = document.createTextNode("New text");
paragraph.appendChild(nodeForParagraph);
const fullElement = document.getElementById("creatingNode");
const childElement = document.getElementById("parag2");
fullElement.insertBefore(paragraph, childElement);

const removeElement = document.getElementById("parag3");
removeElement.remove();

const parentToRemoveChild = document.getElementById("creatingNode");
const childToRemove = document.getElementById("parag4");
parentToRemoveChild.removeChild(childToRemove);

const childToRemoveWithFindingParent = document.getElementById("parag5");
childToRemoveWithFindingParent.parentNode.removeChild(childToRemoveWithFindingParent);