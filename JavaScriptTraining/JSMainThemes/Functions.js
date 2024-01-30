
{
    const x = function (a, b) {
        return a * b + " Argument length = " + arguments.length
    }
    document.getElementById("simplePostVariableFunction").innerHTML = x(7, 5);
}

{
    function func(a, b) {
        return a * b;
    }

    let x = func(7, 5);
    document.getElementById("simpleVariableFunction").innerHTML = x;
}

{
    (function () {
        document.getElementById("selfInvokedFunction").innerHTML = "I'm invoked by my own will!";
    })();
}

{
    function toDefault(a, b) {
        if (b === undefined) {
            b = 18;
        }
        return a + b;
    }
    document.getElementById("settingDefaultInFunction").innerHTML = toDefault(77);
}

{
    function defaultValue(x, y = 39) {
        return x + y;
    }
    document.getElementById("settingDefaultValuetInFunction").innerHTML = defaultValue(53) + " If y is not passed or undefined, then y = 39";
}

{
    function summation(...arguments) {
        let summ = 0;
        for (let x of arguments) summ += x;
        return summ;
    }
    document.getElementById("restParameterInFunction").innerHTML = summation(13,53,63,88,1,91);
}

{
    function summationAll() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    document.getElementById("restParameterWithForInFunction").innerHTML = summationAll(1, 123, 500, 115, 44, 88);
}

{
    function findMax() {
        let maxNumber = -Infinity;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > maxNumber) {
                maxNumber = arguments[i];
            }
        }
        return maxNumber;
    }
    document.getElementById("findTheLargestFunction").innerHTML = findMax(20, 13, 100) + " actually same as " +
        Math.max(20, 13, 100) + "<br>" + "Or in array " + Math.max.apply(Math, [20, 13, 100]);

}

{
    const guy = {
        fullName: function (country) {
            return this.firstName + " " + this.lastName + " " + " from " + country;
        }
    }
    const person1 = {
        firstName:"Layota",
        lastName: "Basaraba"
    }
    const person2 = {
        firstName:"Vlad",
        lastName: "Drakula"
    }
    document.getElementById("callFunction").innerHTML = guy.fullName.call(person1, "Valahia") + " vs " + guy.fullName.call(person2, "Sigishoara");

    const text = {
        text: "\"Vampire hunting age\"",
        display: function () {
            let x = document.getElementById("bindWithThisInFunction");
            x.innerHTML = this.text;
        }
    }
    let display =  text.display.bind(text);
    setTimeout(display, 3000);
    document.getElementById("bindExplaining").innerHTML = "The bind() method is used to bind 'this' in text.display to text";
}

{
    const add = (function () {
        let counter = 0;
        return function () {counter += 1; return counter;}
    })();
    function Counting(){
        document.getElementById("counterDilemma").innerHTML = add();
    }
}