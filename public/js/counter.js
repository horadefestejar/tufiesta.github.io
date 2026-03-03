document.addEventListener("DOMContentLoaded", () => {

  const DATE_TARGET = new Date("11/13/2026 14:00:00");

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  function updateCountdown(){

    const now = new Date();
    const difference = DATE_TARGET - now;

    if(difference <= 0){
      days.textContent = "0";
      hours.textContent = "0";
      minutes.textContent = "0";
      seconds.textContent = "0";
      return;
    }

    const d = Math.floor(difference / (1000*60*60*24));
    const h = Math.floor((difference / (1000*60*60)) % 24);
    const m = Math.floor((difference / (1000*60)) % 60);
    const s = Math.floor((difference / 1000) % 60);

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
  }

  updateCountdown();
  setInterval(updateCountdown,1000);
});