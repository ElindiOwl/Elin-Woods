window.addEventListener("DOMContentLoaded", () => {
    const userData = getUserData()
    if (userData !== null) {
        replaceAfterRegister(userData.fnick);
        return;
    }
    sendRegisterData();
})

function getUserData() {
    const fullObjectString = localStorage.getItem("savedData");
    if (fullObjectString === null) {
        return null;
    }
    return JSON.parse(fullObjectString);

}

function replaceAfterRegister(name) {
    const removeAfterRegister = document.querySelector(".removeAfterRegister");
    let afterLog = "JavaScriptTraining/forRegisterDUCK.txt";
    fetch(afterLog)
        .then(x => x.text())
        .then(y => {
            removeAfterRegister.innerHTML = y
            const addNick = removeAfterRegister.querySelector("#fnickAfterRegister");
            addNick.innerHTML = name;
        });
}

function sendRegisterData() {

    const form = document.querySelector("#registerArea");

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append("id", Math.random());

        let dataInForm = {};
        formData.forEach((value, key) => {
            dataInForm[key] = value;
        });

        let dataForLocalStorage = JSON.stringify(dataInForm);
        localStorage.setItem("savedData", `${dataForLocalStorage}`);

        getResourse("http://localhost:3000/api", dataInForm)
            .catch(error => console.error(error));
    }

    form.addEventListener("submit", (e) => req(e), {"once": true});

    async function getResourse(url, data) {
        const request = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!request.ok) {
            throw new Error(`Could not fetch ${url}, status: ${request.status}`);
        }

        return await request.json();
    }
}

function deleteLocalStorageData() {
    localStorage.removeItem("savedData");
    location.reload();
}