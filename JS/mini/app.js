let btn=document.createElement("button")
let input=document.createElement("input")
// document.querySelector("button")
btn.innerText="click me";


let Body=document.querySelector("body")
Body.append(btn)
Body.append(input)

btn.id="btn";
// let input=document.querySelector("input")
input.placeholder="username";

let btn1=document.querySelector("#btn")
// btn1.style.backgroundColor="blue";
// btn1.style.color="white";
// btn1.setAttribute("background-color","blue");
btn1.setAttribute("Style","color:white;background-color:blue");
// btn1.addAttribute();
let head=document.createElement("h1");
head.innerHTML="<u>DOM Practice</u>";
// head.style.textDecoration="underline"
head.style.color="purple"
Body.append(head)

let para=document.createElement("p")
para.innerHTML="Apna College <b>Delta</b> Practice"
Body.append(para)


