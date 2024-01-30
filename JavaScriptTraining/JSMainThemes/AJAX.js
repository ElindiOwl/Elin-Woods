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


function showHint(str) {
    if (str.length == 0) {
        document.getElementById("AJAXNameHint").innerHTML = "";
        return;
    }
    const request = new XMLHttpRequest();
    request.onload = function () {
        document.getElementById("AJAXNameHint").innerHTML = this.responseText;
    }
    request.open("GET", "JavaScriptTraining/Name_List.php?q=" + str);
    request.send();
}

function showHint2(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("txtHint").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "JavaScriptTraining/gethint.asp?q=" + str);
    xhttp.send();
}

function showCustomer(string) {
    if (string == "") {
        document.getElementById("txtiint").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("txtiint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "JavaScriptTraining/getcustomer.php?q=" + string);
    xhttp.send();
}