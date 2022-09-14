function menu(){
    var menu = document.querySelector('ul.menu-trailer');

    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else{
        menu.style.display = "none";
    }
}