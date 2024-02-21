// chapter 17 to 20 Array and For loops

// Qno#1

var emptyArray = [];

for(var i = 0 ; i < 10 ; i++){
    emptyArray[i] = [];
}
console.log(emptyArray)

// Qno#2

var arrayMatrix = [
    [0, 1, 2, 3 ,"</br>"],
    [1, 0, 1, 2,"</br>"],
    [2, 1, 0, 1,"</br>"]
  ];
  
  
  for ( var i = 0; i < arrayMatrix.length; i++) {
    for (var j = 0; j < arrayMatrix[i].length; j++) {
      document.write(arrayMatrix[i][j] + " ");
    }
    document.write(); 
  }

// Qno#3

var numeric = [1,2,3,4,5,6,7,8,9,10] ;
for(var i = 0 ; i < numeric.length ; i++){
    document.write(numeric[i] + "<br/>")
}

// Qn#4

var userInput = +prompt("Enter a number to show its multiplication table");
var numberOfTimes = +prompt("Enter a length multiplication table ")

for(var i = 1 ; i <= numberOfTimes; i++){
    document.write(userInput + " x " +i+ "=" + i*userInput + "<br/>") 
}

// Qn#5

// var fruits =["apple", "banana", "mango", "orange", "strawberry"];

// for( var i = 1 ; i<= fruits.length; i++){
//   document.write(fruits)
//   if(fruits===5){
//     break;
//   }

// }

var fruits = ["apple </br>", "banana </br>", "mango </br>", "orange </br>", "strawberry </br>"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
}

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i]);
}


// Qno#6

// counting
var counting = [];

for( var i = 1; i<=15 ; i++){
  counting.push(i);
}
document.write("a. Counting:", counting.join(','))

// reverce counting
var reverceCounting = [];

for(var i = 10; i> 0 ; i--){
  reverceCounting.push(i);
}
document.write(" </br> b. Reverce Counting:", reverceCounting.join(','))

// even number
var even = [];

for(var i = 2; i<= 20 ; i+=2){
  even.push(i);
}
document.write(" </br> c. Even :", even.join(','))

// odd number

var odd = [];

for(var i = 1; i<= 19 ; i+=2){
  odd.push(i);
}
document.write(" </br> d. Odd:", odd.join(','))

// 2k Series

var series = [];

for(var i = 2; i<= 20 ; i+=2){
  series.push(i + "k");
}
document.write(" </br> e. Series:", series.join(','))


// chapter 21 to 25 Strings

// Qno#1

var firstName = prompt("enter your first name");
var lastName = prompt("Enter Your last name");

var fullName = firstName+lastName;

alert("Asslam O Alikum:" +fullName+":Welcome!");

// Qno#2

var inputUser = prompt("Enter your favorite mobile phone and model");

var strLength = inputUser.length;
document.write("</br> My Favorite Phone is:" + inputUser + "</br>Length of string:" + strLength);

// Qno#3
var str = "Pakistani" ;
document.write("</br> Index Of n:",str.indexOf("n"))

// Qno#4
var str = "Hello World" ;
document.write("</br>Last Index Of l:",str.lastIndexOf("l"))

// Qno#5
var str ="Pakistani";
var character3 = str.charAt(3);
document.write("</br>String:" + str);
document.write("</br>Character at index 3:" + character3);

// Qno#6

var firstName = prompt("enter your first name");
var lastName = prompt("Enter Your last name");

var fullName = firstName.concat("", lastName);

alert("Asslam O Alikum:" +fullName+":Welcome!");

// Qno#7
var city ="Hyderabad";
var replaceWord = city.replace("Hyder" , "Islam");
document.write("</br>City:" + city);
document.write("</br>After Replacement:" + replaceWord);

// Qno#8
var message ="Ali and Sami are best friend. They play cricket and football together.";
var word = message.replaceAll("and" ,"&");
document.write("</br> Message:" + word )

// Qno#9
var value = "472";

document.write("</br> Value:" + value);
document.write("</br> Type:" + typeof value);

var number = Number(value);

document.write("</br> Value:" + number);
document.write("</br> Typer:" + typeof number);

// Qno#10
// var userInput = "peanuts"
// document.write (userInput.toUppercase());

// document.write("</br> User input:" + userInput);
// document.write("</br> Upper Case:" + userInput);

// Qno#11
var userInput ="javascript";
var titleCase ="javascript";
document.write("</br> User Input:" + userInput);
document.write("</br> Title Case:" + titleCase);

// Qno#12
var num = 35.36;
var numString = num.toString().replace("." ,"");
document.write("</br>Number:" + num);
document.write("</br>Result:" + numString);


// Chapter 26 to 30
// Qno#1
var number = "3.45214";

var roundValue = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("</br> Number:" + number);
document.write("</br> round value:" + roundValue);
document.write("</br> floor value:" + floorValue);
document.write("</br> ceil value:" + ceilValue);

// Qno#2
var number = "-2.673";

var roundValue = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("</br> Number:" + number);
document.write("</br> round value:" + roundValue);
document.write("</br> floor value:" + floorValue);
document.write("</br> ceil value:" + ceilValue);

// Qno#3
var num = "-4";
var absoluteNum = Math.abs(num);
document.write("</br> The absolute value of -4 is:" + absoluteNum);

// Qno#4
var dice = Math.floor(Math.random()*6)+1;
document.write("</br>random dice value:" + dice);

var diceValue = Math.floor(Math.random()*4)+1;
document.write("</br>random dice value:" + diceValue);

// Qno#5

// var coin = Math.floor(Math.random()*2);
// if(coin === 0){
// document.write("</br>2</br>random coin value: Heads");
// }else{
//   document.write("</br>1</br>random coin value: Tails");

// }

var coin = Math.floor(Math.random()*2);

document.write("</br>2</br>random coin value: Heads");
document.write("</br>1</br>random coin value: Tails");

// Qno#6
var randomNumber = Math.floor(Math.random()*100)+1;
document.write("</br>random number b/w 1 & 100 is:" + randomNumber);


// Qno#8
var secretNum = Math.floor(Math.random()*10)+1;
var user= prompt("Guess the secret number b/w 1 & 10")

if(user === secretNum){
  document.write("</br>congratulate you guess the secret number.");
}else{
  document.write("</br>Sorry! the secret number is not"+ secretNum +" try again")
}