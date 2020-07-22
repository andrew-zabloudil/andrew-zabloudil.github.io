document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var bbModal = document.getElementById("boogabotModal");
var pfModal = document.getElementById("pathfinderModal");
var trModal = document.getElementById("tetrosModal");

var demos = document.getElementsByClassName("demo");

var bbGif = document.getElementById("boogabotDemo");
var pfGif = document.getElementById("pathfinderDemo");
var trGif = document.getElementById("tetrosDemo");

demos[0].onclick = function () {
  bbModal.style.display = "block";
};
demos[1].onclick = function () {
  pfModal.style.display = "block";
};
demos[2].onclick = function () {
  trModal.style.display = "block";
};

var span = document.getElementsByClassName("close");

span[0].onclick = function () {
  bbModal.style.display = "none";
};
span[1].onclick = function () {
  pfModal.style.display = "none";
};
span[2].onclick = function () {
  trModal.style.display = "none";
};

var hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
  } else {
    hamburger.classList.add("open");
  }
});
