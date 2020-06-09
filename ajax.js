$(document).ready(function(){

       $.get("https://jsonplaceholder.typicode.com/todos",(res,status)=>{

          if(status=="success") 
          {
            var output = "";
            for (var i = 0; i < res.length; i++)
             {
                output += "<tr><td>" + res[i].userId + "</td><td>" + res[i].id+ "</td><td>" 
                            + res[i].title + "</td><td>" + res[i].completed + "</td><td>" ;
           
                            if(res[i].completed==true) 
                            {
                                output+="<input type='checkbox' checked disabled></td></tr>";  
                            }
                            else
                            {
                                output+="<input type='checkbox' class='checkBox' onchange='check()'></td></tr>"; 
                            } 
           
             }
            $("#content").append(output);
          }               
          if(status=="error")   console.log("error");
        })
    })

function check()
{
    var promise = new Promise(function(resolve,reject){
        
        var count=0;
    var list= document.getElementsByClassName("checkBox")
    console.log(list.value);
    console.log(list.length);
    for(let i=0;i<list.length;i++) 
    {
         if(list[i].checked)
            {
                console.log(list[i]);
               count+=1;
            }
    }  
    console.log(count);
    if(count===5)
    {
        newFunction(resolve);
    }
    else if (count <5){
        newFunction_1(reject);
    }
        
        
 
   });

   promise
   .then(function(s){
       alert(s)
   })
   .catch(function(e){
       alert(e)
   })

    

    function newFunction_1(reject) {
        reject("Not Completed 😞😞😞");
    }

    function newFunction(resolve) {
        resolve(" Congrats😃😃😃 5 Tasks have been Successfully Completed");
        console.log("completed");
    }
}


