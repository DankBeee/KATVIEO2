const inputs = document.querySelectorAll(".input")

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus")
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
    
}

inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})
activeblur = document.querySelector(".activeblur")
// button1 = document.querySelector(".blur1")
// button1.addEventListener("click", function(){
//     activeblur.classList.add("active")
// })


let button2 = document.querySelector(".demoreq")
let modal1 = document.querySelector('#modal1')
button2.addEventListener('click', function () {
    modal1.classList.add("active")
})
let closebutton1 = document.querySelector("#close1")

closebutton1.addEventListener('click', function () {
    modal1.classList.remove("active")
})