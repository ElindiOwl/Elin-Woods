window.onscroll = function showHeader(){
    let header = document.querySelector('.navbar');

    if(window.pageYOffset > 50){
        header.classList.add('navbar_fixed');
    } else{
        header.classList.remove('navbar_fixed');
    }
}