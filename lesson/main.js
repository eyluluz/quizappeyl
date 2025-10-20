import { sayHello } from "./greet.js";

console.log(sayHello("Kalle"));

const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert("Du tryckte: " + e.target.textContent);
  }
});

const options = ["Ja", "Nej", "Kanske"];
options.forEach((pelikan, pelle) => {
  const btn = document.createElement("button");
  btn.textContent = pelikan;
  btn.dataset.swan = pelle;
  container.appendChild(btn);
});
