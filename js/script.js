window.onload = function () {
  const handsPlayer = document.querySelectorAll(".player > img");
  const result = document.querySelector(".result img");
  let resetPlay;
  var player;
  var oponent;

  function changeHand() {
    for (let i = 0; i < handsPlayer.length; i++) {
      handsPlayer[i].addEventListener("click", (t) => {
        if (resetPlay) {
          resetPlay.style.opacity = 0.4;
        }

        t.target.style.opacity = 1;
        player = t.target.getAttribute("opt");
        resetPlay = t.target;

        setTimeout(() => {
          handOponent();
        }, 2000);
      });
    }
  }
  changeHand();

  function handOponent() {
    var handEnemie = document.querySelectorAll(".oponent img");
    var handPos = Math.floor(Math.random() * 3);
    handEnemie[handPos].style.opacity = 1;

    setTimeout(() => {
      defineWinner(handEnemie[handPos], player);
    }, 2500);

    function resetGame() {
      setTimeout(() => {
        handEnemie[handPos].style.opacity = 0.4;
        resetPlay.style.opacity = 0.4;
        result.src = "assets/change.png";
        location.href = "index.html";
      }, 4000);
    }
    resetGame();
  }

  function defineWinner(handEnemie, player) {
    oponent = handEnemie.getAttribute("opt");
    if (player == "rock") {
      if (oponent == "rock") {
        result.src = "assets/empate.png";
      }

      if (oponent == "paper") {
        result.src = "assets/lose.png";
      }

      if (oponent == "scisor") {
        result.src = "assets/win.png";
      }
    }

    if (player == "paper") {
      if (oponent == "rock") {
        result.src = "assets/win.png";
      }

      if (oponent == "paper") {
        result.src = "assets/empate.png";
      }

      if (oponent == "scisor") {
        result.src = "assets/lose.png";
      }
    }

    if (player == "scisor") {
      if (oponent == "rock") {
        result.src = "assets/lose.png";
      }

      if (oponent == "paper") {
        result.src = "assets/win.png";
      }

      if (oponent == "scisor") {
        result.src = "assets/empate.png";
      }
    }
  }
};
