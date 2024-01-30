let w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("WebCounterCunt.js");
        }
        w.onmessage = function(event) {
            document.getElementById("resulta").innerHTML = event.data;
        };
    } else {
        document.getElementById("resulta").innerHTML = "Nah your browser doesn't support Workers";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}