var btn1=document.getElementById("btn1");
var err1=document.getElementById("err1");

//function display(){
// alart("btn clicked")
//}


function display(){
 try{
    alart("btn clicked")
 }   catch (error){
    err1.innerText=error.message
 }
 
}


function check(){
    var Ash=document.getElementById("Ashwin").value;
    var Ach=document.getElementById("Achu")
    try{
        if(Ash=="")throw "Box cannot be empty";
        if(isNaN(Ash))throw "value is not a number";
        if(Ash<10)throw"value should be greater than 10";
        if(Ash>20)throw"value should be less than 20";
    } catch(error){
            Ach.innerText=error
        
    }
    finally{
            document.getElementById("Ashwin").value=""
    }
}
