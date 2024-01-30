const fromJSONTxt = '{"name":"Elindi", "lastName":"Owl", "age":21, "city":"Darwin"}'
const parsedTxt = JSON.parse(fromJSONTxt);
document.getElementById("JSONParsingText").innerHTML = `${parsedTxt.name} ${parsedTxt.lastName}`;

const fromJSONArray = '["Mage","Warrior","Archer","Priest"]'
const parsedArray = JSON.parse(fromJSONArray);
function loopTroughParsedArray() {
    let result = "";
    for ( let i = 0; i < parsedArray.length; i++) {
        result += `${parsedArray[i]}, `;
    }
    document.getElementById("JSONParsingArray").innerHTML = `${result.slice(0, -2)}.`;
}
loopTroughParsedArray();

{
    const fromJSONTextWithDate = '{"name":"Daniel","birth":"2002-04-01"}';
    const parsedTextWithDate = JSON.parse(fromJSONTextWithDate, function (key, value) {
        if (key === "birth") {
            return new Date(value);
        } else {
            return value;
        }
    });
    document.getElementById("JSONParsingTextWithDateAndReviverFunction").innerHTML = `${parsedTextWithDate.name} <br> "${parsedTextWithDate.birth}"`;
}

const toSend = {fname:"Warwond", lname:"Blackfur", age:37, birthplace:"Hern"};
const toSendWithJSON = JSON.stringify(toSend);
document.getElementById("JSONSendingObject").innerHTML = toSendWithJSON;

const receivedJSON = JSON.parse(toSendWithJSON);
let receivedText = "";
for (const x in receivedJSON) {
    receivedText += `${x}, `;
}
document.getElementById("JSONReceivingObject").innerHTML = `${receivedText.slice(0, -2)}.`;
