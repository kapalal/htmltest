//1.Print all number between -10 and 19

var count = -10;
alert("EXERCISE1");
console.log("Print all number between -10 and 19");
while(count <= 19) {
console.log(count);
  count++;
}

//2.Print all even numbers between 10 and 40

var num1 = 10;
alert("EXERCISE2");
console.log("Print all even numbers between 10 and 40");
while(num1 <= 40) {
  console.log(num1);
  num1+=2;
}



//3.Print all odd numbers between 300 and 333

var num2 = 300
alert("EXERCISE3");
console.log("Print all odd numbers between 300 and 333");
while (num2 <= 333) {
  if (num2 % 2 !== 0) {
      console.log(num2);
    }
num2++;
}


//4.Print all numbers divisible by 5 AND 3 between 5 and 50
var num3 = 5
alert("EXERCISE4");
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (num3 <= 50) {
  if (num3 % 5 === 0 && num3 % 3 === 0)  {
      console.log(num3);
    }
num3++;
}
