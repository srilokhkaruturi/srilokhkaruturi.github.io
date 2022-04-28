function compute(num) {
    var factorialResult = factorialize(num);
    var output = num + "! = " + factorialResult;
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
   // document.body.style.background.color = "purple";
   document.body.style.backgroundColor = "purple";
    return false;
}  

//<script src="factorial.js"></script>

function changeButtonResetColor() {
    // document.body.style.background.color = "purple";
    document.body.style.backgroundColor = "white";
     return false;
 }  


 function processIntro(){
     if (document.getElementById('introButton').value == "See Intro"){
        return "This program demonstrates proficiency in HTML, CSS, JS.";
     }
 }
