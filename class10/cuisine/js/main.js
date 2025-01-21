const row1Item1 = document.querySelector('#row1Item1');
const row1Item2 = document.querySelector('#row1Item2');
const row1Item3 = document.querySelector('#row1Item3');
const row1Item4 = document.querySelector('#row1Item4');

const row2Item1 = document.querySelector('#row2Item1');
const row2Item2 = document.querySelector('#row2Item2');
const row2Item3 = document.querySelector('#row2Item3');
const row2Item4 = document.querySelector('#row2Item4');

document.querySelector('#row1Item1Img').addEventListener('click', showRow1Item1);
document.querySelector('#row1Item2Img').addEventListener('click', showRow1Item2);
document.querySelector('#row1Item3Img').addEventListener('click', showRow1Item3);
document.querySelector('#row1Item4Img').addEventListener('click', showRow1Item4);

document.querySelector('#row2Item1Img').addEventListener('click', showRow2Item1);
document.querySelector('#row2Item2Img').addEventListener('click', showRow2Item2);
document.querySelector('#row2Item3Img').addEventListener('click', showRow2Item3);
document.querySelector('#row2Item4Img').addEventListener('click', showRow2Item4);

function showRow1Item1(){
    row1Item1.classList.toggle('hidden');
    row1Item2.classList.add('hidden');
    row1Item3.classList.add('hidden');
    row1Item4.classList.add('hidden');

    row2Item1.classList.add('hidden');
    row2Item2.classList.add('hidden');
    row2Item3.classList.add('hidden');
    row2Item4.classList.add('hidden');
}
function showRow1Item2(){
    row1Item2.classList.toggle('hidden');
    row1Item1.classList.add('hidden');
    row1Item3.classList.add('hidden');
    row1Item4.classList.add('hidden');

    row2Item1.classList.add('hidden');
    row2Item2.classList.add('hidden');
    row2Item3.classList.add('hidden');
    row2Item4.classList.add('hidden');
}
function showRow1Item3(){
    row1Item3.classList.toggle('hidden');
    row1Item1.classList.add('hidden');
    row1Item2.classList.add('hidden');
    row1Item4.classList.add('hidden');

    row2Item1.classList.add('hidden');
    row2Item2.classList.add('hidden');
    row2Item3.classList.add('hidden');
    row2Item4.classList.add('hidden');
}
function showRow1Item4(){
    row1Item4.classList.toggle('hidden');
    row1Item1.classList.add('hidden');
    row1Item2.classList.add('hidden');
    row1Item3.classList.add('hidden');

    row2Item1.classList.add('hidden');
    row2Item2.classList.add('hidden');
    row2Item3.classList.add('hidden');
    row2Item4.classList.add('hidden');
}


function showRow2Item1(){
    row2Item1.classList.toggle('hidden');
    row2Item2.classList.add('hidden');
    row2Item3.classList.add('hidden');
    row2Item4.classList.add('hidden');

    row1Item1.classList.add('hidden');
    row1Item2.classList.add('hidden');
    row1Item3.classList.add('hidden');
    row1Item4.classList.add('hidden');
}
function showRow2Item2(){
    row2Item2.classList.toggle('hidden');
    row2Item1.classList.add('hidden');
    row2Item3.classList.add('hidden');
    row2Item4.classList.add('hidden');

    row1Item1.classList.add('hidden');
    row1Item2.classList.add('hidden');
    row1Item3.classList.add('hidden');
    row1Item4.classList.add('hidden');
}
function showRow2Item3(){
    row2Item3.classList.toggle('hidden');
    row2Item1.classList.add('hidden');
    row2Item2.classList.add('hidden');
    row2Item4.classList.add('hidden');

    row1Item1.classList.add('hidden');
    row1Item2.classList.add('hidden');
    row1Item3.classList.add('hidden');
    row1Item4.classList.add('hidden');
}
function showRow2Item4(){
    row2Item4.classList.toggle('hidden');
    row2Item1.classList.add('hidden');
    row2Item2.classList.add('hidden');
    row2Item3.classList.add('hidden');

    row1Item1.classList.add('hidden');
    row1Item2.classList.add('hidden');
    row1Item3.classList.add('hidden');
    row1Item4.classList.add('hidden');
}




