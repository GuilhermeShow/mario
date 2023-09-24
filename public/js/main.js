const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gamerover = document.getElementById("gamerover");
let contador = document.getElementById("contador");
const nuvem = document.getElementById("nuvem");
const reiniciar = document.getElementById("reiniciar");

document.addEventListener("keydown", () => {

   mario.classList.add("jump")

   setTimeout(() => { 

    mario.classList.remove("jump")
   }, 700)

    const loop = setInterval(() => {

    const pipeErrou = pipe.offsetLeft;
    const marioJump = +window.getComputedStyle(mario).bottom.replace("px", "")

    if(pipeErrou < 130 && pipeErrou >0 && marioJump < 70) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipeErrou}px`

        mario.style.animation = "none"
        mario.style.left = `${marioJump}px`
        mario.src= "./gifs/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "40px"

        nuvem.style.animation = "none"

        gamerover.classList.add("game_over")

        gamerover.innerText = "Gamer over"  
        
    }
   }, 10)
})

