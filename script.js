let submit = document.querySelector("#submit");
let activeContainer = document.querySelector(".container");
let itemName = document.getElementById("name");
let image = document.getElementById("choose-file").src;
let number = document.getElementById("number");
let amount = document.getElementById("amount");
let date = document.getElementById("date");

submit.addEventListener("click", () => {
    if(itemName.value.trim)
});

const active = (e) => {
    let div = document.createElement("div");
    div.classList.add("container")
    let img = document.createElement("img");
    img.src = image;
    let paraOne = document.createElement("p");
    paraOne.setAttribute("id", "name=active");
    paraOne.innerText = e;
    let paraTwo = document.createElement("p");
    paraTwo.setAttribute("id", "number-active");
    paraTwo.innerText = number;
    let paraThree = document.createElement("p");
    paraThree.setAttribute("id", "amount-active");
    paraThree.innerText = amount;
    let paraFour = document.createElement("p");
    paraFour.setAttribute("id", "date-active");
    paraFour.innerText = date;

    div.appendChild(img);
    div.appendChild(paraOne);
    div.appendChild(paraTwo);
    div.appendChild(paraThree);
    div.appendChild(paraFour);
}
