var galeria = 0;
showPictures();
function showPictures() {
    var x;
    var foto = document.getElementsByClassName("galeria");
    for (x = 0; x < foto.length; x++) {
        foto[x].style.display = "none";
    }
    galeria++;
    if (galeria > foto.length) { galeria = 1 }
    foto[galeria - 1].style.display = "block";
    setTimeout(showPictures, 4000); // Change image every 4 seconds
}