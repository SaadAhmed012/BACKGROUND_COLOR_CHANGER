let color: string[] = [
  "red",
  "blue",
  "green",
  "pink",
  "orange",
  "purple",
  "black",
];
let i = 0;
let btn = document.querySelector("button") as HTMLButtonElement;
btn.addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  const  body =  document.querySelector("body") as HTMLBodyElement;
 body.style.background  = color[i] ;
});
