let run1 =(a,b)=>{

let text1=document.querySelector("#text1")


if (a>b){
    text1.innerHTML=`a`;

}

else {
    text1.innerHTML=`b`;


}




}

let sub=()=>{

let errorname=document.querySelector("#errorname")


text2=document.querySelector("#text2").value;
if (text2===""){

    errorname.innerHTML=`please enter ur name`;

    return false;
}

}
