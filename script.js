function changeDsc(header,scr,text){
    document.getElementById("dscHeader").innerText=header;
    document.getElementById("dscImage").src=scr;
    document.getElementById("dscText").innerHTML=text;
    document.documentElement.scrollTop = 0;
}