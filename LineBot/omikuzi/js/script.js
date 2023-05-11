const fortunes = [
  "大吉",
  "中吉",
  "小吉",
  "吉",
  "末吉",
  "凶",
  "大凶"
];

document.addEventListener("DOMContentLoaded", function() {
  getFortune();
});

function getFortune() {
  const result = document.getElementById("result");
  const index = Math.floor(Math.random() * fortunes.length);
  result.innerHTML = fortunes[index];
}