let count = 0;


const countElement = document.getElementById("count")
const countSubtractBtn = document.getElementById("alert")
const countAddBtn = document.getElementById("add")

countElement.innerText = count;

countSubtractBtn.addEventListener("click", () => {
    alert("NO WAYYYYY!!! YOU CANNOT REDUCE BODY COUNT!!!");
})


countAddBtn.addEventListener("click", () => {
    count++;
    countElement.innerText = count;
})
