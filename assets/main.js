var fiz = 'Fizz';
var buz = 'Buzz';

//stampare i numeri da 1 a 100
for (var i = 1; i <= 100; i++){
  
  
    if (i%3 == 0 && i%5 == 0 ){ //numeri che hanno modulo di 3 uguale a zero e stampare fizz
    console.log(fiz + buz); }

      else if(i%3 == 0){ //numeri che hanno modulo di 5 uguale a zero e stampare fizz
        console.log(fiz);}
            
            else if(i%5 == 0){ //i numeri che hanno sia modulo di 3 che uguale a zero e stampare fizzbuzz
            console.log(buz);
            }
     else{
        console.log(i);
        } 
}