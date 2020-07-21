document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-4rem";
  }
}

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
