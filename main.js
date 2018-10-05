 //Write the function printInt(n) taking one parameter n 
    //and print all natural numbers from 1 to n in console.

function printInt(n){
    for( var i =1; i<=n; i++) {
    console.log(i);
    }
} 

 //Write the function printIntRev(n) taking one parameter n 
    // and  print all natural numbers in reverse in console (from n to 1).

function printIntRev(n){
    for( var i = n; i>= 1; i--){
         console.log(i);
    }
   
}

  //Write the function checkInput(x) taking one parameter x 
      //and return the string ‘number’ if x is a number; 
       // return the string ‘string’ if x is a string; 
        //and return boolean if x is a boolean. Otherwise returns -1.

    function checkInput(x){
        if( typeof(x) === "number"){
            return "number";
    }else if (typeof(x)=== "string"){
        return "string";
    }else if (typeof(x)=== "boolean"){
        return "boolean";
    }else{
        return -1;
    }
}
 
    console.log(checkInput());

 //Write the function simpleEvenAdding(num) taking a number
     // and add up all the even numbers from 1 to num.

     function simpleEvenAdding(num){
         var result = 0;
         for ( var i = 1; i <= num; i++){
             if (i%2 === 0){
                 result = result + i;
             }
         }
         return result;
     }
    console.log(simpleEvenAdding(num));

 // Write the function letterCapitalize(str) taking a string 
     //and capitalize the first letter of each word. 
       //The given words will be separated by only one space.  
       
       function letterCapitalize(str){
           var splitedArray = str.split(" ");
           var result = "";
           for (var i = 0; i < splitedArray.length; i++){
           result += " " + splitedArray[i][0].toUpperCase() + splitedArray[i].slice(1);
       }
     return result.slice(1);
    }
    console.log(letterCapitalize("hello this is MSIMBO")); 
  // Write the function simpleReverse(str) taking a string 
         //and return the string in reversed order.

         function simpleReverse(str){
             var myString = str.split("");
             var result = "";
             for(var i= myString.length -1; i >= 0; i--){
             result += myString[i]; 
            }
            return result;
    }
     
    console.log(simpleReverse("Hello World"));

 //Write the function findDiff(arr) taking an array of numbers as parameter 
       //and return the difference between the maximum number and the minimum number (max - min).

       function findDiff(arr){
          // var max = Math.max(...arr);
           //    var min = Math.min(...arr);
          //     return max - min;
           var max = arr[0];
           var min = arr[0];
            arr.forEach(function(number) {
               if (number > max) {
                max = number;
                }
                if (number < min) {
                    min = number;
                }
            });    
            return max - min;
}       
       console.log(findDiff([1,10]));

  // Write the function timeConvert(num) taking a number as parameter 
      //and return the number of hours and minutes the parameter converts to.
        // Separate the number of hours and minutes with a colon.  

        function timeConvert(num){
            var hours = Math.floor(num/60);
            var minutes = num % 60;
            return hours + ":" + minutes;
        }
        console.log(timeConvert(515));
 //Write the function findStr(str, long) taking two strings as parameters 
    //and return how many str you can find in long.
    // Assume Str is not empty string.

    function findStr(str, long){
        var  counter = 0;
      for(i=0; i<= long.length - str.length; i++){
          if( long.slice(i, i + str.length) === str){
               counter++
          }
      }
             return counter;
    }
      console.log(findStr("hi", "dasdhidasdahidashi"))

 //Write the function selfDividingNumbers(left, right) taking two number bound as parameters
     // and returns an array of every possible self dividing number between
      //them, including the bounds.

      function selfDividingNumbers(left, right){
      }