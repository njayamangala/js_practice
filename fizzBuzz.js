/* Print 1 to 100
    if num /3 == 0 print fizz
    if num /5 ===9 print buzz
    if num /3 and 5 print fizzBuzz
*/

for(let num =1; num <=100 ; num++){
    if(num %3 == 0 && num %5 ==0){
        console.log('FizzBuzz');
    }else if(num %3 == 0){
        console.log('FIZZ')
    }else if(num %5 == 0){
        console.log('BUZZ')
    }else{
        console.log(num)
    }
}