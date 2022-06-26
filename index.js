function sumOfDigits(number){
   if(number < 10){
     return number;
   }
   return number % 10 + sumOfDigits(Math.floor(number/10));
}