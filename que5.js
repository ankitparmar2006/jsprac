
let run1=()=>{


let age =prompt("enter your age");

if (age >=18){
    alert("greater than")
}
else {
    alert("smaller than")
}
}

//-------------------------------------------------------------------------


let run2 =()=>{

let ans1 =confirm("course completed")
let ans2 =confirm("certificate completed")

if (ans1 && ans2){
    alert("u are certified")
}

else{
    alert("no sorry")
}

}

//-------------------------------------------------------------------------


let run3 = ()=>{
let price=prompt("enter item price");
let dis=confirm("u want discount");

if (dis){
    dis=price-(price*0.10)

    alert(dis)
}
else {
    alert("no discount")
}


}

//-------------------------------------------------------------------------


let run4 =()=>{
    let a =prompt("enter number")

    if (a%2==0){
        alert("even")
    }


else{
    alert("odd")
}
}

//-------------------------------------------------------------------------

let run5 =()=>{
    let a =confirm("u want to delete")

    if (a){
        alert("delted")
    }


else{
    alert("cancelled")
}
}



 //========================================================================================== -->


// let number;

// do {

//     number = parseInt(prompt("enter a number 1 to 10"));


// } while (number<=10);
// alert(number);


    let run6 =()=> {

        let day=parseInt(prompt("enter number"))

 switch (day) {

case 1 : alert("monday")

break;

case 2 : alert("tueday")
break;


case 3 : alert("wedday")
break;


case 4 : alert("thusday")

break;

case 5 : alert("friday")

break;


case 6 : alert("satday")

break;


case 7 : alert("sunday")

break;





 }


    }


    //==============================================================================



    let run7 =()=>{

        let i4=document.querySelector("#i4");

        i4.style.backgroundColor="red"


    }

    
    
    let run8 =()=>{

        let i5=document.querySelector("#i5");


        if (i5.style.display=="none"){

            i5.style.display="block"
        }


        else {
               i5.style.display="none"
        }


    }


    

    let run9 =()=>{

        let i6=document.querySelector("#i6");

        i6.style.backgroundColor="red"

        i6.innerHTML="my name is ankit"


    }


    

    let run10 =()=>{

        let i10=document.querySelector("#i10");

        i10.style.borderColor="red"

        i10.innerHTML="my name is ankit"


    }


    
    // let run11 =()=>{

    //     let i12=document.querySelector("#i12");

    //     i12.style.borderColor="green"

    //     i12.innerHTML="my name is ankit"
    //     temp;


    // }


    let temp=0;

    let inc =()=>{

        let i12=document.querySelector("#i12");


        i12.innerHTML=temp;
temp++;



    }


    

    let dec =()=>{

        let i12=document.querySelector("#i12");


        i12.innerHTML=temp;
temp--;



    }



   //===========================================================================================================//
      //===========================================================================================================//
         //===========================================================================================================//



         
    

    let run13 =(a)=>{


        let i13=document.querySelector("#i13")

        i13.innerHTML=`the squar is ${a*a}`

      

    }

    

    let run14 =(a,b)=>{




      

        if (a>b){


            let i14=document.querySelector("#i14")
            i14.innerHTML=` a is grater`



        }

     else   {


            let i14=document.querySelector("#i14")
            i14.innerHTML=` b is grater`



        }

    }


//==================================================================================================




let run15 =(a,b)=>{


    let i15=document.querySelector("#i15")

    i15.innerHTML=`the multi is ${a*a}
    
    the addition is ${a+b} <br>

        the division  is ${a/b} <br>

            the substraction is ${a-b}  <br>




    
    
    `

  

}