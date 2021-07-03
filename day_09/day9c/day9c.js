for(let i = 0;i < 36;i++){
    let x = document.createElement("BUTTON");
    x.classList.add("x");
    let y = document.getElementById("y");
    y.appendChild(x);
    }
    let booked = 0;
    let remaining = 36;
    let a = document.querySelectorAll("BUTTON");
    let b = document.querySelectorAll("span");
    for(let i = 0;i < 36;i++){
        a[i].addEventListener("click", (c) =>{
            if(c.target.className == "x"){
                c.target.className = "booked";
                remaining--;
                booked++;
                b[0].innerHTML=booked;
                b[1].innerHTML=remaining;
            }
            else{
                c.target.className = "x";
                remaining++;
                booked--;
                b[0].innerHTML=booked;
                b[1].innerHTML=remaining;
            }
        })
    }