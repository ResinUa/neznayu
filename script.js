//константи (kill me)
const goleft = document.getElementById('left');
const goright = document.getElementById('right'); 
const count = document.getElementById('count');

const sc2p1 = document.GetElementById('sc2p1'); //active group
const sc2p2 = document.GetElementById('sc2p2');
const sc2p3 = document.GetElementById('sc2p3');
const sc2p4 = document.GetElementById('sc2p4');
const sc2p5 = document.GetElementById('sc2p5');
const sc2p6 = document.GetElementById('sc2p6');
const sc2p7 = document.GetElementById('sc2p7');
const sc2p8 = document.GetElementById('sc2p8');
const sc2p9 = document.GetElementById('sc2p9');
const sc2p10 = document.GetElementById('sc2p10');
const sc2p11 = document.GetElementById('sc2p11');
const sc2p12 = document.GetElementById('sc2p12');
const sc2p13 = document.GetElementById('sc2p13');
const sc2p14 = document.GetElementById('sc2p14');
const sc2p15 = document.GetElementById('sc2p15');

const sc2pc1 = document.GetElementById('sc2pc1'); //activething
const sc2pc2 = document.GetElementById('sc2pc2');
const sc2pc3 = document.GetElementById('sc2pc3');
const sc2pc4 = document.GetElementById('sc2pc4');
const sc2pc5 = document.GetElementById('sc2pc5');
const sc2pc6 = document.GetElementById('sc2pc6');
const sc2pc7 = document.GetElementById('sc2pc7');
const sc2pc8 = document.GetElementById('sc2pc8');
const sc2pc9 = document.GetElementById('sc2pc9');
const sc2pc10 = document.GetElementById('sc2pc10');
const sc2pc11 = document.GetElementById('sc2pc11');
const sc2pc12 = document.GetElementById('sc2pc12');
const sc2pc13 = document.GetElementById('sc2pc13');
const sc2pc14 = document.GetElementById('sc2pc14');
const sc2pc15 = document.GetElementById('sc2pc15');

const star1 = document.GetElementById('star1'); //activestar
const star2 = document.GetElementById('star2');
const star3 = document.GetElementById('star3');
const star4 = document.GetElementById('star4');
const star5 = document.GetElementById('star5');
const star6 = document.GetElementById('star6');
const star7 = document.GetElementById('star7');
const star8 = document.GetElementById('star8');
const star9 = document.GetElementById('star9');
const star10 = document.GetElementById('star10');
const star11 = document.GetElementById('star11');
const star12 = document.GetElementById('star12');
const star13 = document.GetElementById('star13');
const star14 = document.GetElementById('star14');
const star15 = document.GetElementById('star15');

const text1 = document.GetElementById('text1'); //activetext
const text2 = document.GetElementById('text2');
const text3 = document.GetElementById('text3');
const text4 = document.GetElementById('text4');
const text5 = document.GetElementById('text5');
const text6 = document.GetElementById('text6');
const text7 = document.GetElementById('text7');
const text8 = document.GetElementById('text8');
const text9 = document.GetElementById('text9');
const text10 = document.GetElementById('text10');
const text11 = document.GetElementById('text11');
const text12 = document.GetElementById('text12');
const text13 = document.GetElementById('text13');
const text14 = document.GetElementById('text14');
const text15 = document.GetElementById('text15');

//слайдер
let countthing = 2;

goleft.addEventListener('click', () => {
    if (countthing == 2) {
     text1.cla
    }
});

//тема
const cbody = document.getElementById('cbody');
let themetoggle = false;

document.getElementById('aboba').addEventListener('click', () => {
    if (themetoggle == false) {
        cbody.style.background = 'rgb(79, 77, 76)';
        themetoggle = true;
    } else {
        cbody.style.background = 'linear-gradient(180.11deg, #E5E2E3 10.73%, #FDFEFE 38.02%, #E5E2E3 71.11%, #FDFEFE 99.91%)';
        themetoggle = false;
    }
});