let display=document.querySelector(".result");
let button=document.querySelectorAll(".number");

button.forEach(function(data){
    data.addEventListener("click",function(){
        if(display.innerHTML==="0"){
            display.innerHTML=data.innerHTML;
        }
        else if(display.innerHTML==="error"){
            display.innerHTML=data.innerHTML;
        }
        else{
             display.innerHTML+=data.innerHTML;
        }
   
})
})

let del=document.querySelector(".del");
del.addEventListener("click",function(){
 display.innerHTML=display.innerHTML.slice(0,-1);  
})

document.querySelector(".clscre").addEventListener("click",function(){
    display.innerHTML="0";
})

let cal=document.querySelector(".cal")
cal.addEventListener("click",function(){
    try{
 display.innerHTML=eval(display.innerHTML);
    }
    catch{
        display.innerHTML="error"
    }
   
})