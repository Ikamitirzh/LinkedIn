let profilemenu= document.getElementById('profilemenu');
function togglemenu(){
    profilemenu.classList.toggle("open-menu");
}




let sideactivity = document.getElementById('sidebaractivity');
let morelink = document.getElementById('showmorelink');

function toggleactivity(){
    sideactivity.classList.toggle("open-activity");
    

    if(sideactivity.classList.contains("open-activity")){
        morelink.innerHTML = "Show less <b>-</b>";
    }
    else{
        morelink.innerHTML = "Show more <b>+</b>";
    }
}
