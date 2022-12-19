const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// for dino to jump
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }

  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

document.addEventListener("keydown", function (event) {
  jump();
});


//for checking collision

let isAlive = setInterval(function() {
    // if position of dino = position of cactus, collision occurs
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //
    if (cactusLeft < 70 && cactusLeft > 0 && dinoTop>= 100) {
        alert("Game Over");
    }


}, 300);