document.getElementById("plus").innerHTML = String(76 + 67);


const printButton = document.getElementById("print")
printButton.addEventListener('click', function () {
    window.print()
})


let x, y, z;
x = 46;
y = 77;
z = x + y;
document.getElementById("summation").innerHTML =
    "The value of z is " + z + ".";


let m = 4 + 3 + "5" + "66";
document.getElementById("endadd").innerHTML = m;


const elems = ["Fire", "Fire", "Water"];
elems[0] = "Air";
elems.push("Earth");
document.getElementById("elems").innerHTML = elems.toString();


const car = {type: "Mercedes", model: "Benz e300", color: "Space-gray"};
car.color = "Dark-red";
car.owner = "Elindi Redmoor";
document.getElementById("car").innerHTML = car.color + " " + car.type + " " + car.model + " " + "owned by" + " " + car.owner;


{
    let text = "Go";
    text += " study";
    document.getElementById("+=").innerHTML = text;
}


{
    let x = 38;
    x -= 27;
    document.getElementById("-=").innerHTML = "Value of x is: " + x;
}


{
    let car = "";
    document.getElementById("empty").innerHTML =
        "The value is: " +
        car + "<br>" +
        "The type is: " + typeof car;
}


function Funca(p1, p2) {
    return p1 * p2;
}


let result = Funca(4, 3);
document.getElementById("funca").innerHTML = result;


document.getElementById("funca2").innerHTML = funka(6, 7);

function funka(a, b) {
    return a * b;
}


function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

document.getElementById("converting").innerHTML = "The temperature is " + toCelsius(6).toFixed(2) + " Celsius.";


const person = {
    firstName: "Elindi",
    lastName: "Redmoor",
    id: 6777,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("Object").innerHTML = person.fullName();


document.getElementById("magic").innerHTML = "\"This 'magic', Warwond, is a bit too wild for me, actually.\"";

{
    function repl() {
        let text = document.getElementById("repla").innerHTML;
        document.getElementById("repla").innerHTML =
            text.replace("of combining my own blood with the Great Hedgehog's plasma amalgam", "caused my skin to " +
                "grow crystal spikes over a " +
                "time but allowed me to create sharp forms of crystals");
    }
}

{
    function repli() {
        let text = document.getElementById("replo").innerHTML;
        document.getElementById("replo").innerHTML =
            text.replace("in those Sangine knight's books where he writes about blood-thirsty monsters etc,",
                " your feelings and will to release a forming power,");
        let text2 = document.getElementById("replo").innerHTML;
        document.getElementById("replo").innerHTML =
            text2.replace("cruel", "complicated to maintain");
        let text3 = document.getElementById("replo").innerHTML;
        document.getElementById("replo").innerHTML =
            text3.replace("'s suffering and the supply replenishment you know what I mean.", " to control her " +
                "own mind and body" +
                " to form inner energy into a harming substance.");
        let text4 = document.getElementById("replo").innerHTML;
        document.getElementById("replo").innerHTML =
            text4.replaceAll("blood", "crystal");
        const iterator = text.matchAll(/Crystal/gi);
        document.getElementById("replosearch").innerHTML =
            Array.from(iterator).toString();
        document.getElementById("reploinc").innerHTML =
            text.includes("crystal").toString();
    }
}

{
    let text = document.getElementById("replo").innerHTML;
    const iterator = text.matchAll(/Blood/gi);
    document.getElementById("replosearch").innerHTML = Array.from(iterator).toString();
}
{
    let text = document.getElementById("replo").innerHTML;
    document.getElementById("reploinc").innerHTML = text.includes("blood").toString();
}
{
    let firstName = "Inkaani";
    let lastName = "Rayz";

    document.getElementById("nam").innerHTML = `${firstName} ${lastName} (c)`;
}

{
    let header = "Services";
    let tags = ["Regular services", "Toppings", "Custom service"];

    let html = `<h1>${header}</h2><ul>`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }
    html += `</ul>`;
    document.getElementById("templ").innerHTML = html;
}
{
    let price = 30;
    let VAT = 0.45;

    document.getElementById("price").innerHTML =
        `Total cost (fee included): ${(price * (1 + VAT)).toFixed(2)}`;
}

document.getElementById("nan").innerHTML = String(100 / "Apple");

{
    let x = 100 / "Apple";
    document.getElementById("ifnan").innerHTML = isNaN(x).toString();
}
{
    document.getElementById("typnan").innerHTML = typeof (x = NaN);
}
{
    let myNumber = 2;
    let txt = "";
    while (myNumber !== Infinity) {
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>"
    }
    document.getElementById("infinit").innerHTML = txt;
}
{
    let x = 2 / 0;
    let y = -2 / 0;
    document.getElementById("zerinfinit").innerHTML =
        x + "<br>" + y;
    document.getElementById("zerinfinittyp").innerHTML =
        typeof Infinity;
}
{
    let myNumber = 32;
    document.getElementById("tostring").innerHTML =
        "Decimal 32 = " + "<br><br>" +

        "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
        "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
        "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
        "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
        "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
        "Octal (base 8): " + myNumber.toString(8) + "<br>" +
        "Binary (base 2): " + myNumber.toString(2);
}
{
    document.getElementById("numbr").innerHTML =
        Number(true) + "<br>" +
        Number(false) + "<br>" +
        Number("10") + "<br>" +
        Number("  10") + "<br>" +
        Number("10  ") + "<br>" +
        Number(" 10  ") + "<br>" +
        Number("10.33") + "<br>" +
        Number("10,33") + "<br>" +
        Number("10 33") + "<br>" +
        Number("Elindi");
}

{
    let x = new Date("2023-11-12");
    document.getElementById("numdate").innerHTML =
        Number(x).toString();
    document.getElementById("numdateexp").innerHTML = y =
        "The Date() method returns the number of milliseconds since 1.1.1970:"
}

{
    document.getElementById("parse").innerHTML =
        parseInt("-10") + "<br>" +
        parseInt("-10.33") + "<br>" +
        parseInt("10") + "<br>" +
        parseInt("10.33") + "<br>" +
        parseInt("10 6") + "<br>" +
        parseInt("10 years") + "<br>" +
        parseInt("years 10");
}

{
    document.getElementById("isinteg").innerHTML =
        Number.isInteger(812) + "<br>" + Number.isInteger(71.3);
}

{
    document.getElementById("issafeinteg").innerHTML =
        Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
    document.getElementById("issafeintegannot").innerHTML = "Safe integers are all integers from -(253 - 1) to +(253 - 1)." +
        "This is safe: 9007199254740991. This is not safe: 9007199254740992."
}


const fruits = ["Orange", " Mango", " Dragon Fruit", " Pomella"];
document.getElementById("fruits").innerHTML =
    fruits.toString();
document.getElementById("justfruits").innerHTML =
    fruits.toString();
document.getElementById("joinfruits").innerHTML =
    fruits.join(" & ");
document.getElementById("fruitsfkoff").innerHTML =
    fruits.pop();
document.getElementById("fruitsfkoffresult").innerHTML =
    fruits.toString();
document.getElementById("fruitsfirstfkoff").innerHTML =
    fruits.shift();
document.getElementById("fruitsfirstfkoffresult").innerHTML =
    fruits.toString();
fruits.unshift("Lemon");
document.getElementById("fruitsplusstart").innerHTML =
    fruits.toString();


const arrayofarrays = [];
arrayofarrays[0] = fruits;
arrayofarrays[1] = Number(x);
arrayofarrays[2] = elems;
arrayofarrays[3] = person.fullName();
let arra = arrayofarrays.length;

let arratext = "<ul>";
for (let i = 0; i < arra; i++) {
    arratext += "<li>" + arrayofarrays[i] + "</li>";
}
arratext += "</ul>";

document.getElementById("arrayofarrays").innerHTML = arratext;

document.getElementById("arradesc").innerHTML = "Two different ways of doing the same thing."

let arratexta = "<ul>";
arrayofarrays.forEach(araFunc);
arratexta += "</ul>";

document.getElementById("arrayofarrays2").innerHTML = arratexta;

function araFunc(value) {
    arratexta += "<li>" + value + "</li>";
}

document.getElementById("arrtype").innerHTML =
    typeof arrayofarrays;
document.getElementById("arrisarr").innerHTML =
    Array.isArray(arrayofarrays).toString();
document.getElementById("instofarr").innerHTML =
    String(arrayofarrays instanceof Array);
document.getElementById("arrleng").innerHTML =
    arrayofarrays.length.toString();

const flatArr = [[1, 2], [3, 4], [5, 6], [7, 8]];
const newflatArr = flatArr.flat();
document.getElementById("flatarr").innerHTML =
    newflatArr.toString();
flatArr.splice(2, 1, ["Yogurt", "baba Yaga"], ["Baloon, door"]);
document.getElementById("splice").innerHTML =
    flatArr.toString();
const splicealone = flatArr.slice(2, 4);
document.getElementById("slice").innerHTML =
    splicealone.toString();

const alphabet = ["Nero", "Vergil", "Dante", "Warwond", "Jenereth", "Elindi"];
document.getElementById("alphanames").innerHTML =
    alphabet.toString();
alphabet.sort();
document.getElementById("sortedalphanames").innerHTML =
    alphabet.toString();
alphabet.reverse();
document.getElementById("sortedalphanamesreversed").innerHTML =
    alphabet.toString();

const numsorting = [65, 98, 1, 260, 3.7];
document.getElementById("nums").innerHTML =
    numsorting.toString();
numsorting.sort();
document.getElementById("wrongnumsort").innerHTML =
    numsorting.toString();

numsorting.sort(function (a, b) {
    return a - b
});
document.getElementById("rightnumsort").innerHTML = numsorting.toString();

document.getElementById("wrongnumsortslowest").innerHTML = numsorting[0].toString();

function numsortMin(arr) {
    return Math.min.apply(null, arr);
}

document.getElementById("numsortMin").innerHTML = numsortMin(numsorting);

function arrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

document.getElementById("JsmethodMin").innerHTML = arrayMin(numsorting).toString();

numsorting.sort(function (a, b) {
    return b - a
});
document.getElementById("rightnumsortdecrease").innerHTML = numsorting.toString();

document.getElementById("wrongnumsortshighest").innerHTML = numsorting[0].toString();

function numsortMax(arr) {
    return Math.max.apply(null, arr);
}

document.getElementById("numsortMax").innerHTML = numsortMax(numsorting);

function arrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

document.getElementById("JsmethodMax").innerHTML = arrayMax(numsorting).toString();

document.getElementById("randomnumsort").innerHTML = numsorting.toString();

function randomsortfunction() {
    numsorting.sort(function () {
        return 0.5 - Math.random()
    });
    document.getElementById("randomnumsort").innerHTML = numsorting.toString();
}

function FisherYatesrandommethod() {
    for (let i = numsorting.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = numsorting[i];
        numsorting[i] = numsorting[j];
        numsorting[j] = k;
    }
    document.getElementById("FisherYatesrandommethod").innerHTML = numsorting.toString();
}

const ages = [
    {type: "The beast alliances age", year: 400},
    {type: "The binding of free mind", year: 0},
    {type: "The end of a God's presence", year: 1001},
    {type: "The birth of a humankind", year: -800}
];
displayAges();
ages.sort(function (a, b) {
    return a.year - b.year
});
displayAges();

function displayAges() {
    document.getElementById("agessort").innerHTML =
        ages[0].type + " - " + ages[0].year + "b.c. yr" + "<br>" +
        ages[1].type + " - " + ages[1].year + "yr" + "<br>" +
        ages[2].type + " - " + ages[2].year + "yr" + "<br>" +
        ages[3].type + " - " + ages[3].year + "yr";
}

function agescomplexsort() {
    ages.sort(function (a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    displayAges();
}

const stablesorting = [
    {name: "X00", price: 100},
    {name: "X01", price: 100},
    {name: "X02", price: 100},
    {name: "X03", price: 100},
    {name: "X04", price: 110},
    {name: "X05", price: 110},
    {name: "X06", price: 110},
    {name: "X07", price: 110},
    {name: "X08", price: 120},
    {name: "X09", price: 120},
    {name: "X10", price: 120},
    {name: "X11", price: 120},
    {name: "X12", price: 130},
    {name: "X13", price: 130},
    {name: "X14", price: 130},
    {name: "X15", price: 130},
    {name: "X16", price: 140},
    {name: "X17", price: 140},
    {name: "X18", price: 140},
    {name: "X19", price: 140}
];
stablesorting.sort((p1, p2) => {
    if (p1 < p2) return -1;
    if (p1 > p2) return 1;
    return 0;
});
let txt = "";
stablesorting.forEach(sortFunction);

function sortFunction(value) {
    txt += value.name + " " + value.price + "<br>";
}

document.getElementById("stableSort").innerHTML = txt;

const numbermap = [91, 73, 42, 17, 38];
document.getElementById("arrayone").innerHTML = numbermap.toString();

const numbermap2 = numbermap.map(mapFunction);
document.getElementById("arraymap").innerHTML = numbermap2.toString();

function mapFunction(value) {
    return value * 2;
}

const numbermap3 = numbermap.flatMap((x) => x * 7, 3);
document.getElementById("arrayflatmap").innerHTML = numbermap3.toString();

const over300 = numbermap3.filter(filterFunc);

function filterFunc(value) {
    return value > 300;
}

document.getElementById("arrayfilter").innerHTML = over300.toString();

let allover55 = numbermap.every(everyFunc);

function everyFunc(value) {
    return value > 55;
}

document.getElementById("arrayevery").innerHTML = "All over 55 is " + allover55;

let someover55 = numbermap.some(someFunc);

function someFunc(value) {
    return value > 55;
}

document.getElementById("arraysome").innerHTML = "Some over 55 is " + someover55;

let findnumber = numbermap.sort().find(isMoreThan55);

function isMoreThan55(value) {
    return value > 55;
}

document.getElementById("arrayfind").innerHTML = "First number over 55 is " + findnumber;

let findnumberwithindex = numbermap.findIndex(isMoreThan55WithIndex);

function isMoreThan55WithIndex(value,) {
    return value > 55;
}

document.getElementById("arrayFindIndex").innerHTML = "First number over 55 has index " + findnumberwithindex;

let sum = numbermap.reduce(reduceFunction);

function reduceFunction(total, value) {
    return total + value;
}

document.getElementById("arraysum").innerHTML = "The sum of the first array is " + sum;

let sumplusvalue = numbermap.reduce(reduceplusFunction, 374);

function reduceplusFunction(total, value) {
    return total + value;
}

document.getElementById("arraysumplusvalue").innerHTML = "The sum of the first array plus initial value is " + sumplusvalue;

const weapon = [" Sword", " sabre", " spear", " crossbow", " dagger", " spear"];
document.getElementById("weaponlist").innerHTML = weapon.toString();

let weappos = weapon.indexOf(" spear") + 1;
document.getElementById("weaponlistpos").innerHTML = "A spear is found in position " + weappos;

let weaplast = weapon.lastIndexOf(" spear") + 1;
document.getElementById("weaponlistposlast").innerHTML = "A spear last position is found in position " + weaplast;

const weapFrom = Array.from("Sword,sabre,spear,crossbow,dagger,spear");
document.getElementById("weaponListFrom").innerHTML = weapFrom.filter(value => value !== ",").toString();

const keys = weapon.keys();
let weaponText = "";
for (let x of keys) {
    weaponText += x + "<br>";
}
document.getElementById("weaponListKeys").innerHTML = weaponText;

const w = weapon.entries();
for (let x of w) {
    document.getElementById("weaponListEntries").innerHTML += x + "<br>";
}

document.getElementById("weaponListIncludes").innerHTML = "Does the list include a crossbow?" + " " + weapon.includes(" crossbow");

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const months = [...q1, ...q2, ...q3, ...q4];
document.getElementById("months").innerHTML = months.toString();

const date = new Date();
document.getElementById("date").innerHTML = date.toString();

const dateTillHour = new Date(2018, 11, 24, 2);
document.getElementById("dateTillHour").innerHTML = dateTillHour.toString();

const date20thSent = new Date(79, 7, 13);
document.getElementById("date20thSent").innerHTML = date20thSent.toString();

document.getElementById("dateUTC").innerHTML = date.toUTCString();
document.getElementById("dateISO").innerHTML = date.toISOString();
const msec = Date.parse("Dec 18, 2023");

const datefrommilis = new Date(msec);
document.getElementById("datefrommilis").innerHTML = msec + " is being converted to " + datefrommilis;

document.getElementById("fullYear").innerHTML =
    "Shows year" + " - " + " " + date.getFullYear();
document.getElementById("getMonth").innerHTML =
    "Shows month" + " - " + " " + date.getMonth();
document.getElementById("getDate").innerHTML =
    "Shows date(day)" + " - " + " " + date.getDate();
document.getElementById("getHours").innerHTML =
    "Shows hours" + " - " + " " + date.getHours();
document.getElementById("getMinutes").innerHTML =
    "Shows minutes" + " - " + " " + date.getMinutes();
document.getElementById("getDay").innerHTML =
    "Shows weekday (starts from Sunday(0))" + " - " + " " + date.getDay();
document.getElementById("getTimeZoneOffset").innerHTML =
    "Shows time zone difference" + " - " + " " + "(" + date.getTimezoneOffset() + ")";
document.getElementById("getTime").innerHTML =
    "Shows milliseconds since midnight January 1, 1970" + " - " + " " + date.getTime() + " " + "sec";
document.getElementById("getFull").innerHTML = date.getFullYear() + " " + date.getMonth() + " " + date.getDate() + " " + date.getHours() + " " + date.getMinutes();

const months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const frommonthsTwo = new Date();
let letMonth = months2[frommonthsTwo.getMonth()];
document.getElementById("arrayGetMonth").innerHTML = letMonth;

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const days = new Date();
let weekDay = weekDays[days.getDay()];
document.getElementById("arrayGetDay").innerHTML = weekDay;

{
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    let years = Math.round(Date.now() / year);
    let days = Math.round(Date.now() / day);
    let hours = Math.round(Date.now() / hour);
    let minutes = Math.round(Date.now() / minute);
    document.getElementById("dateCalculation").innerHTML = years + " " + days + " " + hours + " " + minutes;
}

const setTime = new Date();
setTime.setFullYear(2024);
setTime.setMonth(0);
setTime.setDate(1);
setTime.setHours(0);
setTime.setMinutes(0);
setTime.setSeconds(0);
document.getElementById("setTime").innerHTML = "Set a year, month, date, hour, and minutes to " + " - " + "\"" + setTime + "\"";

const changeSetTime = setTime;
changeSetTime.setDate(changeSetTime.getDate() + 400);
changeSetTime.setHours(changeSetTime.getHours() + 33);
changeSetTime.setMinutes(changeSetTime.getMinutes() + 878);
document.getElementById("modifySetTime").innerHTML = "Modify value by adding 400 days, 33 hours and 873 minutes " + " - " + "\"" + changeSetTime + "\"";

let compareText;
if (setTime > changeSetTime) {
    compareText = "Then was before January 1st 2024.";
} else {
    compareText = "It's been after January 1st 2025.";
}
document.getElementById("compareSetTime").innerHTML = compareText;

document.getElementById("mathConstants").innerHTML =
    "<p><b>Math.E (returns Euler's number):</b> " + Math.E + "</p>" +
    "<p><b>Math.PI (returns PI):</b> " + Math.PI + "</p>" +
    "<p><b>Math.SQRT2 (returns the square root of 2):</b> " + Math.SQRT2 + "</p>" +
    "<p><b>Math.SQRT1_2 (returns the square root of 1/2):</b> " + Math.SQRT1_2 + "</p>" +
    "<p><b>Math.LN2 (returns the natural logarithm of 2):</b> " + Math.LN2 + "</p>" +
    "<p><b>Math.LN10 (returns the natural logarithm of 10):</b> " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E (returns base 2 logarithm of E):</b> " + Math.LOG2E + "</p>" +
    "<p><b>Math.Log10E (returns base 10 logarithm of E):</b> " + Math.LOG10E + "</p>";

const round = [5.4, 5.5, 5.6];
document.getElementById("round").innerHTML = "by rounding 5.4 you get " + Math.round(round[0]) + "<br>"
    + "by rounding 5.5 you get " + Math.round(round[1]) + "<br>" + "by rounding 5.6 you get " + Math.round(round[2]);
document.getElementById("ceil").innerHTML =
    "by ceiling (rounding up to the nearest integer) 5.1 you get " + Math.ceil(5.1);
document.getElementById("floor").innerHTML =
    "by flooring (rounding down to the nearest integer) 5.9 you get " + Math.floor(5.9);
document.getElementById("trunc").innerHTML =
    "trunc returns the integer part of x. Trunc of 4.7 is " + Math.trunc(4.7);
document.getElementById("sign").innerHTML =
    "sign returns if x is negative, null or positive. Sign of 3.3 is " + Math.sign(3.3);
document.getElementById("pow").innerHTML =
    "pow returns the value of x to the power of y. Pow of 3 in 43 is " + Math.pow(43, 3);
document.getElementById("sqrt").innerHTML =
    "sqrt returns the square root of x. sqrt of 73 is " + Math.sqrt(73).toFixed(3);
document.getElementById("abs").innerHTML =
    "abs returns the absolute (positive) value of x. abs of -8 is " + Math.abs(8);

document.getElementById("sin").innerHTML =
    "The sine value of 147 degrees is " + Math.sin(147 * Math.PI / 180).toFixed(3);
document.getElementById("cos").innerHTML =
    "The cosine value of 147 degrees is " + Math.cos(147 * Math.PI / 180).toFixed(3);
document.getElementById("min").innerHTML =
    "Shows min value of a list " + Math.min(0, 150, 30, 20, -8, -200);
document.getElementById("max").innerHTML =
    "Shows min value of a list " + Math.max(0, 150, 30, 20, -8, -200);

document.getElementById("random").innerHTML =
    "Returns random number between 0 and 1 every time you refresh the page " + Math.random().toFixed(3);
document.getElementById("randomWithFloor").innerHTML =
    "Returns random number between 0 and 9 every time you refresh the page " + Math.floor(Math.random() * 10);
document.getElementById("randomWithFloorExtended").innerHTML =
    "Returns random number between 1 and 10 every time you refresh the page " + Math.floor((Math.random() * 10) + 1);
document.getElementById("randomWithFloorExtendedBigger").innerHTML =
    "Returns random number between 0 and 100 every time you refresh the page " + Math.floor(Math.random() * 101);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showResult() {
    document.getElementById('properRandomFunction').innerHTML = getRndInteger(77, 190);
}

document.getElementById("log").innerHTML =
    "Returns the natural logarithm of a number. Log of 7 is " + Math.log(7).toFixed(3);
document.getElementById("log2").innerHTML =
    "Returns the base 2 logarithm of a number. Base 2 log of 9 is " + Math.log2(9).toFixed(3);
document.getElementById("log10").innerHTML =
    "Returns the base 10 logarithm of a number. Base 10 log of 400 is " + Math.log10(400).toFixed(3);

function ageBuyCheck() {
    let buyAble;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        buyAble = "It's not a number!";
        document.getElementById("ageCheck").innerHTML = buyAble;
    } else {
        buyAble = (age < 21) ? "No, you are too young" : "Yes, you are old enough";
        document.getElementById("ageCheck").innerHTML = buyAble + " to buy alcohol";
    }
}

let coalescingName = null;
let coalescingText = "missing";
let coalescingResult = coalescingName ?? coalescingText;
document.getElementById("nullishCoalescing").innerHTML = "The name is " + coalescingResult;

const plane = {type: "Boeing", model: "747", color: "white"};
let name = plane?.name;
document.getElementById("optionalChaining").innerHTML = name;

const hour = new Date().getHours();
let greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.getElementById("ifPlusElse").innerHTML = greeting;

const time = new Date().getHours();
let hello;
if (time < 12) {
    hello = "Good morning";
} else if (time < 18) {
    hello = "Good day";
} else {
    hello = "Good evening";
}
document.getElementById("elseIf").innerHTML = hello;

let switchWeekDay;
switch (new Date().getDay()) {
    case 0:
        switchWeekDay = "Sunday";
        break;
    case 1:
        switchWeekDay = "Monday";
        break;
    case 2:
        switchWeekDay = "Tuesday";
        break;
    case 3:
        switchWeekDay = "Wednesday";
        break;
    case 4:
        switchWeekDay = "Thursday";
        break;
    case 5:
        switchWeekDay = "Friday";
        break;
    case 6:
        switchWeekDay = "Saturday";
}
document.getElementById("switch").innerHTML = "Today is " + switchWeekDay;

let tex;
switch (new Date().getDay()) {
    case 6:
        tex = "Today is Saturday";
        break;
    case 0:
        tex = "Today is Sunday";
        break;
    default:
        tex = "Looking forward to the Weekend";
}
document.getElementById("default").innerHTML = tex;

function enoughManaCheck() {
    let answer;
    let mana = +document.getElementById("cast").option;
    switch (mana) {
        case 250:
            answer = "You have enough mana for casting only wind magic school spells";
            break;
        case 500:
            answer = "You have enough mana for casting water and wind spells";
            break;
        case 750:
            answer = "You have enough mana for casting water, air and earth spells";
            break;
        case 1000:
            answer = "You have enough mana for casting even fire spells";
            break;
        default:
            answer = "You cant cast any spell." + " " + "You got not enough mana";
    }
    document.getElementById("manaCheck").innerHTML = answer;
}

let numb = "0";
switch (numb) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found" + " " + "That's why mana check never worked";
}
document.getElementById("explaining").innerHTML =
    "Switch cases use strict comparison (===)." + "<br>" +
    "The values must be of the same type to match." + "<br>" +
    "A strict comparison can only be true if the operands are of the same type." + "<br>" +
    text;

const monthsForLoop = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let loopText = "";
for (let i = 0; i < monthsForLoop.length; i++) {
    loopText += monthsForLoop[i] + "<br>";
}
document.getElementById("loop").innerHTML = loopText;

{
    var i = 5;
    document.getElementById("varBeforeLoopI").innerHTML = "i before the loop is  " + i;
    let varInLoopText = "";
    for (var i = 0; i < 10; i++) {
        varInLoopText += i[i] + "<br>";
    }
    document.getElementById("varInLoop").innerHTML = varInLoopText;
    document.getElementById("varInLoopI").innerHTML = i + " var redeclares i after the loop so don't use it without a reason";
}
{
    let i = 5;
    document.getElementById("letBeforeLoopI").innerHTML = "i before the loop is  " + i;
    let letInLoopText = "";
    for (let i = 0; i < 10; i++) {
        letInLoopText += i[i] + "<br>";
    }
    document.getElementById("letInLoop").innerHTML = letInLoopText;
    document.getElementById("letInLoopI").innerHTML = i + " let doesn't redeclare i after the loop";
}

const forInPerson = {firstNam: "Elindi", secName: "Redfur", age: 22 + "yo."};
let forInText = "";
for (let x in forInPerson) {
    forInText += forInPerson[x] + " ";
}
document.getElementById("ForInLoop").innerHTML = forInText;

const forEachNumbers = [99, 14, 3, 55, 70];
let forEachText = "";
forEachNumbers.forEach(valuePlusBr);

function valuePlusBr(value) {
    forEachText += value + "<br>";
}

document.getElementById("ForEachFunction").innerHTML = forEachText;

const characters = ["Warwond", "Inkaani", "Jenireth", "Samuel"];
let forOfText = "";
for (let x of characters) {
    forOfText += x + " ";
}
document.getElementById("forOfLoop").innerHTML = forOfText;

let alienLanguage = "Ksaviirean";
let forOfStringText = "";
for (let x of alienLanguage) {
    forOfStringText += x + " ";
}
document.getElementById("forOfStringLoop").innerHTML = forOfStringText;

{
    let WhileText = "";
    let i = 0;
    while (i <= 7) {
        WhileText += "<br>The Number is " + i;
        i++;
    }
    document.getElementById("WhileLoop").innerHTML = WhileText;
}
{
    let DoWhileText = "";
    let i = 11;
    let expText;
    do {
        DoWhileText += "<br>The Number is " + i;
        i++;
    }
    while (i < 10);
    if (i > 12) {
        expText = DoWhileText + " It worked more than it should";
    } else {
        expText = DoWhileText + " The loop will work at least once even if the condition is false";
    }
    document.getElementById("DoWhileLoop").innerHTML = expText;
}
{
    let LoopBreakText = "";
    let explaining;
    for (let i = 0; i < 15; i++) {
        if (i === 5) {
            break;
        }
        LoopBreakText += "The number is " + i + "<br>";
        if (i !== 5) {
            explaining = LoopBreakText + "<br>" + "Break canceled the loop from the fifth position"
        } else {
            explaining = "didn't work";
        }
    }
    document.getElementById("LoopBreak").innerHTML = explaining;
}
{
    let LoopContinueText = "";
    for (let i = 0; i <= 10; i++) {
        if (i === 3) {
            continue;
        }
        if (i === 5) {
            continue;
        }
        if (i === 7) {
            continue;
        }
        if (i === 9) {
            continue;
        }
        LoopContinueText += "The number is " + i + "<br>";
    }
    document.getElementById("LoopContinue").innerHTML = LoopContinueText;
}
{
    const cars = ["Opel", "Mazda", "Dodge", "Kia", "Suzuki"];
    let carsText = "";
    list: {
        carsText += cars[0] + "<br>";
        carsText += cars[1] + "<br>";
        carsText += cars[2] + "<br>";
        break list;
        carsText += cars[3] + "<br>";
        carsText += cars[4] + "<br>";
    }
    document.getElementById("breakList").innerHTML = carsText;
}

{
    const letters = new Set(["a", "b", "c"]);
    document.getElementById("setFromArray").innerHTML = "Set created from an array shows it's size as a number: " + letters.size;
    document.getElementById("setValues").innerHTML = "Set values returns: " + letters.values();
}

{
    const letters = new Set();
    letters.add("a");
    letters.add("b");
    letters.add("c");
    document.getElementById("setAddValues").innerHTML = "Originally valueless set with added values: " + letters.size;
}

{
    const letters = new Set();
    const a = "ava";
    const b = "b";
    const c = "3";
    letters.add(a);
    letters.add(b);
    letters.add(c);
    document.getElementById("setAddVariablesAndValues").innerHTML = "Originally empty set with added variables and values: " + letters.size;

    let forEachText = "";
    letters.forEach(function (value) {
        forEachText += value + "<br>";
    })

    let iteratingValuesText = "";
    for (const x of letters.values()) {
        iteratingValuesText += x + "<br>";
    }
    document.getElementById("setForEachAndForOf").innerHTML =
        "Using forEach method:" + "<br>" + forEachText + "<br>" + "or" +
        "<br>" + "<br>" + "forOf method:" + "<br>" + iteratingValuesText;

}

{
    const letters = new Set(["a", "b", "c"]);
    letters.add("d");
    letters.add("e");
    letters.add("e");
    let explaining;
    if (letters.size !== 6) {
        explaining = "If you add equal elements, only the first will be saved: " + letters.size;
    } else {
        explaining = "didn't work";
    }
    document.getElementById("setAddMoreValues").innerHTML = explaining;
}

{
    const letters = new Set(["a", "b", "c"]);
    const iterator = letters.entries();
    let text = "";
    for (const entry of iterator) {
        text += entry + "<br>";
    }
    document.getElementById("setEntries").innerHTML = text;
}

const fruitsAndPrices = new Map([
    ["Dragon Fruit", 3.45],
    ["Coconut", 4.09],
    ["Tangerine", 1.67],
    ["Lime", 1.12]
]);
let priceListText = "";
for (const x of fruitsAndPrices) {
    priceListText += x + "<br>";
}
document.getElementById("iterateOverMap").innerHTML = priceListText;

fruitsAndPrices.set("Qiwi", 3.55);
fruitsAndPrices.set("Avocado", 2.70);
fruitsAndPrices.set("Dragon Fruit", 2.99);
fruitsAndPrices.set("Coconut", 4.15);
let newPriceListText = "";
for (const x of fruitsAndPrices) {
    newPriceListText += x + "<br>";
}
document.getElementById("changedMapValues").innerHTML =
    newPriceListText;
document.getElementById("getMapValue").innerHTML =
    "The final price of a lime is: " + fruitsAndPrices.get("Lime") + "$";

fruitsAndPrices.delete("Avocado");
document.getElementById("mapDeletedValue").innerHTML = "Avocado's been deleted from the map and now it's size is " +
    fruitsAndPrices.size + "<br>" + "Does the list have avocado in it? " + fruitsAndPrices.has("Avocado");

let fruitsAndPricesEntriesText = "";
for (const x of fruitsAndPrices.entries()) {
    fruitsAndPricesEntriesText += x + "<br>";
}
document.getElementById("mapEntries").innerHTML = fruitsAndPricesEntriesText;

let completePriceList = "";
fruitsAndPrices.forEach(function (value, key) {
    completePriceList += key + " - " + value + "$" + "<br>";
})
document.getElementById("mapForEach").innerHTML = completePriceList;

{
    document.getElementById("typeOf").innerHTML =
        "'Elindi' is " + typeof "Elindi" + "<br>" +
        "3.14 is " + typeof 3.14 + "<br>" +
        "NaN is " + typeof NaN + "<br>" +
        "false is " + typeof false + "<br>" +
        "[1, 2, 3, 4] is " + typeof [1, 2, 3, 4] + "<br>" +
        "{name:'Elindi', age:22} is " + typeof {name: 'Elindi', age: 22} + "<br>" +
        "new Date() is " + typeof new Date() + "<br>" +
        "function () {} is " + typeof function () {
        } + "<br>" +
        "myCar is " + typeof myCar + "<br>" +
        "null is " + typeof null;
}

const cars = ["Opel", "Mazda", "Dodge", "Kia", "Suzuki"];

function isArray(cars) {
    return cars.constructor === Array;
}

document.getElementById("isArray").innerHTML = "Is 'cars' an array? " + isArray(cars);

document.getElementById("undefinedAndNullComparison").innerHTML =
    "a type of undefined is " + typeof undefined + "<br>" +
    "a type of null is an " + typeof null + "<br>" +
    "null === undefined - " + (null === undefined) + "<br>" +
    "null == undefined - " + (null == undefined);

document.getElementById("instanceOf").innerHTML =
    "Is 'cars' an instance of an Array - " + (cars instanceof Array) + "<br>" +
    "Is 'cars' an instance of an Object - " + (cars instanceof Object) + "<br>" +
    "Is 'cars' an instance of a String " + (cars instanceof String) + "<br>" +
    "Is 'cars' an instance of a Number - " + (cars instanceof Number);

document.getElementById("convertingToNumber").innerHTML =
    Number("3.14") + "<br>" +
    Number(Math.PI) + "<br>" +
    Number("    ") + "<br>" +
    Number("") + "<br>" +
    Number("99 88") + "<br>" +
    Number("John") + "<br>";

{
    let y = "44";
    let x = +y;
    document.getElementById("stringToNumberPlusOperator").innerHTML =
        "y is a " + typeof y + "<br>" +
        "y became a " + typeof x;
}

{
    let x = 123;
    document.getElementById("convertingToString").innerHTML =
        String(x) + "<br>" +
        String(123) + "<br>" +
        String(100 + 23);
}

document.getElementById("convertingAuto").innerHTML =
    (5 + null) + "<br>" +
    ("5" + null) + "<br>" +
    ("5" + 2) + "<br>" +
    ("5" - 2) + "<br>" +
    ("5" * "2") + "<br>" +
    ("5" / "2") + "<br>"

let srchText = "Another Elindi mention"
let srch = srchText.search("elindi");
let caseSensitiveSrch = srchText.search(/elindi/i);
document.getElementById("search").innerHTML =
    srch.toString() +
    " Couldn't find the position cause the search is case " +
    "sensitive and 'elindi' has never matched with 'Elindi'";
document.getElementById("caseSensitiveSearch").innerHTML =
    "Elindi's name is found from the " +
    caseSensitiveSrch.toString() +
    "th sing of the string";

let replace = srchText.replace("elindi", "jenireth");
let caseSensitiveSReplace = srchText.replace(/elindi/i, "Jenireth");
document.getElementById("replace").innerHTML =
    "can't replace 'Elindi' with" +
    " 'Jenireth' cause it's case sensitive " +
    "so the result is " + "\"" + replace + "\"";
document.getElementById("caseSensitiveReplace").innerHTML = caseSensitiveSReplace;

{
    let text = "123456789";
    document.getElementById("globalRactSearch").innerHTML = text.match(/[3-7]/g).toString();
}
{
    let text = "re, green, red, green, gren, gr, blue, yellow";
    document.getElementById("globalAlternativesSearch").innerHTML = "Find any alternatives: " + text.match(/(red|green|yellow)/g);
}

document.getElementById("SearchAndReplaceModifiers").innerHTML =
    "Modifiers can be used to perform case-insensitive more global searches: " + "<br>" +
    "i	Perform case-insensitive matching" + "<br>" +
    "g	Perform a global match (find all)" + "<br>" +
    "m	Perform multiline matching" + "<br>" +
    "d	Perform start and end matching" + "<br>" +
    "\d	Find a digit" + "<br>" +
    "\s	Find a whitespace character" + "<br>" +
    "\b	Find a match at the beginning of a word like this: " +
    "\bWORD, or at the end of a word like this: WORD\b" + "<br>" +
    "n+	Matches any string that contains at least one n" + "<br>" +
    "n*	Matches any string that contains zero or more occurrences of n" + "<br>" +
    "n?	Matches any string that contains zero or one occurrences of n" + "<br>";

document.getElementById("testSearch").innerHTML = /bird/.test("A-well now, everybody's heard about the bird").toString();

const obj = /bird/.exec("A-well now, everybody's heard about the bird");
document.getElementById("execSearch").innerHTML = "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;

try {
    adddlert("Sup!");
} catch (err) {
    document.getElementById("catchError").innerHTML = err.message;
}

try {
    throw "Damn, an error!";
} catch (throwError) {
    document.getElementById("customError").innerHTML = throwError.message;
}

function CustomError() {
    const errorMessage = document.getElementById("testText");
    errorMessage.innerHTML = "";
    let x = document.getElementById("customErrorWithInput").value;
    try {
        if (x.trim() === "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x <= 52) throw "too low";
        if (x >= 54) throw "too high";
        if (x === 53) {
            document.getElementById("testText").innerHTML = "You did it!";
        }
    } catch (err) {
        errorMessage.innerHTML = "Input is " + err;
    }
}

function finallyError() {
    const finallyErrorMessage = document.getElementById("finallyText");
    finallyErrorMessage.innerHTML = "";
    let x = document.getElementById("predefinedInput").value;
    try {
        if (x.trim() === "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x >= 6) throw "is too high";
        if (x <= 4) throw "is too low";
    } catch (err) {
        finallyErrorMessage.innerHTML = "Input is " + err;
    } finally {
        document.getElementById("predefinedInput").value = 7;
    }
    if (x === 7) {
        document.getElementById("alwaysWas").innerHTML = "Yes, it was always 7";
    }
}

{
    const person = {
        firstName: "Elindi",
        lastName: "Owl",
        id: 5099,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById("thisInMethod").innerHTML = person.fullName() +
        "<br>" + "i.e. this.firstName is the firstName property of this (the person object)";
}

document.getElementById("thisAlone").innerHTML = this;

function returningThis() {
    return this;
}

document.getElementById("thisDefaultBindingInFunction").innerHTML = returningThis().toString();

{
    const person = {
        firstName: "Elindi",
        lastName: "Owl",
        id: 5099,
        object: function () {
            return this;
        }
    };
    document.getElementById("thisToConstNameObject").innerHTML = person.object().toString();
}

{
    const case1 = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    const case2 = {
        firstName: "Elindi",
        lastName: "Owl",
    }
    document.getElementById("thisCall").innerHTML = case1.fullName.call(case2) +
        "<br>" + "calls case1.fullName with case2 as an argument, this refers to case2, even if fullName is a method of case1";
}

{
    const person = {
        firstName: "Elindi",
        lastName: "Owl",
        id: 5099,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    const member = {
        firstName: "Warwond",
        lastName: "Blackfur",
    }
    let fullName = person.fullName.bind(member);
    document.getElementById("thisBind").innerHTML = fullName() +
        "<br>" + "The member object borrows the fullname method from person";
}

let multiplication = (a, b) => a * b;
document.getElementById("arrowFunction").innerHTML = multiplication(8, 4.7).toFixed(3);

arrowFuncText = () => {
    return "I'm arrow";
}
document.getElementById("anotherArrowFunction").innerHTML = arrowFuncText();

oneStatementArrowFunctionText = () => "Speak";
document.getElementById("oneStatementArrowFunction").innerHTML = oneStatementArrowFunctionText();

arrowFunctionWithParameterText = (val) => "Plus what? " + val;
document.getElementById("oneStatementArrowFunction").innerHTML = arrowFunctionWithParameterText("Plus parameter");

{
    hello = function () {
        document.getElementById("thisAndEventListener").innerHTML = this.toString();
    }
    window.addEventListener("load", hello);
    document.getElementById("button").addEventListener("click", hello);
}

{
    hello = () => {
        document.getElementById("thisAndEventListenerArrowFunction").innerHTML += this.toString();
    }
    window.addEventListener("load", hello);
    document.getElementById("buttn").addEventListener("click", hello);
}

class yorkUniversityNames {
    constructor(name, studyArea) {
        this.name = name;
        this.studyArea = studyArea;
    }
}

const firstUniversity = new yorkUniversityNames("Inkantin", "Steam physics and engine development");
const secondUniversity = new yorkUniversityNames("Scalio", "Steel fabric chemistry and manufacturing");

document.getElementById("classes").innerHTML =
    firstUniversity.name + " - " + firstUniversity.studyArea + "<br>" +
    secondUniversity.name + " - " + secondUniversity.studyArea;

{
    class dawgCars {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }

        age() {
            const date = new Date();
            return date.getFullYear() - this.year;
        }
    }

    const carAge = new dawgCars("Dodge", 2009);
    document.getElementById("classMethod").innerHTML = "That " + carAge.name + " is " + carAge.age() + " years old";
}

{
    class diffCars {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }

        age(x) {
            return x - this.year;
        }
    }

    const date = new Date();
    let year = date.getFullYear();
    const carAge = new diffCars("BMW", 2015);
    document.getElementById("classMethodSendParameter").innerHTML = "That one " + carAge.name + " is " + carAge.age(year) + " years old";
}

let JSONText = '{"characters":[' +
    '{"firstName":"Warwond", "lastName":"Blackfur"},' +
    '{"firstName":"Samuel", "lastName":""},' +
    '{"firstName":"Jenireth", "lastName":"Ishar"}]}';
const parsingJSON = JSON.parse(JSONText);
let fromJSON = "";
for (let i = 0; i < parsingJSON.characters.length; i++) {
    fromJSON += parsingJSON.characters[i].firstName + " " + parsingJSON.characters[i].lastName + "<br>";
}
document.getElementById("objectFromJSONString").innerHTML = fromJSON;


{
    function Display(item) {
        document.getElementById("callBackFunction").innerHTML = item;
    }

    function Calculator(numberOne, numberTwo, Callback) {
        let summation = numberOne + numberTwo;
        Callback(summation);
    }

    Calculator(5, 6, Display);

}

{
    const numbers = [4, 4, -9, -19, 7, 8, 0, -0];
    const afterNumbers = removeNeg(numbers, (x) => x >= 0);

    function removeNeg(_numbers, callback) {
        const array = [];
        for (const a of _numbers) {
            if (callback(a)) {
                array.push(a);
            }
        }
        return array;
    }

    document.getElementById("callBackFunctionWithArrowFunction").innerHTML = afterNumbers;
}

{
    setInterval(dateFunction, 1000);

    function dateFunction() {
        let date = new Date();
        document.getElementById("setIntervalWithCallbackInFunction").innerHTML =
            "Interval displays the function every second, that makes a clock illusion " + "<br>" +
            date.getHours() + ":" +
            date.getMinutes() + ":" +
            date.getSeconds();
    }
}

{
    function displayer(item) {
        document.getElementById("thenMethodWithPromise").innerHTML = item;
    }

    let promise = new Promise(function (resolve, reject) {
        let x = 0;
        if (x === 0) {
            resolve("Pass");
        } else {
            reject("Error");
        }
    });
    promise.then(
        function (value) {
            displayer(value);
        },
        function (error) {
            displayer(error);
        }
    );
}

{
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
                resolve("The time to show up");
            },
            3000);
    });
    promise.then(function (value) {
        document.getElementById("timeOutExampleWithPromiseAndThenMethod").innerHTML = value;
    });
}

{
    console.log('Requesting data...')
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Packing data...')
            const dataFromTheServer = {
                server: 'forest',
                port: 19834,
                status: 'in progress'
            };
            resolve(dataFromTheServer)
        }, 2000);
    });
    promise.then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.modified = true
                resolve(data)
            }, 4000);
        });
    })
        .then(clientData => {
            clientData.fromPromise = true
            return clientData
        })
        .then(data => {
            console.log('Data received', data)
        });
    promise.catch(error => console.error('Error: ', error));

    const sleep = ms => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), ms)
        })
    };
    sleep(1000).then(() => console.log('After 1 sec'));
    sleep(2000).then(() => console.log('After 2 sec'));
    sleep(3000).then(() => console.log('After 3 sec'));
    sleep(10000).then(() => console.log('After 10 sec'));

    Promise.all([sleep(11000), sleep(12000)]).then(() => {
        console.log('Over')
    });

    Promise.race([sleep(11000), sleep(12000)]).then(() => {
        console.log('Race promise')
    });
}

{
    function display(item) {
        document.getElementById("waitingForAFilePromise").innerHTML = item;
    }

    let promise = new Promise(function (resolve, reject) {
        let required = new XMLHttpRequest();
        required.open('GET', "JavaScriptTraining/ElindiPic.html");
        required.onload = function () {
            if (required.status === 200) {
                resolve(required.response);
            } else {
                reject("File not found");
            }
        };
        required.send();
    });
    promise.then(
        function (value) {
            display(value);
        },
        function (error) {
            display(error);
        }
    );
}

{
    function displayHi(item) {
        document.getElementById("asyncForPromise").innerHTML = item;
    }

    async function returnHi() {
        return "Hey";
    }

    returnHi().then(
        function (value) {
            displayHi(value);
        },
        function (error) {
            displayHi(error);
        }
    );
}

{
    async function displayQuestion() {
        let promise = new Promise(function (resolve, reject) {
            resolve("Who are you? I know you?");
        });
        document.getElementById("asyncAwaitForPromise").innerHTML = await promise;
    }

    displayQuestion();
}

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

/*function setCookie(cookieName, cookieValue, expireDays) {
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
});*/

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
    switch (error.code) {
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


/*getText("/JavaScriptTraining/forFetch.txt");

async function getText(file) {
    let forFetchObject = await fetch(file);
    document.getElementById("fetchAPI").innerHTML = await forFetchObject.text();
}

let file = "/JavaScriptTraining/forFetch.txt";
fetch(file)
    .then(x => x.text())
    .then(y => document.getElementById("arrowFuncFetchAPI").innerHTML = y);*/


function loadDocumentWithAJAX() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onload = function () {
        document.getElementById("AJAXRequest").innerHTML =
            this.responseText;
    }
    httpRequest.open("GET", "JavaScriptTraining/forAJAX_info.txt");
    httpRequest.send();
}


/*
loadDocumentWithAJAXMultiple("JavaScriptTraining/forAJAX_Multiple_1.txt", showFunctionOne);
loadDocumentWithAJAXMultiple("JavaScriptTraining/forAJAX_Multiple_2.txt", showFunctionTwo);

function loadDocumentWithAJAXMultiple(url, functionName) {
    const request = new XMLHttpRequest();
    request.onload = function () {functionName(this);}
    request.open("GET", url);
    request.send();
}

function showFunctionOne(request) {
    document.getElementById("AJAXRequestMultiple1").innerHTML =
        request.responseText;
}
function showFunctionTwo(request) {
    document.getElementById("AJAXRequestMultiple2").innerHTML =
        request.responseText;
}*/

function loadDocumentWithAJAXOnreadystatechange() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("AJAXRequestOnreadystatechange").innerHTML =
                this.responseText;
        }
    };
    httpRequest.open("GET", "JavaScriptTraining/ForAJAX_onreadystatechange.txt");
    httpRequest.send();
}

function AJAXPostMethodToGetAName() {
    const request = new XMLHttpRequest();
    request.onload = function () {
        document.getElementById("AJAXRequestPostMethod").innerHTML = this.responseText;
    }
    request.open("POST", "JavaScriptTraining/ForAJAX_PostMethod.txt");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("fname=Elindi&lname=Owl");
}

const getLastModifiedHeader = new XMLHttpRequest();
getLastModifiedHeader.onload = function () {
    document.getElementById("AJAXResponseHeader").innerHTML =
        this.getResponseHeader("Last-Modified");
};
getLastModifiedHeader.open("GET", "JavaScriptTraining/forAJAX_info.txt");
getLastModifiedHeader.send();


{
    document.getElementById("hideAndShowCDInfo").style.display = "none";

    function loadCDCatalog() {
        const CDXMLRequest = new XMLHttpRequest();
        let cd;
        CDXMLRequest.onload = function () {
            const xmlDoc = CDXMLRequest.responseXML;
            cd = xmlDoc.getElementsByTagName("CD");
            CDCatalog();
        }
        CDXMLRequest.open("GET", "JavaScriptTraining/cd_catalog.xml");
        CDXMLRequest.send();

        function CDCatalog() {
            let table = "<tr><th>Artist</th><th>Title</th></tr>";
            for (let i = 0; i < cd.length; i++) {
                table += "<tr onclick='displayCD(" + i + ")'><td>";
                table += cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
                table += "</td><td>";
                table += cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
                table += "</td></tr>";
            }
            document.getElementById("cdCatalog").innerHTML = table;
        }
            document.getElementById("hideAndShowCDInfo").style.display = "block";
    }
}

{
    let i = 0;
    let len;
    let cd;

    const request = new XMLHttpRequest();
    request.onload = function () {
        const xmlDoc = request.responseXML;
        cd = xmlDoc.getElementsByTagName("CD");
        len = cd.length;
        displayCD(i);
    }
    request.open("GET", "JavaScriptTraining/cd_catalog.xml");
    request.send();

    function displayCD(i) {
        document.getElementById("showCD").innerHTML =
            "Artist: " +
            cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "<br>Title: " +
            cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "<br>Year: " +
            cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    }

    function next() {
        if (i < len-1) {
            i++;
            displayCD(i);
        }
    }

    function previous() {
        if (i > 0) {
            i--;
            display(i);
        }
    }
}


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



const cGridCanvas = document.getElementById("cGridCanvas");
const dots = cGridCanvas.getContext("2d");
cGridCanvas.height = cGridCanvas.height;
dots.transform(1, 0, 0, -1, 0, cGridCanvas.height);

const xGridArray = [10,30,20,40,50,70,95,115,120,140, 65, 85, 150];
const yGridArray = [2,2,8,8,14,14,11,11,3,3,6,6, 15];

dots.fillStyle = "red";
for (let i = 0; i < xGridArray.length-1; i++) {
    let x = xGridArray[i]*300/150;
    let y = yGridArray[i]*300/15;
    dots.beginPath();
    dots.ellipse(x, y, 7, 7, 0, 0, Math.PI * 2);
    dots.fill();
}


const lineGraphCanvas = document.getElementById("lineGraphCanvas");
const line = lineGraphCanvas.getContext("2d");
line.fillStyle = "#ffea00";
lineGraphCanvas.height = lineGraphCanvas.width;
line.transform(1, 0, 0, -1, 0, lineGraphCanvas.height);

let xMax = lineGraphCanvas.height;
let slope = 1;
let intercept = 0;

line.moveTo(0, intercept);
line.lineTo(xMax, f(xMax));
line.strokeStyle = "green";
line.stroke();

function f(x) {
    return x * slope + intercept;
}

{
    const canvas = document.getElementById("canvasGraphTogether");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    canvas.height = canvas.width;
    ctx.transform(1, 0, 0, -1, 0, canvas.height)

    let xMax = canvas.height;
    let yMax = canvas.width;
    let slope = 1;
    let intercept = 0;

    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Plot Scatter
    ctx.fillStyle = "pink";
    for (let i = 0; i < xArray.length-1; i++) {
        let x = xArray[i]*xMax/150;
        let y = yArray[i]*yMax/15;
        ctx.beginPath();
        ctx.ellipse(x, y, 6, 6, 0, 0, Math.PI * 2);
        ctx.fill();
    }

// Plot Line
    ctx.moveTo(0, intercept);
    ctx.lineTo(xMax, f2(xMax));
    ctx.strokeStyle = "yellow";
    ctx.stroke();

// Line Function<br>
    function f2(x) {
        return x * slope + intercept;
    }
}


const elemPowersArrayforColumn = ["Fire","Air","Earth","Water","Presence(Chaos)"];
const elemPowerStatsArrayforColumn = [45,23,30,20,60];

const showDataColumn = [{
    x:elemPowersArrayforColumn,
    y:elemPowerStatsArrayforColumn,
    type:"bar",
    orientation:"v",
    marker: {color:"rgba(150,0,27,0.6)"}
}];

const elemLayoutColumn = {title:"World's level of natural powers"};
Plotly.newPlot("columnElemPowersPlotWithPlotly", showDataColumn, elemLayoutColumn);



const elemPowersArrayforRow = [45,23,30,20,60];
const elemPowerStatsArrayforRow = ["Fire ","Air ","Earth ","Water ","Chaos "];

const showDataRow = [{
    x:elemPowersArrayforRow,
    y:elemPowerStatsArrayforRow,
    type:"bar",
    orientation:"h",
    marker: {color:"rgba(0,128,150,0.6)"}
}];

const elemLayoutRow = {title:"World's level of natural powers"};
Plotly.newPlot("rowElemPowersPlotWithPlotly", showDataRow, elemLayoutRow);



const elemPowersArrayforPie = ["Fire","Air","Earth","Water","Presence(Chaos)"];
const elemPowerStatsArrayforPie = [45,23,30,20,60];

const elemLayoutPie = {title:"World's level of natural powers"};

const showDataPie = [{labels:elemPowersArrayforPie, values:elemPowerStatsArrayforPie, type:"pie"}];
Plotly.newPlot("pieElemPowersPlotWithPlotly", showDataPie, elemLayoutPie);



const elemPowersArrayforDonut = ["Fire","Air","Earth","Water","Presence(Chaos)"];
const elemPowerStatsArrayforDonut = [45,23,30,20,60];

const elemLayoutDonut = {title:"World's level of natural powers"};

const showDataDonut = [{labels:elemPowersArrayforDonut, values:elemPowerStatsArrayforDonut, hole:.3, type:"pie"}];
Plotly.newPlot("donutElemPowersPlotWithPlotly", showDataDonut, elemLayoutDonut);



let equations = "Math.sin(x)";

const xEqValues = [];
const yEqValues = [];
for (let x = 0; x <= 10; x += 0.1) {
    xEqValues.push(x);
    yEqValues.push(eval(equations));
}

const eqData = [{x:xEqValues, y:yEqValues, mode:"lines"}];
const eqlayout = {title: "y = " + equations};
Plotly.newPlot("equationsPlotWithPlotly", eqData, eqlayout);



{
    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
    const data = [{
        x: xArray,
        y: yArray,
        mode:"lines"
    }];

// Define Layout
    const layout = {
        xaxis: {range: [40, 160], title: "Square Meters"},
        yaxis: {range: [5, 16], title: "Price in Millions"},
        title: "House Prices vs. Size"
    };

// Display using Plotly
    Plotly.newPlot("linedGraphPlotWithPlotly", data, layout);
}