var days1 = document.getElementById('days1');
var days2 = document.getElementById('days2');
var days3 = document.getElementById('days3');
var days4 = document.getElementById('days4');
var days5 = document.getElementById('days5');
var days6 = document.getElementById('days6');
var days7 = document.getElementById('days7');
var skrt = document.getElementById('skrt');
var plus = document.getElementById('plus');
var vverh = document.getElementById('vverh');

plus.onclick = function(){
    skrt.style.display = 'block';
    vverh.srtyle.display='block';
}
vverh.onclick=function(){
    skrt.style.display = 'none';
    vverh.srtyle.display='none';
}

days1.onclick = function(){
    days1.style.color='green';
    days2.style.color='black';
    days3.style.color='black';
    days4.style.color='black';
    days5.style.color='black';
    days6.style.color='black';
    days7.style.color='black';
}
days2.onclick = function(){
    days2.style.color='green';
    days1.style.color='black';
    days3.style.color='black';
    days4.style.color='black';
    days5.style.color='black';
    days6.style.color='black';
    days7.style.color='black';
}
days3.onclick = function(){
    days3.style.color='green';
    days2.style.color='black';
    days1.style.color='black';
    days4.style.color='black';
    days5.style.color='black';
    days6.style.color='black';
    days7.style.color='black';
}
days4.onclick = function(){
    days4.style.color='green';
    days2.style.color='black';
    days3.style.color='black';
    days1.style.color='black';
    days5.style.color='black';
    days6.style.color='black';
    days7.style.color='black';
}
days5.onclick = function(){
    days5.style.color='green';
    days2.style.color='black';
    days3.style.color='black';
    days4.style.color='black';
    days1.style.color='black';
    days6.style.color='black';
    days7.style.color='black';
}
days6.onclick = function(){
    days6.style.color='green';
    days2.style.color='black';
    days3.style.color='black';
    days4.style.color='black';
    days5.style.color='black';
    days1.style.color='black';
    days7.style.color='black';
}
days7.onclick = function(){
    days7.style.color='green';
    days2.style.color='black';
    days3.style.color='black';
    days4.style.color='black';
    days5.style.color='black';
    days6.style.color='black';
    days1.style.color='black';
}
