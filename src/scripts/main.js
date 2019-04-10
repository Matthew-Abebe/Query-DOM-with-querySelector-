const myName = "Matthew"
document.querySelector(".article__header").textContent= `Welcome to the ${myName} blog!`;
console.log(document.querySelector(".article__header"))

document.querySelector(".article__header").classList.add("important")

const dashEl = document.querySelector(".dashed")
dashEl.classList.remove("dashed");

const footerEl = document.querySelector(".article__footer")