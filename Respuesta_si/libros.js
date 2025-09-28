const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const libro = document.querySelector('#libro');

const pagina1 = document.querySelector('#pagina1');
const pagina2 = document.querySelector('#pagina2');
const pagina3 = document.querySelector('#pagina3');
const pagina4 = document.querySelector('#pagina4');
const pagina5 = document.querySelector('#pagina5');
const pagina6 = document.querySelector('#pagina6');
const pagina7 = document.querySelector('#pagina7');
const pagina8 = document.querySelector('#pagina8');
const pagina9 = document.querySelector('#pagina9');
const pagina10 = document.querySelector('#pagina10');
const pagina11 = document.querySelector('#pagina11');
const pagina12 = document.querySelector('#pagina12');
const pagina13 = document.querySelector('#pagina13');
const pagina14 = document.querySelector('#pagina14');
const pagina15 = document.querySelector('#pagina15');
const pagina16 = document.querySelector('#pagina16');
const pagina17 = document.querySelector('#pagina17');

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);

let currentLocation = 1;
let numOfPapers = 17; //total de hojas que tenemos
let maxlocation = numOfPapers + 1;

function openBook() {
    libro.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}


function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        libro.style.transform = "translateX(0%)";
    } else {
        libro.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}


function goNextPage(){
    if (currentLocation < maxlocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                pagina1.classList.add('flipped');
                pagina1.style.zIndex = 1;
                break;
            case 2:
                pagina2.classList.add('flipped');
                pagina2.style.zIndex = 2;
                break;
            case 3:
                pagina3.classList.add('flipped');
                pagina3.style.zIndex = 3;
                break;
            case 4:
                pagina4.classList.add('flipped');
                pagina4.style.zIndex = 4;
                break;
            case 5:
                pagina5.classList.add('flipped');
                pagina5.style.zIndex = 5;
                break;
            case 6:
                pagina6.classList.add('flipped');
                pagina6.style.zIndex = 6;
                break;
            case 7:
                pagina7.classList.add('flipped');
                pagina7.style.zIndex = 7;
                break;
            case 8:
                pagina8.classList.add('flipped');
                pagina8.style.zIndex = 8;
                break;
            case 9:
                pagina9.classList.add('flipped');
                pagina9.style.zIndex = 9;
                break;
            case 10:
                pagina10.classList.add('flipped');
                pagina10.style.zIndex = 10;
                break;
            case 11:
                pagina11.classList.add('flipped');
                pagina11.style.zIndex = 11;
                break;
            case 12:
                pagina12.classList.add('flipped');
                pagina12.style.zIndex = 12;
                break;
            case 13:
                pagina13.classList.add('flipped');
                pagina13.style.zIndex = 13;
                break;
            case 14:
                pagina14.classList.add('flipped');
                pagina14.style.zIndex = 14;
                break;
            case 15:
                pagina15.classList.add('flipped');
                pagina15.style.zIndex = 15;
                break;
            case 16:
                pagina16.classList.add('flipped');
                pagina16.style.zIndex = 16;
                break;
            case 17:
                pagina17.classList.add('flipped');
                pagina17.style.zIndex = 17;
                closeBook(false);
                break;
            default:
                throw new Error("unknow state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                pagina1.classList.remove('flipped');
                pagina1.style.zIndex = 17;
                break;
            case 3:
                pagina2.classList.remove('flipped');
                pagina2.style.zIndex = 16;
                break;
            case 4:
                pagina3.classList.remove('flipped');
                pagina3.style.zIndex = 15;
                break;
            case 5:
                pagina4.classList.remove('flipped');
                pagina4.style.zIndex = 14;
                break;
            case 6:
                pagina5.classList.remove('flipped');
                pagina5.style.zIndex = 13;
                break;
            case 7:
                pagina6.classList.remove('flipped');
                pagina6.style.zIndex = 12;
                break;
            case 8:
                pagina7.classList.remove('flipped');
                pagina7.style.zIndex = 11;
                break;
            case 9:
                pagina8.classList.remove('flipped');
                pagina8.style.zIndex = 10;
                break;
            case 10:
                pagina9.classList.remove('flipped');
                pagina9.style.zIndex = 9;
                break;
            case 11:
                pagina10.classList.remove('flipped');
                pagina10.style.zIndex = 8;
                break;
            case 12:
                pagina11.classList.remove('flipped');
                pagina11.style.zIndex = 7;
                break;
            case 13:
                pagina12.classList.remove('flipped');
                pagina12.style.zIndex = 6;
                break;
            case 14:
                pagina13.classList.remove('flipped');
                pagina13.style.zIndex = 5;
                break;
            case 15:
                pagina14.classList.remove('flipped');
                pagina14.style.zIndex = 4;
                break;
            case 16:
                pagina15.classList.remove('flipped');
                pagina15.style.zIndex = 3;
                break;
            case 17:
                pagina16.classList.remove('flipped');
                pagina16.style.zIndex = 2;
                break;
            case 18:
                openBook();
                pagina17.classList.remove('flipped');
                pagina17.style.zIndex = 1;
                break;
            default:
                throw new Error("unknow state");
        }
        currentLocation--;
    }
}