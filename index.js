const status1=document.querySelector("h3");
const addd=document.querySelector(".add");
+
console.log(status1.textContent);
var check=0
addd.addEventListener("click",function(){
    if(check==0){
        status1.innerHTML="Friends";
        status1.style.color="green";
        addd.style.backgroundColor="grey";
        addd.style.color="white";
        addd.innerHTML="Remove";
        check=check+1;
    }
    else{
        status1.innerHTML="Stranger";
        status1.style.color="red";
        addd.style.backgroundColor="green";
        addd.style.color="white";
        addd.innerHTML="Add Friend";
        check=check-1;
    }
});
// remove.addEventListener("click",function(){
//     status1.innerHTML="Stranger";
//     status1.style.color="red";
// })

