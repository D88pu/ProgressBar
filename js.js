var  selectField = document.getElementById("selectField")
var  selectText = document.getElementById("selectText")
var  options = document.getElementsByClassName("options")
var list = document.getElementById("list");
var  arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function(){// SelectField tuch  click class tuch
    list.classList.toggle("hide");// Open
    arrowIcon.classList.toggle("rotate");// rotate 180deg
}

for(option of options ){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide"); // Cluse
        arrowIcon.classList.toggle("rotate");//rotate 180deg
    }
}