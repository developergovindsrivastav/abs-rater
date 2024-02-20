var a = document.querySelector(".primary-btn")
var b = document.querySelector("#fileinput").value
var c = document.querySelector(".answerh");

a.addEventListener("click", function () {
   
        let rn = Math.floor(Math.random()*80 )
        console.log(rn)
        c.innerHTML = rn
    
})


