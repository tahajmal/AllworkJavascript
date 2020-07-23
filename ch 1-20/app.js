// ASSIGNMENT NO 1 JAVASCRIPT

//Chapter 1
document.write("<h3>Chapter 1</h3><br>");

// Task 1
alert("Hello EveryOne");

// Task 2
alert("Error! Please enter avalid password");

// Task 3
alert("Welcome to js land...\nHappy Coding!")

// Task 4
alert("Welcome to js land");

// Task 5
alert("Hello... I can run JS through my web browser's console");

//Chapter 2
document.write("<h3>Chapter 2<br></h3>");

// Task 1
var username;

// Task 2
var myname = "MUHAMMAD TAHA JAMAL";

// Task 3
var message;
message = "HELLO EVERYONE";
alert(message);

// Task 4
alert(myname);
var age = 22;
alert(age + " years old");
alert("Certified Mobile Application Development");

// Task 5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Task 6
email = "tjamali8042@gmail.com";
alert("My email address is " + email);

// Task 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from book " + book);

// Task 8
document.write("Yah! I can write HTML content through JavaScript");

// Task 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//Chapter 3
document.write("<h3>Chapter 3</h3>");


// Task 1
var age = "22";
alert("I am " +age+ " years old");

// Task 2
var n = "10"
alert("You have visited this site " +n+ " times");

// Task 3
var birthyear = 1998;
document.write("<br><br> My birth year is " +birthyear);
document.write("<br>Data type of my declared variable is " +typeof birthyear);  

// Task 4
var visitorName = "Taha";
var productTitle = "Shirts";
var quantity = 5;
document.write("<br><br>" +visitorName+ " ordered " +quantity+ " " +productTitle+ " on cambridge clothing store");

//Chapter 4
document.write("<h3>Chapter 4</h3>");


// Task 1
var t1,t2,t3;

// Task 2
//legal
var first_name, firstName, sum_, div_num, total;
//illegal
// var $name, *first_name, &abc, .abcd, @abc_n;

// Task 3
document.write("<br><br><h1>Rules for naming JS variables</h1>");
document.write("<br>Variable names can only contain number, $, and _. For example $my_1stVariable");
document.write("<br>Variables must begin with a letter , $ or _. For example $name, _name or name");
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable names should not be JS keywords");

//Chapter 5
document.write("<h3>Chapter 5</h3><br>");

// Task 1

var numb1 = 3;
var numb2 = 5;
var sum = numb1 + numb2;

document.write("<br>Sum of " +numb1+ " & " +numb2+ " is " +sum);

// Task 2
var sub = numb1-numb2;
document.write("<br>Subtraction of " +numb1+ " & " +numb2+ " is " +sub);
document.write("<br>Multiplication of " +numb1+ " & " +numb2+ " is " +numb1*numb2);
document.write("<br>Division of " +numb1+ " & " +numb2+ " is " +numb1/numb2);
document.write("<br>Modulus of " +numb1+ " & " +numb2+ " is " +numb1%numb2);

// Task 3
var numb;
document.write("<br><br>The value after declaration is "+numb);
numb = 5;
document.write("<br>Initial value "+numb);
document.write("<br>Value after increased is "+ ++numb);
numb = numb + 7;
document.write("<br>Value after addition is "+ numb);
document.write("<br>Value after decrement is "+ --numb);
numb = numb % 2;
document.write("<br>The remainder is "+ numb%3);

// Task 4
var ticketprize = 600;
var n = 5
document.write("<br><br>Total cost to buy " +n+ " tickets to a movie is " +n*ticketprize+ "PKR");

// Task 5
var table = 5;
document.write("<br><br>Table of " +table);
for (var index = 1; index < 12; index++) {
    document.write("<br>"+table+ " X "+index+" = "+table*index);
}

// Task 6
var cel = 21;
document.write("<br><br>"+cel+ "oC is "+ ((cel*9/5)+32) + "oF");
var far = 65;
document.write("<br>"+far+ "oF is "+(far-32)*5/9+ "oC");

// Task 7
var item_1 = 550;
var q1 = 4;
var item_2 = 120;
var q2 = 8;
var sc = 100
document.write("<br><br><h1>Shopping Cart</h1>");
document.write("<br>Prize of item 1 is "+item_1);
document.write("<br>Quantity of item 1 is "+q1);
document.write("<br>Prize of item 2 is "+item_2);
document.write("<br>Quantity of item 2 is "+q2);
var total = item_1*q1 + item_2*q2 + sc;
document.write("<br>Total cost of your order is "+ total);


// Task 8
document.write("<br><br><h1>Mark Sheet</h1>");
var total_marks = 980;
var marks_obtained = 810;
var percentage = marks_obtained/total_marks * 100; 
document.write("<br>Total marks "+total_marks);
document.write("<br>Obtain marks "+marks_obtained);
document.write("<br>Percentage "+percentage);

// Task 9
document.write("<br><br><h1>Currency in PKR</h1>");
var dollar = 10;
var riyal = 25;
var t = 104.80*dollar + 28*25;
document.write("<br>Total currency in PKR is "+t);

// Task 10
var num = 10;
num = num+5*10/2;
document.write("<br><br>After arthmetic operation on expression ans is : "+num);

// Task 11
document.write("<br><br><h1>AGE CALCULATOR</h1>");
var bY = 1998;
var cY = 2020;
document.write("<br>Current Year: "+cY);
document.write("<br>Birth Year: "+bY);
var age = cY-bY;
document.write("<br>Your age is: "+age);

// Task 12
var radius = 20;
document.write("<br><br><h1>The Geometrizer</h1>");
document.write("<br>Radius of a circle is: "+radius);
document.write("<br>The circumference is: "+ radius*3.14*2);
document.write("<br>The area is: "+ radius*radius*3.14);

// Task 13
var snack = "zeeraplus";
var current_Age = 22;
var maxAge = 78;
var perDay = 3;
document.write("<br><br><h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack: "+ snack);
document.write("<br>Current age: "+ current_Age);
document.write("<br>Estimated Maximum Age"+ maxAge);
document.write("<br>Amount of snacks per day "+ perDay);
var tot = (maxAge - current_Age) * 3;
document.write("<br>You will need "+ tot + " " +snack+ " to last you until the rip old age of "+maxAge);


//Chapter 6-9

document.write("<h3>Chapter 6-9</h3>");

// Task 1
document.write("<br><br>Result");
var a = 10;
document.write("<br>The value of a is: "+a);
document.write("<br>-----------------------");
document.write("<br><br>The value of ++a is: "+ ++a);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+a);

// Task 2
var a = 2, b = 1;
var result =  --a - --b + ++b + b--;
document.write("<br>a is: "+a);
document.write("<br>b is: "+b);
// Explain the output at each stage:
// --a;
    // ans: 1

// --a - --b;
    // ans: 0

// --a - --b + ++b;
    // ans: 0

// --a - --b + ++b + b--;
    // ans: -1


// Task 3
var name = prompt("What your name: ");
alert("Hello "+name);

// Task 5
var n = prompt("Enter Number for Display table");
document.write("<br><br><h2>Table</h2>");

if(n == ""){
    for (let index = 1; index < 11; index++) {
        document.write("<br> 5 X " +index+ " = "+index*5);
    }
}
else{
    for (let index = 1; index < 11; index++) {
        document.write("<br> "+n+" X " +index+ " = "+index*n);
    }
}

// Task 6
var sub1,sub2,sub3,ob1,ob2,ob3,t = 100;
sub1 = prompt("Enter Subject 1 Name ");
ob1 = prompt("Enter its Obaining Number");
sub2 = prompt("Enter Subject 2 Name ");
ob2 = prompt("Enter its Obaining Number");
sub3 = prompt("Enter Subject 3 Name ");
ob3 = prompt("Enter its Obaining Number");

document.write("<table><th><td><h3>Subject</h3></td><td><h3>Total Marks</h3></td><td><h3>Obtain Marks</h3></td><td><h3>Percentage</h3></td></th>");
document.write("<tr><td></td><td>"+sub1+"</td><td>"+t+"</td><td>"+ob1+"</td><td>"+ ob1/t*100 +"</td></tr>");
document.write("<tr><td></td><td>"+sub2+"</td><td>"+t+"</td><td>"+ob2+"</td><td>"+ ob2/t*100 +"</td></tr>");
document.write("<tr><td></td><td>"+sub3+"</td><td>"+t+"</td><td>"+ob3+"</td><td>"+ ob3/t*100 +"</td></tr>");
var total_m = parseInt(ob1) + parseInt(ob2) + parseInt(ob3);
document.write("<tr><td></td><td></td><td align='center'><strong>"+t*3+"</strong></td><td align='center'><strong>"+ total_m +"</strong></td><td align='center'><strong>"+ (ob1/t*100 + ob3/t*100 + ob2/t*100)/3 +"</strong></td></tr></table>");



// CHAPTER N0 9-11
document.write("<h3>Chapter 9-11</h3>");

// Task 1
var city = prompt("Enter Your city name");
if(city.toLowerCase() == "karachi") {
    alert("Welcome to city of lights");
}
else{
    alert("Welcome to "+city);
}

// Task 2
var gender = prompt("Enter Your gender");
if(gender.toLowerCase() == "male") {
    alert("Good Morning Sir");
}
if(gender.toLowerCase() == "female"){
    alert("Good Morning Ma'am");
}

// Task 3
var color = prompt("Enter Color");
if (color.toLowerCase() == "red") {
    alert("Must Stop");
}
if (color.toLowerCase() == "yellow") {
    alert("Ready to move");
}
if (color.toLowerCase() == "green") {
    alert("Move now");
}

// Task 4
var fuel = prompt("Input remaining fuel in car");
if (parseInt(fuel) < 0.25 ){
    alert("Please refill the fuel in your car”");
}

// Task 5
// a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// ans: given condition for variable a is true

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// ans: 

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// ans: condition 2 is true
//      condition 4 is true

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// ans: the cost equals 

// e.
if (true){
alert("True");
}
if (false){
alert("False");
}

// ans: True

// f
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ans: car is smaller than cat


// Task 6

var t = 300, obt = 200;
document.write("<br><br><h1>Mark Sheet</h1>");
document.write("<br>Total Marks: "+t);
document.write("<br>Marks obtained: "+obt);
var p = obt/t*100;
document.write("<br>Percentage: "+p);
if (p >= 80 && p <= 100){
    document.write("<br>Grade: A-one");
    document.write("<br>Remark: Excellent");
}
if (p >= 70 && p < 80){
    document.write("<br>Grade: A");
    document.write("<br>Remark: Good");
}
if (p >= 60 && p < 70){
    document.write("<br>Grade: B");
    document.write("<br>Remark: You need to improve");
}
if (p < 60){
    document.write("<br>Grade: Fail");
    document.write("<br>Remark: Sorry");
}


// Task 7

var guess = Math.floor(Math.random() * 11);
for (let i = 0; i < 2; i++) {
    if (n > 10 || n < 0){
        alert("you Entered number out of range");
    }    
    var n = parseInt(prompt("Enter a number that u guess (0-10)"));
    if (guess == n) {
        alert("Bingo!")
    }
    if (guess == n+1 || guess == n-1){
        alert("Close enough to the correct answer");
    }    
}


// Task 8

var num = parseInt(prompt("Enter Number"))
if (num % 3 == 0){
    alert(num+" is divisible by 3");
}
else{
    alert(num+" not divisible by 3");    
}

// Task 9
var num = parseInt(prompt("Enter Number"))
if (num % 2 == 0){
    alert(num+" is even");
}
else{
    alert(num+" is odd");    
}


// Task 10

var temp = parseInt(prompt("Enter Temperature"));
if ( temp > 40) {
   alert("It is too hot outside."); 
}
else if ( temp > 30) {
   alert("The Weather today is Normal."); 
}
else if ( temp > 20) {
   alert("Today’s Weather is cool."); 
}
else if ( temp > 10) {
   alert("OMG! Today’s weather is so Cool."); 
}


// Task 11
var n1 = parseInt(prompt("Enter 1st number"));
var n2 = parseInt(prompt("Enter 2nd number"));
var op = prompt("Enter Operator");

if (op == '+'){
    alert(n1+" "+op+" "+n2+" = "+ (n1+n2));
}
else if (op == '-') {
    alert(n1+" "+op+" "+n2+" = "+ (n1-n2));
}
else if (op == '*') {
    alert(n1+" "+op+" "+n2+" = "+ (n1*n2));
}
else if (op == '/') {
    alert(n1+" "+op+" "+n2+" = "+ (n1/n2));
}
else if (op == '%') {
    alert(n1+" "+op+" "+n2+" = "+ (n1%n2));
}


//Chapter 12-13
document.write("<h3>Chapter 12-13</h3>");

// Task 1
var character = prompt("Enter Any character");
if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90 ){
    alert("Input character is 'Upper case'");
}
else if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122 ){
    alert("Input character is 'lower case'");
}


// Task 2
var n1 = parseInt(prompt("Enter integer 1"));
var n2 = parseInt(prompt("Enter integer 2"));

if (n1 > n2) {
    alert(n1+" is greater");
}
else if (n2 > n1) {
    alert(n2+" is greater");
}
else {
    alert("Both are equal");
}


// Task 3
var n = parseInt(prompt("Enter Number"));

if (n >= 0 ) {
    alert(n+" is positive");
}
else {
    alert(n+" is negative");
}


// Task 4
var chracter = prompt("Enter Any character");
if (chracter == "a" || chracter == "e" || chracter == "i" || chracter == "o" || chracter == "u"){
    alert("True");
}
else {
    alert("False");
}


// Task 5
var saved_pass = "Pakistan";
var pass = prompt("Enter you password");
// console.log(pass);
if (pass == ""){
    alert("Please enter your password");
}
else if (pass == saved_pass){
    alert("Correct!");
}
else {
    alert("Incorrect password");
}



// Task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}else{
    greeting = "Good evening";
}


// Task 7
var time = parseInt(prompt("Enter Time in 24 hour format"));

if (time >= 0000 && time <= 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}

//Chapter 14-16

document.write("<h3>Chapter 14-16</h3>");

// Task 1
var a_s_name = [];

// Task 2
var f_s_name = {};

// Task 3
var arr_str = ['Taha', 'Usama', 'Hamdan'];

// Task 4
var arr_num = [2,4,8,16];

// Task 5
var arr_bool = [true, false, false, false];

// Task 6
var arr_mix = [22, 'TAHA', true];

// Task 7
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];

document.write("<br><br><h2>Qualifications:</h2>")
for (let i = 0; i < qualifications.length; i++) {
    document.write((i+1)+") "+qualifications[i]+"<br>");
}


// Task 8
var name = ['Farrukh', 'Taha', 'Hamdan'];
var score = [400, 395 ,405];
document.write("<br><br>Score of "+ name[0]+" is "+score[0]+". Percentage: "+(score[0]/500*100));
document.write("<br>Score of "+ name[1]+" is "+score[1]+". Percentage: "+(score[1]/500*100));
document.write("<br>Score of "+ name[2]+" is "+score[2]+". Percentage: "+(score[2]/500*100));


// Task 9
var color = ['green'];
color.splice(0, 0,prompt("Enter the Color you want to add in beginning"));
document.write("<br><br>Updated array: "+color);
color.splice(color.length, 0,prompt("Enter the Color you want to add in end"));
document.write("<br>Updated array: "+color);
color.splice(0, 0,prompt("Enter the Two Color you want to add in beginning"));
color.splice(0, 0,prompt("Enter the Two Color you want to add in beginning"));
document.write("<br>Updated array: "+color);
color.shift();
document.write("<br>Updated array: "+color);
color.pop();
document.write("<br>Updated array: "+color);
var temp = parseInt(prompt('Enter the Index where you want to add color'));
color.splice(temp, 0,prompt("Now enter color"));
document.write("<br>Updated array: "+color);
var temp = parseInt(prompt('Enter the Index you wants to delete color(s) from'));
color.splice(temp, parseInt(prompt("how many color you delete")));
document.write("<br>Updated array: "+color);


// Task 10
var scores = [400,250,300,120];
document.write("<br><br>Scores of Student: "+scores);
document.write("<br>Sorted Scores of Student: "+scores.sort());


// Task 11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
var selectedCity = cities.slice(0,3);
document.write("<br><br>Cities List:<br> "+cities);
document.write("<br>Selected Cities List:<br> "+selectedCity);


// Task 12
var arr_str = ['This', 'is', 'my', 'cat'];
document.write("<br><br>Array:<br> "+arr_str);
document.write("<br>String:<br> "+arr_str.join(" "));


// Task 13
var device = []
device.push('keyboard');
document.write("<br>IN: <br>"+device);
device.push('Mouse');
document.write("<br>IN: <br>"+device);
device.push('Printer');
document.write("<br>IN: <br>"+device);
device.push('Monitor');
document.write("<br>IN: <br>"+device);
device.push('keyboard');
document.write("<br><br>Out: <br>"+device.shift());
device.push('Mouse');
document.write("<br>Out: <br>"+device.shift());
device.push('Printer');
document.write("<br>Out: <br>"+device.shift());
device.push('Monitor');
document.write("<br>Out: <br>"+device.shift());



// Task 14
var mobile_manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<br>Mobile Manufactures:<br><select name='Mobile Manufactures'>");
for (var i in mobile_manufacturers) {
    document.write("<option value=''>"+mobile_manufacturers[i]+"</option>");
}
document.write("</select>");


//Chapter 17-20

document.write("<h3>Chapter 17-20</h3>");

// Task1
var md_arr = [[],[]];

// Task2
md_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<br><br>"+md_arr);

// Task3
for (i = 1; i < 11; i++) {
    document.write("<br>"+i);    
}

// Task4
var tbl = parseInt(prompt("Enter Table Number"));
var ln = parseInt(prompt("Length of table"));
document.write("<br><br>Multiplication table of "+tbl);
document.write("<br>Length of table "+ln+"<br>");
for (i = 1; i <= ln; i++) {
    document.write("<br>"+tbl+" X "+i+" = "+(i*tbl));
    
}


// Task5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.write("<br>"+ (fruits.join("<br>"))+ "<br><br>");
for (var item in fruits){
    document.write("<br>Element at index "+item+" is "+ fruits[item]);
}


// Task6

document.write("<br><br>a. Counting: ")
for (i = 1; i <= 15; i++) {
    document.write(i+"<br>,");
}
document.write("<br>b. Reverse Counting: ")
for (i = 15; i >= 1; i--) {
    document.write(i+",");
}
document.write("<br>c. Even Counting: ")
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0 || i == 0){
        document.write(i+",");
    }
}
document.write("<br>d. Odd: ")
for (i = 1; i <= 20; i++) {
    if (i % 2 != 0){
        document.write(i+",");
    }
}
document.write("<br>e. Series: ")
for (i = 0; i <= 15; i++) {
    if (i % 2 == 0 || i == 0){
        document.write(i+"K,");}
   
}


// Task7
var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt("Welcome Sevenstar bakery what do you want").toLocaleLowerCase();

for (i = 0; i < bakery.length; i++) {
    if (bakery[i] == search) {
        alert(search+" is available for you in "+i+" index");
        break;
    }
}


// Task8
var num = [24, 53, 78, 91, 12];
document.write("<br><br>Array items: "+num);
document.write("<br>The Largest number is "+Math.max.apply(null,num));


// Task9
var num = [24, 53, 78, 91, 12];
document.write("<br><br>Array items: "+num);
document.write("<br>The Smallest number is "+Math.min.apply(null,num)+"<br>");

// Task10

for (let i = 5; i <= 100 ; i = i+5) {
    document.write(i+",");
}
