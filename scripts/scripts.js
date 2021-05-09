var bbModal = document.getElementById("boogabotModal");
var pfModal = document.getElementById("pathfinderModal");

var demos = document.getElementsByClassName("demo");

var bbGif = document.getElementById("boogabotDemo");
var pfGif = document.getElementById("pathfinderDemo");

demos[0].onclick = function () {
  bbModal.style.display = "block";
};
demos[1].onclick = function () {
  pfModal.style.display = "block";
};

var span = document.getElementsByClassName("close");

span[0].onclick = function () {
  bbModal.style.display = "none";
};
span[1].onclick = function () {
  pfModal.style.display = "none";
};

var hamburger = document.getElementById("hamburger");
var overlay = document.getElementById("mobile-nav");

hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    overlay.style.height = "0";
  } else {
    hamburger.classList.add("open");
    overlay.style.height = "100%";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    hamburger.classList.remove("open");
    overlay.style.height = "0";
  });
});
