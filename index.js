let count = 0;

const countElement = document.getElementById("count")
const countSubtractBtn = document.getElementById("subtract")
const countAddBtn = document.getElementById("add")

countElement.innerText = count;

countSubtractBtn.addEventListener("click", () => {
    alert("NO WAYYYYY!!! YOU CANNOT REDUCE YOUR BODY COUNT!!!");
    count = count + 1000;
    countElement.innerText = count;
})

countAddBtn.addEventListener("click", () => {
    count++;
    countElement.innerText = count;
})
