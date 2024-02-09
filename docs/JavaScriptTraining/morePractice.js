{
    let x = "";
    const objct = {
        name: "Warwond",
        age: 37,
        magic: [
            {spellName: "Og'Uda", spellEffect: ["burning", "flame wave impact"]},
            {spellName: "Wet'Uda", spellEffect: ["wind shockwave",]},
            {spellName: "Skal'Uda", spellEffect: ["thrusting damage", "stabbing power impact"]}
        ]
    }
    const toArray = Object.values(objct);
    let toStringWithJSON = JSON.stringify(objct);

    for (let i in objct.magic) {
        x += "<h2>" + objct.magic[i].spellName + "</h2>";
        for (let j in objct.magic[i].spellEffect) {
            x += objct.magic[i].spellEffect[j] + "<br>";
        }
    }
    document.getElementById("nestedObjectsAndArraysMethod").innerHTML = x;
    document.getElementById("objectToArray").innerHTML = toArray;
    document.getElementById("objectToStringWithJSON").innerHTML = toStringWithJSON;
}

{
    const event = {
        name: "Michael's presence",
        today: new Date()
    };
    const showAge = {
        mName: "Michael",
        age: function () {
            return showAge.mName + "'s" + " " + 22
        }
    }
    const charNames = [showAge.mName + " Myers", "Dr Loomis", "Laurie Strode"];
    document.getElementById("showFunction").innerHTML = showAge.age();
    showAge.age = showAge.age.toString();
    document.getElementById("dateToStringWithJSON").innerHTML = JSON.stringify(event);
    document.getElementById("functionToStringWithJSON").innerHTML = JSON.stringify(showAge);
    document.getElementById("arrayToStringWithJSON").innerHTML = JSON.stringify(charNames);
}

{
    const setAndGet = {
        currency: "Mityaki",
        region: "undefined",
        get money() {
            return setAndGet.currency.toUpperCase();
        },
        set kingdomsRegion(value) {
            setAndGet.region = value.toLowerCase();
        }
    };
    setAndGet.kingdomsRegion = "Utonheld";
    document.getElementById("getKeyword").innerHTML = setAndGet.money;
    document.getElementById("setKeyword").innerHTML = setAndGet.region;
}

{
    const math = {counter: 0};
    Object.defineProperty(math, "reset", {
        get: function () {
            math.counter = 1;
        }
    });
    Object.defineProperty(math, "increment", {
        get: function () {
            math.counter++;
        }
    });
    Object.defineProperty(math, "decrement", {
        get: function () {
            math.counter--;
        }
    });
    Object.defineProperty(math, "add", {
        set: function (value) {
            math.counter += value;
        }
    });
    Object.defineProperty(math, "subtract", {
        set: function (value) {
            math.counter -= value;
        }
    });
    math.reset;
    math.add = 7;
    math.subtract = 3;
    math.increment;
    math.decrement;
    document.getElementById("objectDefineProperty").innerHTML = math.counter;
}

{
    function Person(first, last, age, eyes) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyes;
    }

    const me = new Person("Elindi", "Woods", 22, "gray-green");
    const secondMe = new Person("Warwond", "Blackfur", 37, "sky-blue");
    me.language = "I speak English btw.";
    me.myText = function () {
        return "I'm " + me.firstName + " " + me.lastName + " and I'm " +
            me.age + "yo. I got " + me.eyeColor + " eyes. "
    };
    secondMe.hisText = function () {
        return "He is " + secondMe.firstName + " " + secondMe.lastName + " and he's " +
            secondMe.age + "yo. He got " + secondMe.eyeColor + " eyes. "
    };
    document.getElementById("objectConstructor").innerHTML = me.myText() + " " + me.language + "<br>" + secondMe.hisText();
}

{
    function Person(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.changeName = function (name) {
            this.lastName = name;
        }
    }

// Create a Person object
    const she = new Person("Sally", "Doe", 48, "green");

// Change last name
    she.changeName("Rally");

// Add new methods with a prototype
    Person.prototype.nationality = "Australian"
    Person.prototype.showWithNationality = function () {
        return this.firstName + " " + this.lastName + " is " + this.nationality;
    }

// Display last name
    document.getElementById("changeNameMethod").innerHTML =
        "Her last name is " + she.lastName + "<br>" +
        she.showWithNationality();
}

{
    let x1 = "";      // string
    let x2 = 0;       // number
    let x3 = false;   // boolean
    const x4 = {};    // Object object
    const x5 = [];    // Array object
    const x6 = /()/;  // RegExp object
    const x7 = function () {
    };  // function

// Display the type of all
    document.getElementById("primitiveValuesInsteadOfNewValue").innerHTML =
        "x1: " + typeof x1 + "<br>" +
        "x2: " + typeof x2 + "<br>" +
        "x3: " + typeof x3 + "<br>" +
        "x4: " + typeof x4 + "<br>" +
        "x5: " + typeof x5 + "<br>" +
        "x6: " + typeof x6 + "<br>" +
        "x7: " + typeof x7 + "<br>";
}

{
    function iterableNumber() {
        let n = 0;
        return {
            next: function () {
                n += 20;
                return {value: n, done: false};
            }
        };
    }

    const n = iterableNumber();
    n.next();
    n.next();
    n.next();
    n.next();
    document.getElementById("iterableNumberWithNext").innerHTML = n.next().value;
}

{
    iterableNumberforFor = {};
    iterableNumberforFor[Symbol.iterator] = function () {
        let n = 0;
        done = false;
        return {
            next() {
                n += 20;
                if (n === 100) {
                    done = true
                }
                return {value: n, done: done};
            }
        };
    }
    let text = "";
    for (const number of iterableNumberforFor) {
        text += number + "<br>";
    }
    document.getElementById("iterableIteratedWithFor").innerHTML = text;
}

{
    iterableNumberforIf = {};
    iterableNumberforIf[Symbol.iterator] = function () {
        let n = 0;
        done = false;
        return {
            next() {
                n += 20;
                if (n === 100) {
                    done = true
                }
                return {value: n, done: done};
            }
        };
    }
    let iterator = iterableNumberforIf[Symbol.iterator]();
    let text = ""
    while (true) {
        const result = iterator.next();
        if (result.done) break;
        text += result.value + "<br>";
    }
    document.getElementById("iterableIteratedWithWhile").innerHTML = text;
}

{
    function Persona(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
    }

    const she = new Persona("Sally", "Doe", 48, "green");

    document.getElementById("changePropertyValueBefore").innerHTML = she.firstName + " was " + she.lastName;
    Object.defineProperty(she, "lastName", {value: "Rally"});
    document.getElementById("changePropertyAfter").innerHTML = "But now she is " + she.lastName;

    document.getElementById("listProperties").innerHTML = Object.getOwnPropertyNames(she);

    Object.defineProperty(she, "lastName", {enumerable: false});
    document.getElementById("listEnumerableProperties").innerHTML = Object.keys(she);

    Object.defineProperty(she, "eyelashesSize", {value: "big"});
    document.getElementById("addProperty").innerHTML = she.firstName + " got " + she.eyelashesSize + " eyelashes";

    Object.defineProperty(she, "fullName", {
        get: function () {
            return this.age + "yo. " + this.firstName + " " + this.lastName + " with " + this.eyelashesSize + " eyelashes";
        }
    });
    document.getElementById("addGetterProperties").innerHTML = she.fullName;
}

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

{
    class Sword {
        constructor(type) {
            this.swordType = type;
        }
        present() {
            return "I have a " + this.swordType;
        }
    }
    class Model extends Sword {
        constructor(type, model) {
            super(type);
            this.model = model;
        }
        show() {
            return this.present() + ", it's a " + this.model;
        }
    }
    const mySword = new Model("Bastard", "One-half handed sword");
    document.getElementById("classInheritance").innerHTML = mySword.show();
}

{
    class Sword {
        constructor(model) {
            this._swordName = model;
        }
        get sName() {
            return this._swordName;
        }
        set sName(x) {
            this._swordName = x;
        }
        static fight(x) {
            return "Wanna fight? " + x._swordName;
        }
    }
    const mySword = new Sword("Bastard");
    document.getElementById("getterAndSetterInClass").innerHTML = mySword.sName;
    document.getElementById("ClassStaticMethod").innerHTML = Sword.fight(mySword);
}