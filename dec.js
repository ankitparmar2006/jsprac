let run1 =()=>{

let age=prompt("enter your age");

    let text1=document.querySelector=("#text1");

let result=age>=18 ? "grater":"smaller";

alert (result);

    


}

// -------------------------------------------------------------------

let run2 =()=>{

    let ans1=confirm("course completed ?");

    let ans2=confirm("certificate completed ?");

if (ans1 && ans2 ){
    
    alert ("you are eligible");

}
    else {
        alert ("you are not eligible");

    }
    
        
    }
    
    // -------------------------------------------------------------------



    let run3 =()=>{


        let price=prompt("enter price of your item");



        let dis=confirm(" you want discount ?");
    
    
    if (dis){
        
let urprice= (price -(price*0.10)    )

alert(urprice);

    }
        else {
            alert ("no dis");
    
        }
        
        }
        

        // -------------------------------------------------------------------




        let run4 =()=>{


            let marks=prompt("enter your exam marks");
    
    
    
        
        
        if (marks>=33){
    
    
    alert("pass");
    
        }
            else {
                alert ("FAIL");
        
            }
            
            }






   // -------------------------------------------------------------------



   let run5 =()=>{


text5=document.querySelector("#text5")

text5.style.backgroundColor="purple"
    
    }



      // -------------------------------------------------------------------


      


   let run6 = ()=>{


   let textt6=document.querySelector("#text6")
  

    if (textt6.style.display=="none"){
        textt6.style.display="block"
    }
    else {
        textt6.style.display="none"
    }
        
        }
    
    
    
          // -------------------------------------------------------------------
    
 

          let run7 =()=>{


            let text7=document.querySelector("#text7")
            text7.innerHTML=" BMW "
                 
                 }


                 
    
          // -------------------------------------------------------------------
    
          let temp=0;

          let inc =()=>{


            let text7=document.querySelector("#text8")
            text7.innerHTML=temp;
            temp++;
                 
                 }

                 let dec =()=>{


                    let text8=document.querySelector("#text8")
                    text8.innerHTML=temp;

                    temp--;
                         
                         }
    // -------------------------------------------------------------------


  let  run9 = (a) => {

let text9=document.querySelector("#text9");
text9.innerHTML=`the square of ${a*a}`;


  }

      // -------------------------------------------------------------------


      let  run10 = (a,b) => {

        let text10=document.querySelector("#text10");
        text10.innerHTML=`the square of ${a*b}`;
        
        
          }

   // -------------------------------------------------------------------

   
   let  run11 = (a,b) => {

    let text11=document.querySelector("#text11");
if (a>b){
    text11.innerHTML=` is greater  ${a}`;

}

else {
    text11.innerHTML=` is greater  ${b}`;

}

    
    
      }

// -------------------------------------------------------------------

let  run12 = (a,b) => {

    let text10=document.querySelector("#text12");
    text10.innerHTML=`addition is =   ${a+b}  <br>
    substruction is  =  ${a-b} <br>
     multiplication is  =  ${a*b} <br>
     division is =  ${a/b}`;
    // text10.innerHTML=`the square of`;

    // text10.innerHTML=`the square of  `;

    // text10.innerHTML=`the square of ${a/b}`;


    
    
      }

// -------------------------------------------------------------------

