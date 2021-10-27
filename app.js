var num1 = Math.floor(Math.random() * 6) + 1;
var rannum1 = "img/" + num1 + ".png";
var num2 = Math.floor(Math.random() * 6) + 1;
var rannum2 = "img/" + num2 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", rannum1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", rannum2);
if (rannum1 > rannum2) {
  document.querySelector(".p1").innerText = "Player 1 Won";
} else if (rannum1 < rannum2) {
  document.querySelector(".p2").innerText = "Player 2 Won";
} else {
  document.querySelector(".draw").innerText = "Its Draw";
}
