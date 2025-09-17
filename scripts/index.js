import { values } from "../data/value.js";

let htmlContainer = "";

values.forEach((value) => {
  htmlContainer += `
  <button class="number" id = "${value.id}" data-value="${value.numb}"><span >${value.numb}</span></button>
  `;

  //console.log(htmlContainer);
  document.querySelector(".numbers").innerHTML = htmlContainer;
});

const handleClickNumber = () => {
  window.location.href = "thank-you.html";
};

const buttons = document.querySelectorAll(".number");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' to the clicked button
    button.classList.add("active");
    const num = button.dataset.value;
    localStorage.setItem("number", JSON.stringify(num));
    console.log(localStorage);
  });
});

document
  .querySelector(".submit-button")
  .addEventListener("click", handleClickNumber);
