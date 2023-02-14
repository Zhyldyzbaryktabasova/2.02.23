function nameIs (a) {
  console.log(a);
}
nameIs ("Jyldyz");
nameIs ("name");


function myCity (a) {
 console.log(a);
}
myCity ("Karakol");


function myCar (a) {
  console.log(a);
} 

myCar ("Lexus");  


function area(width,height) {
  let result= width * height;
  return result;
}

let a =area(5,5);
let b = area(6, 6);

if (a<=b) {
  console.log("Yes it does");
}
else {
  console.log("No it doesn't");
}


function getUSD(kgs) {
  return kgs * 87.5;
}
let example1 = getUSD(100);
let example2 = getUSD(150);
console.log(example1);
console.log(example2);

function getFarenheit(c) {
  return c * 1.8 +32
}
getFarenheit(28);

getKilometers(30);// мили в км
getComputedStyle(30);//дюймы в см
 

function getKilometers(mill) {
  console.log(mill * 1.6)
 }
 getKilometers(30);


 getKilometers(1600);

 function getComputedStyle(a, b) {
  console.log(a + b)
 }
getComputedStyle("hi", 23)
