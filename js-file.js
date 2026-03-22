// DOM JavaScript file

const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph); 
// If you want to add it to the body element, then:
// document.body.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = 'blue';
container.appendChild(heading3);

const boxedDiv = document.createElement("div");
boxedDiv.style.border = '1px solid black';
boxedDiv.style.backgroundColor = 'pink';

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

// const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";

boxedDiv.appendChild(heading1);
boxedDiv.appendChild(paragraph);
container.appendChild(boxedDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) {
    //   console.log(e.target);
    e.target.style.background = "blue";
});