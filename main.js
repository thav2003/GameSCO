var Btn_play = document.querySelector('.toggle');
var Btn_submit=document.querySelector('.lap');
var btn_background = document.getElementsByClassName("result");
var Btn_reset=document.querySelector('.reset');
var Dapan=new Array("The","Black","Tulip","Muscle","Davis","King's","Mania","Electric","Car","FIFA","World","Cup",
"Speech","Perception","Solar","Power","Rose","Trade","Management","Information","System",
"Kennedy","Space","Center","And","Citric","Shuttle","Marketing","Communications","Acid",
"Rain","Program","Technology","Adoption","Life","Cycle","Of","Pi","Beta","Phi","Herculis");
var btn_backgroundX  = [0,1,2,5,9,10,12,14,15,17,18,20,21,23,24,26,28,31,32,33,36,37,38,42,45,47,51,52,55,56,57,62,63,64,65,74,84,85,86,95];


Btn_play.onclick = function(){
    show();
};

Btn_submit.onclick = function() {
    check();
}
Btn_reset.onclick=function(){
     resetX();
}
function resetX(){
    btn_backgroundX.forEach(function(value,index){
        btn_background[value].value = "";
    })
    btn_backgroundX.forEach(function(value,index){
        btn_background[value].style.backgroundColor = "red"
    })
}
function show(){
    
    document.getElementById('main_game').style.visibility='visible';
    document.getElementById('man_che').style.visibility='hidden';
    btn_background[0].style.backgroundColor = "red";
    btn_background[1].style.backgroundColor = "red";
    btn_background[2].style.backgroundColor = "red";
    btn_background[5].style.backgroundColor = "red";
    btn_background[9].style.backgroundColor = "red";
    btn_background[10].style.backgroundColor = "red";
    btn_background[12].style.backgroundColor = "red";
    btn_background[14].style.backgroundColor = "red";
    btn_background[15].style.backgroundColor = "red";
    btn_background[17].style.backgroundColor = "red";
    btn_background[18].style.backgroundColor = "red";
    btn_background[19].style.backgroundColor = "red";
    btn_background[20].style.backgroundColor = "red";
    btn_background[21].style.backgroundColor = "red";
    btn_background[23].style.backgroundColor = "red";
    btn_background[24].style.backgroundColor = "red";
    btn_background[26].style.backgroundColor = "red";
    btn_background[28].style.backgroundColor = "red";
    btn_background[31].style.backgroundColor = "red";
    btn_background[32].style.backgroundColor = "red";
    btn_background[33].style.backgroundColor = "red";
    btn_background[36].style.backgroundColor = "red";
    btn_background[37].style.backgroundColor = "red";
    btn_background[38].style.backgroundColor = "red";
    btn_background[42].style.backgroundColor = "red";
    btn_background[45].style.backgroundColor = "red";
    btn_background[47].style.backgroundColor = "red";
    btn_background[51].style.backgroundColor = "red";
    btn_background[52].style.backgroundColor = "red";
    btn_background[55].style.backgroundColor = "red";
    btn_background[56].style.backgroundColor = "red";
    btn_background[57].style.backgroundColor = "red";
    btn_background[62].style.backgroundColor = "red";
    btn_background[63].style.backgroundColor = "red";
    btn_background[64].style.backgroundColor = "red";
    btn_background[65].style.backgroundColor = "red";
    btn_background[74].style.backgroundColor = "red";
    btn_background[84].style.backgroundColor = "red";
    btn_background[85].style.backgroundColor = "red";
    btn_background[86].style.backgroundColor = "red";
    btn_background[95].style.backgroundColor = "red";


}
function check(){
    const cells = document.querySelectorAll('td');
    /*for(var i=0;i<100;i++){
        var giatri=document.getElementsByClassName('result')[i].value);
        if(!NaN){
            console.log(giatri);
        }
    } */
    var arr=new Array();
    var giatri=document.getElementsByClassName('result');
    arr.push(giatri[0].value);
    arr.push(giatri[1].value);
    arr.push(giatri[2].value);
    arr.push(giatri[5].value);
    arr.push(giatri[9].value);
    arr.push(giatri[10].value);
    arr.push(giatri[12].value);
    arr.push(giatri[14].value);
    arr.push(giatri[15].value);
    arr.push(giatri[17].value);
    arr.push(giatri[18].value);
    arr.push(giatri[19].value);
    arr.push(giatri[20].value);
    arr.push(giatri[21].value);
    arr.push(giatri[23].value);
    arr.push(giatri[24].value);
    arr.push(giatri[26].value);
    arr.push(giatri[28].value);
    arr.push(giatri[31].value);
    arr.push(giatri[32].value);
    arr.push(giatri[33].value);
    arr.push(giatri[36].value);
    arr.push(giatri[37].value);
    arr.push(giatri[38].value);
    arr.push(giatri[42].value);
    arr.push(giatri[45].value);
    arr.push(giatri[47].value);
    arr.push(giatri[51].value);
    arr.push(giatri[52].value);
    arr.push(giatri[55].value);
    arr.push(giatri[56].value);
    arr.push(giatri[57].value);
    arr.push(giatri[62].value);
    arr.push(giatri[63].value);
    arr.push(giatri[64].value);
    arr.push(giatri[65].value);
    arr.push(giatri[74].value);
    arr.push(giatri[84].value);
    arr.push(giatri[85].value);
    arr.push(giatri[86].value);
    arr.push(giatri[95].value);
    var len = arr.length;
    for(var i=0; i<len; i++){
        for(var k=0;k<100;k++){
            if(arr[i]==giatri[k].value && arr[i]==Dapan[i]){
                giatri[k].style.backgroundColor = "gray";
                console.log(arr[i]);
            }
        }
    }
}

