let a = [
  document.getElementById("d1"),
  document.getElementById("d2"),
  document.getElementById("d3"),
  document.getElementById("d4"),
  document.getElementById("d5"),
  document.getElementById("d6"),
  document.getElementById("d7"),
  document.getElementById("d8"),
  document.getElementById("d9"),
];
let s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let s1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let c = 0,
  f = 0;
let gameStarted = false;
let gameEnded = false;
let isUserTurn = true;

function userClickListener(event) {
  user(event.target);
}

setdata();

function setdata() {
  a.forEach(function (element, index) {
    element.removeEventListener("click", userClickListener);
  });
}

function startWithUser() {
  if (!gameStarted && !gameEnded) {
    gameStarted = true;
    isUserTurn = true;
    text1();
    enableClicks();
  }
}

function startWithComputer() {
  if (!gameStarted && !gameEnded) {
    gameStarted = true;
    isUserTurn = false;
    enableClicks();
    computer();
  }
}

function enableClicks() {
  a.forEach(function (element, index) {
    element.addEventListener("click", userClickListener);
  });
}

function user(value) {
  if (!gameEnded) {
    text1();
    if (s1[a.indexOf(value)] == 0 && s[a.indexOf(value)] == 0) {
      value.innerText = "x";
      s[a.indexOf(value)] = 1;
      c++;
      checkWinner1();
      if (c != 9 && !gameEnded) setTimeout(computer, 500);
    }
  }
}

function computer() {
  if (!gameEnded) {
    text1();
    let t1 = 1;
    while (t1 != 0) {
      t = Math.floor(Math.random() * 9);
      if (s[t] == 0 && s1[t] == 0) {
        a[t].innerText = "0";
        s1[a.indexOf(a[t])] = 1;
        c++;
        checkWinner2();
        break;
      }
    }
  }
}

function checkWinner1() {
  if (
    (s[0] == 1 && s[1] == 1 && s[2] == 1) ||
    (s[3] == 1 && s[4] == 1 && s[5] == 1) ||
    (s[6] == 1 && s[7] == 1 && s[8] == 1) ||
    (s[0] == 1 && s[3] == 1 && s[6] == 1) ||
    (s[1] == 1 && s[4] == 1 && s[7] == 1) ||
    (s[2] == 1 && s[5] == 1 && s[8] == 1) ||
    (s[0] == 1 && s[4] == 1 && s[8] == 1) ||
    (s[2] == 1 && s[4] == 1 && s[6] == 1)
  ) {
    setTimeout(text2, 300);
    removeEventListeners();
    gameEnded = true;
  } else if (c == 9 && !gameEnded) {
    setTimeout(text4, 300);
    removeEventListeners();
  }
}

function checkWinner2() {
  if (
    (s1[0] == 1 && s1[1] == 1 && s1[2] == 1) ||
    (s1[3] == 1 && s1[4] == 1 && s1[5] == 1) ||
    (s1[6] == 1 && s1[7] == 1 && s1[8] == 1) ||
    (s1[0] == 1 && s1[3] == 1 && s1[6] == 1) ||
    (s1[1] == 1 && s1[4] == 1 && s1[7] == 1) ||
    (s1[2] == 1 && s1[5] == 1 && s1[8] == 1) ||
    (s1[0] == 1 && s1[4] == 1 && s1[8] == 1) ||
    (s1[2] == 1 && s1[4] == 1 && s1[6] == 1)
  ) {
    setTimeout(text3, 300);
    removeEventListeners();
    gameEnded = true;
  } else if (c == 9 && !gameEnded) {
    setTimeout(text4, 300);
    removeEventListeners();
  }
}

function text1() {
  document.getElementById("c2").textContent = "START!";
}

function text2() {
  document.getElementById("c2").textContent =
    "CONGRATULATIONS  USER  WON  THE  MATCH!";
  document.getElementById("c0").style.backgroundColor = "blue";
}

function text3() {
  document.getElementById("c2").textContent =
    "CONGRATULATIONS  COMPUTER  WON  THE  MATCH!";
  document.getElementById("c0").style.backgroundColor = "white";
}

function text4() {
  document.getElementById("c2").textContent = "MATCH DRAW";
  document.getElementById("c0").style.backgroundColor = "brown";
  a.forEach(function (element) {
    element.style.backgroundColor = "white";
  });
}

function removeEventListeners() {
  a.forEach(function (element, index) {
    element.removeEventListener("click", userClickListener);
  });
}

document.getElementById("b3").addEventListener("click", function () {
  // Detach listeners for restart button
  document.getElementById("b1").removeEventListener("click", startWithUser);
  document.getElementById("b2").removeEventListener("click", startWithComputer);

  s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  s1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  c = 0;
  f = 0;
  gameStarted = false;
  gameEnded = false;

  a.forEach(function (element) {
    element.innerText = "";
    element.style.backgroundColor = "yellow";
  });
  document.getElementById("c2").textContent = "CHOOSE COMPUTER OR USER";
  document.getElementById("c0").style.backgroundColor = "green";
  // Reattach the event listeners
  document.getElementById("b1").addEventListener("click", startWithUser);
  document.getElementById("b2").addEventListener("click", startWithComputer);
  setdata();
});

document.getElementById("b1").addEventListener("click", startWithUser);
document.getElementById("b2").addEventListener("click", startWithComputer);

window.onload = () => {
  document.getElementById("c2").textContent = "CHOOSE COMPUTER OR USER";
};
