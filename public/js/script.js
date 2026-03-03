let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if(n > slides.length){ slideIndex = 1 }
  if(n < 1){ slideIndex = slides.length }

  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }

  for(let i=0;i<dots.length;i++){
    dots[i].classList.remove("active");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].classList.add("active");
}

function toggleMusic(){
  const audio = document.getElementById("musica");

  // 👇 Aquí definimos el volumen al 50%
  audio.volume = 0.4;

  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
}