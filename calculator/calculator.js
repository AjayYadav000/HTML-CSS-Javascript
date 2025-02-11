let c = 0;
function input(value) {
  if (c == 0) {
    document.getElementById("input").value = null;
    document.getElementById("input").value += value;
    c++;
  } else {
    document.getElementById("input").value += value;
  }
}
function clearinput() {
  document.getElementById("input").value = "0";
  c = 0;
}
function calculate() {
  try {
    let answer = eval(document.getElementById("input").value);
    document.getElementById("input").value = answer;
  } catch (error) {
    document.getElementById("input").value = error;
  }
}
