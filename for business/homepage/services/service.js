let button1 = document.querySelector(".button1")
let modal1 = document.querySelector('#modal1')
button1.addEventListener('click', function () {
    modal1.classList.add("active")
})
let closebutton1 = document.querySelector("#close1")

closebutton1.addEventListener('click', function () {
    modal1.classList.remove("active")
})
// var hiddencontainer = document.querySelector(".hiddencontainer")
// button1.addEventListener("click", function(){
//     hiddencontainer.style.visibility = "visible"
//     // hiddencontainer.style.display = "initial"
// })

// var cover = document.querySelectorAll('cover')
// let imgs = document.querySelector('imgs')
// imgs.addEventListener("hover", function(){
//     cover.classList.add("active")
// })
// var eachpic = document.querySelectorAll(".eachpic")

// function popup(x) {
    
//     x.style.cursor = "pointer"
//     x.children[0].classList.add("active")
// }
// function normal(x) {
//     x.children[0].classList.remove("active")
// }
