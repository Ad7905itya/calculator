let btn = document.querySelectorAll(".btn");
let input = document.querySelector("input");

btn[0].addEventListener("click",()=>{
    input.value = "";
})
btn[1].addEventListener("click",()=>{
    input.value = input.value.toString().slice(0,-1);
});
btn[2].addEventListener("click",()=>{
    input.value += ".";
    
});
btn[3].addEventListener("click",()=>{
    input.value += "/";
});
btn[4].addEventListener("click",()=>{
    input.value += "7";
});
btn[5].addEventListener("click",()=>{
    input.value += "8";
});
btn[6].addEventListener("click",()=>{
    input.value += "9";
});
btn[7].addEventListener("click",()=>{
    input.value += "*";
});
btn[8].addEventListener("click",()=>{
    input.value += "4";
});
btn[9].addEventListener("click",()=>{
    input.value += "5";
});
btn[10].addEventListener("click",()=>{
    input.value += "6";
});
btn[11].addEventListener("click",()=>{
    input.value += "-";
});
btn[12].addEventListener("click",()=>{
    input.value += "1";
});
btn[13].addEventListener("click",()=>{
    input.value += "2";
});
btn[14].addEventListener("click",()=>{
    input.value += "3";
});
btn[15].addEventListener("click",()=>{
    input.value += "+";
});
btn[16].addEventListener("click",()=>{
    input.value += "0";
});
btn[17].addEventListener("click",()=>{
    input.value += "00";
});
btn[18].addEventListener("click",()=>{
    input.value = eval(input.value);
});