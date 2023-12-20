window.onload = function() {
 

    

    var buttons= document.getElementsByClassName("login");
    var modalLogin = document.getElementById("modalLogin");
    var closeModalButton = document.getElementById("closeModal");


    for(let butt of buttons){
        butt.onclick = function(){
            modalLogin.style.display = "block";
        }
    }

    closeModalButton.onclick = function () {
        modalLogin.style.display = "none";
    };
  



};