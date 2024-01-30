
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
