const myName = "Matthew"
document.querySelector(".article__header").textContent= `Welcome to the ${myName} blog!`;
console.log(document.querySelector(".article__header"))

// Using for loop. //

const articleHeaderEl = document.querySelectorAll(".article__header")
for (let i = 0; i < articleHeaderEl.length; i++) {
    articleHeaderEl[i].classList.add("important");
}
console.log(articleHeaderEl[0]);

// const elements = document.querySelectorAll(".article__header")
// console.log("elements", elements);

// Using bracket notation. //

// elements[0].classList.add("important");
// elements[1].classList.add("important");

// Using forEach loop. "header" equivalent to "articleHeaderEl[i] in for loop above." //

// elements.forEach(header => {
//     header.classList.add("important");
// })

const dashEl = document.querySelector(".dashed")
dashEl.classList.remove("dashed");

const footerEl = document.querySelector(".article__footer")