let Button1 = document.getElementById("Btn1");
Button1.onclick = function(){
   document.getElementById("Hallo").style.color = "red" ;
};


let Button2 = document.getElementById("Btn2");
Button2.onclick = function(){
    document.getElementById("Hallo").style.backgroundColor = "Blue";
    document.getElementById("Hallo").style.width = "100px";
    document.getElementById("Hallo").style.height = "100px";
}
;


let Button3 = document.getElementById("Btn3");
let Foto = document.getElementById("Foto");

Button3.onclick = function() {
    if (Foto.classList.contains('visibility')){
        Foto.classList.remove('visibility');
        Foto.classList.add('hidden')
    } else {
        Foto.classList.remove('hidden');
        Foto.classList.add('visibility')
    }

}   

let meinDiv = document.getElementById("Größer machen");
let GrößerMachen = document.getElementById("Größer machen");
let KleinerMachen = document.getElementById("Kleiner machen");

GrößerMachen.onclick = function() {
    Foto.setAttribute("class","größermachen");
}

KleinerMachen.onclick = function(){
    Foto.setAttribute("class","kleinermachen");
}