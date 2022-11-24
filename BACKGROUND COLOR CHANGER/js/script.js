"use strict";
let color = [
    "red",
    "blue",
    "green",
    "pink",
    "orange",
    "purple",
    "black",
];
let i = 0;
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    const body = document.querySelector("body");
    body.style.background = color[i];
});
//# sourceMappingURL=script.js.map