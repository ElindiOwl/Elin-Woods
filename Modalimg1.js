let modal1 = document.getElementById('imodal1');

let img1 = document.getElementById('modimg1');
let modalImg1 = document.getElementById("imger01");
let captionText1 = document.getElementById("modcaption1");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}
let modal2 = document.getElementById('imodal2');

let img2 = document.getElementById('modimg2');
let modalImg2 = document.getElementById("imger02");
let captionText2 = document.getElementById("modcaption2");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}
let modal3 = document.getElementById('imodal3');

let img3 = document.getElementById('modimg3');
let modalImg3 = document.getElementById("imger03");
let captionText3 = document.getElementById("modcaption3");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}
let modal4 = document.getElementById('imoimg4');

let img4 = document.getElementById('modimg4');
let modalImg4 = document.getElementById("imgimg4");
let captionText4 = document.getElementById("modcaptimg4");
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}
let modal5 = document.getElementById('imodal5');

let img5 = document.getElementById('modimg5');
let modalImg5 = document.getElementById("imger05");
let captionText5 = document.getElementById("modcaption5");
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal1.style.display = "none";
}