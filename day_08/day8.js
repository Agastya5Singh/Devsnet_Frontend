function create(){

    for(let i = 0; i < 400; i++)
{        
        const newBtn = document.createElement("button");
        newBtn.addEventListener("click", clicked);
        const main = document.getElementById("content");
        main.appendChild(newBtn);
       
 newBtn.className = "btn-red";
     }
 }
function clicked(b){
    if(b.target.className == "btn-red"){
        b.target.className = "btn-white";
    }
    else{
        b.target.className = "btn-red"
    }
}

create();