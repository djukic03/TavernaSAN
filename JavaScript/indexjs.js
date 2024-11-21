const btnrez = document.getElementById("rezervacija");
btnrez.addEventListener("click", (e) => {
  var x = window.screenX;
  var y = window.screenY + 50;
  var w = window.innerWidth;
  var l = x + (w * 7) / 20;
  window.open(
    "HTML/rezervacija.html",
    "rezervacija",
    "height=650, width=455, top=" + y + "px, left=" + l + "px"
  );
});

const btnskrol = document.getElementById("skrolbtn");
btnskrol.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 40) {
    btnskrol.style.display = "block";
  } else {
    btnskrol.style.display = "none";
  }
});
