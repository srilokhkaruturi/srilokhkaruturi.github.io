function compute(num) {
    var factorialResult = factorialize(num);
    var output = num + "! = " + factorialResult;
    changeButtonColor();
    alert(output);

}

function factorialize(num) {
    if(num == 0 || num== 1){
        return 1;
    }else{
        return num * factorialize(num-1);
    }
   
}


function getCreatorOne(){
    return "Srilokh Karuturi (SXK180163)";
}




function getCreatorTwo(){
    return "Virinchi Racherla(VRR180001)";
}

function changeButtonColor() {
   document.body.style.backgroundColor = "purple";
    return false;
}  


function changeButtonResetColor() {
    document.body.style.backgroundColor = "white";
     return false;
 }  


 function processIntro(){
    var buttonValue = document.getElementById('introButton').textContent;

     if( buttonValue== "See Intro"){
        document.getElementById('introButton').textContent = "Close Button";

        return "This program demonstrates proficiency in HTML, CSS, JS.";
     }
     else{
         
         document.getElementById('introButton').textContent = "See Intro";
         return ""
     }
 }
