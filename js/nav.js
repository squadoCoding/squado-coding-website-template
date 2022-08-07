if(window.innerWidth <= 813){
    navRight.style.display = "none";
}

burger.addEventListener("click", function(element){
    if(navRight.style.display == "none" || navRight.style.display == undefined){
        navRight.style.display = "flex";
    }
    
    else{
        navRight.style.display = "none";
    }
});