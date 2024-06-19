let BodyEl = document.querySelector("body");
let innpakningEl = document.querySelector("#🎁")
let menyEl = document.querySelector("ul");
let menyKnappEl = document.querySelector("#menyKnapp");
let menySynlig = false;
let burgerEl = document.querySelectorAll(".burger");

function meny() {
  if (menySynlig == false) {
    menySynlig = true;
    menyEl.style.display = "block";
    /* burgerEl[0].style.transform = "rotate(45deg)";
    burgerEl[0].style.top = "9px";
    burgerEl[1].style.transform = "rotate(-45deg)";
    burgerEl[2].style.transform = "rotate(-45deg)";
    burgerEl[2].style.top = "-9px"; */
    for (let i = 0; i < burgerEl.length; i++) {
      burgerEl[i].classList.add("burger"+i)
    }
  } else {
    menySynlig = false;
    menyEl.style.display = "none";
 /*    burgerEl[0].style.transform = "rotate(0deg)";
    burgerEl[1].style.transform = "rotate(0deg)";
    burgerEl[2].style.transform = "rotate(0deg)";
    burgerEl[0].style.top = "0px";
    burgerEl[2].style.top = "0px"; */
    for (let i = 0; i < burgerEl.length; i++) {
      burgerEl[i].classList.remove("burger"+i)
    }
  }
}
