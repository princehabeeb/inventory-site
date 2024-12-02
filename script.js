let submit = document.querySelector("#submit");
let activeContainer = document.querySelector(".container");
let itemName = document.getElementById("name");
let image = document.getElementById("choose-file");
let number = document.getElementById("number");
let amount = document.getElementById("amount");
let date = document.getElementById("date");
let containContainer = document.getElementById("contain-container");

submit.addEventListener("click", () => {
    alert(itemName)
  if (
    itemName.value.trim() !== "" &&
    amount.value.trim() !== "" &&
    number.value.trim() !== "" &&
    date.value.trim() !== "" &&
    itemName.value.trim() !== ""
  ) {
    active();
    itemName.value = "";
    amount.value = "";
    date.value = "";
    number.value = "";
    image.value = "";
  }
});

const active = () => {
  let div = document.createElement("div");
  div.classList.add("container");
  let img = document.createElement("img");
  img.src = image;
  let paraOne = document.createElement("p");
  paraOne.setAttribute("id", "name-active");
  paraOne.innerText = itemName.value;
  let paraTwo = document.createElement("p");
  paraTwo.setAttribute("id", "number-active");
  paraTwo.innerText = number.value;
  let paraThree = document.createElement("p");
  paraThree.setAttribute("id", "amount-active");
  paraThree.innerText = amount.value;
  let paraFour = document.createElement("p");
  paraFour.setAttribute("id", "date-active");
  paraFour.innerText = date.value;
  let editItem = document.createElement("li");
  editItem.classList.add("edit");
  editItem.setAttribute("onclick", "edit");
  editItem.innerText = "edit";
  let deleteItem = document.createElement("li");
  deleteItem.classList.add("delete");
  deleteItem.setAttribute("onclick", "delete");
  deleteItem.innerText = "delete";

  div.appendChild(img);
  div.appendChild(paraOne);
  div.appendChild(paraTwo);
  div.appendChild(paraThree);
  div.appendChild(paraFour);
  div.appendChild(editItem);
  div.appendChild(deleteItem);
  containContainer.appendChild(div);
};
