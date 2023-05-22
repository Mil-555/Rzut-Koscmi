let p=document.getElementById("prz")
let lewy=document.querySelector(".lewy")
let prawy=document.querySelector(".prawy")
let losu1
let losu2
let losc1
let losc2
let pu=0
let pc=0
let kostka=0
function odlicz(liczba){
    prawy.innerHTML=liczba
    lewy.innerHTML=liczba
}
function rzut(){
    losu1=parseInt(Math.random()*6)+1
    losu2=parseInt(Math.random()*6)+1
    losc1=parseInt(Math.random()*6)+1
    losc2=parseInt(Math.random()*6)+1
    lewy.innerHTML=`<p>USER:</p> <br> <p><img src="kostka/${losu1}.jpg">  <img src="kostka/${losu2}.jpg"></p>`
    prawy.innerHTML=`<p>COMP:</p> <br> <p><img src="kostka/${losc1}.jpg">  <img src="kostka/${losc2}.jpg"></p>`
}
function win(){
    if((losu1+losu2)>(losc1+losc2)){
        pu++
        alert("WYGRAŁ USER")
    }
    else if((losu1+losu2)<(losc1+losc2)){
        pc++
        alert("WYGRAŁ COMPUTER")
    }
    else{
        alert("REMIS")
    }
    document.getElementById('puser').innerHTML=`Punkty user: ${pu}`
    document.getElementById('pcomp').innerHTML=`Punkty computer: ${pc}`
}
function nazwa(){
    odlicz(3)
    setTimeout(odlicz,1000,2)
    setTimeout(odlicz,2000,1)
    setTimeout(rzut,3000)
    setTimeout(win,3100)
}
p.addEventListener("click",nazwa)

// 1.format przycisku rzut w css
// 2.sprawdź kto wygrał - daj komunikat
// 3.licznik punktów dla usera i dla kompa + wyświetlanie
// 4.zmiana numerów na graficzne kostki