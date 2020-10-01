function changeDsc(header,scr,map,text){
    document.getElementById("dscHeader").innerText=header;
    document.getElementById("dscImage").src=scr;
    document.getElementById("dscText").innerHTML=text;
    document.getElementById("dscMap").src=map;

    document.getElementsByClassName("dscCard")[0].classList.toggle('active');
    document.documentElement.scrollTop = 0;
}

function closeDsc(){
    document.getElementsByClassName("dscCard")[0].classList.toggle('active');
}