function generaterandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let randomcolor=`rgb(${red},${green},${blue})`;
    return randomcolor;
}
let btn=document.querySelector("button");
btn.addEventListener("click", function(){
    let box=document.querySelector("#colorbox");
    col=box.style.backgroundColor=generaterandomcolor();
    let head=document.querySelector("h3");
    head.innerText=col;
    // col=generaterandomcolor();
    box.style.boxShadow= `10px 10px 100px ${col}`;
    let but=document.querySelector("button");
    head.style.textShadow=`10px 10px 10px ${col}`;
    let bo=document.querySelector("button");
    bo.style.backgroundColor=col;
    bo.style.boxShadow=`10px 10px 40px ${col}`;

});
