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