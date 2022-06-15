
var container=document.querySelector(".container");

document.querySelector("button").addEventListener("click",refresh);


// container.addEventListener("click",function(){
var i=1;
function refresh(){
    var random1=Math.floor(Math.random()*6+1);
    var random2=Math.floor(Math.random()*6+1);

    var str1="images/dice"+random1+".png";
    var str2="images/dice"+random2+".png";

    
    var win="";
    if(random1===random2){
        win="It's a tie!!";
        
        
    }
    else if(random1>random2){
        win="🚩Player 1 wins";
        
    }
    else{
        win="Player 2 wins🚩";
    }
    
    document.querySelector(".img1").setAttribute("src",str1);
    document.querySelector(".img2").setAttribute("src",str2);
    rota1();
    document.querySelector("h1").textContent=win;
    
}
function rota1(){
    container.style.transition="transform 1.5s";
    if(i===1){
        container.style.transform="rotateY(360deg)";
        i=0;
    }
    else{
        container.style.transform="rotateY(0deg)";
        i=1;
    }
    
    
}
