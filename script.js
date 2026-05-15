//константи (kill me)
const goleft = document.getElementById("left");
const goright = document.getElementById("right");
const count = document.getElementById("count");

const sc2p1 = document.getElementById("sc2p1");
const sc2p2 = document.getElementById("sc2p2");
const sc2p3 = document.getElementById("sc2p3");
const sc2p4 = document.getElementById("sc2p4");
const sc2p5 = document.getElementById("sc2p5");
const sc2p6 = document.getElementById("sc2p6");
const sc2p7 = document.getElementById("sc2p7");
const sc2p8 = document.getElementById("sc2p8");
const sc2p9 = document.getElementById("sc2p9");
const sc2p10 = document.getElementById("sc2p10");
const sc2p11 = document.getElementById("sc2p11");
const sc2p12 = document.getElementById("sc2p12");
const sc2p13 = document.getElementById("sc2p13");
const sc2p14 = document.getElementById("sc2p14");
const sc2p15 = document.getElementById("sc2p15");

//слайдер
var countthing = 2;

goleft.addEventListener("click", () => {
  if (countthing == 2) {
    [sc2p1, sc2p2].forEach((el) => el.classList.toggle("middle")); //1
    [sc2p15, sc2p1].forEach((el) => el.classList.toggle("adaptivefirst")); //15
    [sc2p2, sc2p3].forEach((el) => el.classList.toggle("adaptivelast")); //2
    countthing = 1;
    console.log(countthing);
    count.textContent = "1/15";
  } else if (countthing == 1) {
    [sc2p15, sc2p1].forEach((el) => el.classList.toggle("middle"));
    [sc2p14, sc2p15].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p1, sc2p2].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 15;
    count.textContent = "15/15";
  } else if (countthing == 15) {
    [sc2p14, sc2p15].forEach((el) => el.classList.toggle("middle"));
    [sc2p13, sc2p14].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p15, sc2p1].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 14;
    count.textContent = "14/15";
  } else if (countthing == 14) {
    [sc2p13, sc2p14].forEach((el) => el.classList.toggle("middle"));
    [sc2p12, sc2p13].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p14, sc2p15].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 13;
    count.textContent = "13/15";
  } else if (countthing == 13) {
    [sc2p12, sc2p13].forEach((el) => el.classList.toggle("middle"));
    [sc2p11, sc2p12].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p13, sc2p14].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 12;
    count.textContent = "12/15";
  } else if (countthing == 12) {
    [sc2p11, sc2p12].forEach((el) => el.classList.toggle("middle"));
    [sc2p10, sc2p11].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p12, sc2p13].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 11;
    count.textContent = "11/15";
  } else if (countthing == 11) {
    [sc2p10, sc2p11].forEach((el) => el.classList.toggle("middle"));
    [sc2p9, sc2p10].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p11, sc2p12].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 10;
    count.textContent = "10/15";
  } else if (countthing == 10) {
    [sc2p9, sc2p10].forEach((el) => el.classList.toggle("middle"));
    [sc2p8, sc2p9].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p10, sc2p11].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 9;
    count.textContent = "9/15";
  } else if (countthing == 9) {
    [sc2p8, sc2p9].forEach((el) => el.classList.toggle("middle"));
    [sc2p7, sc2p8].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p9, sc2p10].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 8;
    count.textContent = "8/15";
  } else if (countthing == 8) {
    [sc2p7, sc2p8].forEach((el) => el.classList.toggle("middle"));
    [sc2p6, sc2p7].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p8, sc2p9].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 7;
    count.textContent = "7/15";
  } else if (countthing == 7) {
    [sc2p6, sc2p7].forEach((el) => el.classList.toggle("middle"));
    [sc2p5, sc2p6].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p7, sc2p8].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 6;
    count.textContent = "6/15";
  } else if (countthing == 6) {
    [sc2p5, sc2p6].forEach((el) => el.classList.toggle("middle"));
    [sc2p4, sc2p5].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p6, sc2p7].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 5;
    count.textContent = "5/15";
  } else if (countthing == 5) {
    [sc2p4, sc2p5].forEach((el) => el.classList.toggle("middle"));
    [sc2p3, sc2p4].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p5, sc2p6].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 4;
    count.textContent = "4/15";
  } else if (countthing == 4) {
    [sc2p3, sc2p4].forEach((el) => el.classList.toggle("middle"));
    [sc2p2, sc2p3].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p4, sc2p5].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 3;
    count.textContent = "3/15";
  } else if (countthing == 3) {
    [sc2p2, sc2p3].forEach((el) => el.classList.toggle("middle"));
    [sc2p1, sc2p2].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p3, sc2p4].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 2;
    count.textContent = "2/15";
  }
});

goright.addEventListener("click", () => {
  if (countthing == 2) {
    [sc2p3, sc2p2].forEach((el) => el.classList.toggle("middle"));
    [sc2p2, sc2p1].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p4, sc2p3].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 3;
    count.textContent = "3/15";
  } else if (countthing == 3) {
    [sc2p4, sc2p3].forEach((el) => el.classList.toggle("middle"));
    [sc2p3, sc2p2].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p5, sc2p4].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 4;
    count.textContent = "4/15";
  } else if (countthing == 4) {
    [sc2p5, sc2p4].forEach((el) => el.classList.toggle("middle"));
    [sc2p4, sc2p3].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p6, sc2p5].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 5;
    count.textContent = "5/15";
  } else if (countthing == 5) {
    [sc2p6, sc2p5].forEach((el) => el.classList.toggle("middle"));
    [sc2p5, sc2p4].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p7, sc2p6].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 6;
    count.textContent = "6/15";
  } else if (countthing == 6) {
    [sc2p7, sc2p6].forEach((el) => el.classList.toggle("middle"));
    [sc2p6, sc2p5].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p8, sc2p7].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 7;
    count.textContent = "7/15";
  } else if (countthing == 7) {
    [sc2p8, sc2p7].forEach((el) => el.classList.toggle("middle"));
    [sc2p7, sc2p6].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p9, sc2p8].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 8;
    count.textContent = "8/15";
  } else if (countthing == 8) {
    [sc2p9, sc2p8].forEach((el) => el.classList.toggle("middle"));
    [sc2p8, sc2p7].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p10, sc2p9].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 9;
    count.textContent = "9/15";
  } else if (countthing == 9) {
    [sc2p10, sc2p9].forEach((el) => el.classList.toggle("middle"));
    [sc2p9, sc2p8].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p11, sc2p10].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 10;
    count.textContent = "10/15";
  } else if (countthing == 10) {
    [sc2p11, sc2p10].forEach((el) => el.classList.toggle("middle"));
    [sc2p10, sc2p9].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p12, sc2p11].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 11;
    count.textContent = "11/15";
  } else if (countthing == 11) {
    [sc2p12, sc2p11].forEach((el) => el.classList.toggle("middle"));
    [sc2p11, sc2p10].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p13, sc2p12].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 12;
    count.textContent = "12/15";
  } else if (countthing == 12) {
    [sc2p13, sc2p12].forEach((el) => el.classList.toggle("middle"));
    [sc2p12, sc2p11].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p14, sc2p13].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 13;
    count.textContent = "13/15";
  } else if (countthing == 13) {
    [sc2p14, sc2p13].forEach((el) => el.classList.toggle("middle"));
    [sc2p13, sc2p12].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p15, sc2p14].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 14;
    count.textContent = "14/15";
  } else if (countthing == 14) {
    [sc2p15, sc2p14].forEach((el) => el.classList.toggle("middle"));
    [sc2p14, sc2p13].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p1, sc2p15].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 15;
    count.textContent = "15/15";
  } else if (countthing == 15) {
    [sc2p1, sc2p15].forEach((el) => el.classList.toggle("middle"));
    [sc2p15, sc2p14].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p2, sc2p1].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 1;
    count.textContent = "1/15";
  } else if (countthing == 1) {
    [sc2p2, sc2p1].forEach((el) => el.classList.toggle("middle"));
    [sc2p1, sc2p15].forEach((el) => el.classList.toggle("adaptivefirst"));
    [sc2p3, sc2p2].forEach((el) => el.classList.toggle("adaptivelast"));
    countthing = 2;
    count.textContent = "2/15";
  }
});

//тема
const cbody = document.getElementById("cbody");
let themetoggle = false;

document.getElementById("aboba").addEventListener("click", () => {
  if (themetoggle == false) {
    cbody.style.background = "rgb(79, 77, 76)";
    themetoggle = true;
  } else {
    cbody.style.background =
      "linear-gradient(180.11deg, #E5E2E3 10.73%, #FDFEFE 38.02%, #E5E2E3 71.11%, #FDFEFE 99.91%)";
    themetoggle = false;
  }
});

//модалка

var ismodalopen = false;
const copenmodal = document.querySelectorAll('.copenmodal');
const cmodalwrap = document.getElementById('cmodalwrap');

copenmodal.addEventListener('click', () => {
  if (ismodalopen == false) {
    cmodalwrap.style.display = 'flex';
    ismodalopen = true;
    console.log(ismodalopen);
  } else {
    cmodalwrap.style.display = 'none';
    ismodalopen = false;
  }
});