
//Function used to change the values in the description card
function changeDsc(header,scr,map,text){

    //To change the header
    document.getElementById("dscHeader").innerText=header;
    //To change the image
    document.getElementById("dscImage").src=scr;
    //To change the content test
    document.getElementById("dscText").innerHTML=text;
    //To change the map image
    document.getElementById("dscMap").src=map;

    //This is used to toggle the description card while in mobile view
    document.getElementsByClassName("dscCard")[0].classList.toggle('active');
    //To bring the user to the top of the page after ther user clicks a collection card
    document.documentElement.scrollTop = 0;
}

//Function to close the description card in mobile view
function closeDsc(){
    document.getElementsByClassName("dscCard")[0].classList.toggle('active');
}

function sidepanel(imglink , placename, description){
    img = document.getElementById("sidepanelimg");
    img.src=imglink;
    place = document.getElementById("sidepanelplace");
    place.innerHTML = placename;
    des = document.getElementById("sidepaneldes");
    des.innerHTML = description;
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}