//Assignment 2 js
 

//Chapter 21-25

//TASK 1
var f_name = prompt("Enter first name");
var l_name= prompt("Enter last name");
alert('Hello '+f_name+' '+l_name);


// TASK 2
var phone_name = prompt("Which phone is your favourite")
document.write("<br>My favorite phone is: "+phone_name);
document.write("<br>Length of string: "+phone_name.length);

// TASK 3
var word = 'Pakistani';
document.write("<br><br>String: "+word);
document.write("<br>Index of 'n': "+word.indexOf('n'));

//TASK 4
var word = "Hello World";
document.write("<br><br>String: "+word);
document.write("<br>Index of 'l': "+word.lastIndexOf('l'));

//TASK 5
var word = "Pakistani";
document.write("<br><br>String: "+word);
document.write("<br>Character at index 3: "+word[3]);

//TASK 6
var f_name = prompt("Enter first name");
var l_name = prompt("Enter last name");
alert('Hello '+f_name.concat(' ',l_name));

//TASK 7
var city = 'Hyderabad';
document.write("<br><br>City: "+city);
document.write("<br>After Replacement: "+city.replace('Hyder', 'Islam'));

//TASK 8
var str = "Ali and Sami are best friends.They play cricket and football together."; 
document.write("<br><br>String: "+str);
document.write("<br>After Replacement: "+str.replace('and','&').replace('and','&'));

//TASK 9
var number = 472, str = '472';
document.write("<br><br>value: "+str);
document.write("<br>Type: "+typeof(str));
document.write("<br>Value: "+number);
document.write("<br>Type: "+typeof(number));

//TASK 10
var name = prompt("Enter your name :");
document.write("<br><br>User Input: "+name);
document.write("<br>Upper Case: "+name.toUpperCase());

//TASK 11
var lang = prompt("Enter your favourite Programming Language: ");
document.write("<br><br>User Input: "+lang);
document.write("<br>Title Case: "+(lang[0].toUpperCase()+lang.slice(1)));

//TASK 12
var number = 35.36;
document.write("<br><br>Number: "+number);
document.write("<br>Result: "+number.toString().replace('.',''));

//TASK 13
var name = prompt("Enter you name : ");
while (name.includes('@','.','!',',')){
    name = prompt('Enter a valid user name');
}

//TASK 14
var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt("Welcome to sajjad bakery! what do you want to order sir/mam").toLowerCase();

if (bakery.includes(search)){
    document.write("<br><br>"+search+" is available at index "+bakery.indexOf(search)+" in our bakery");
} 
else {
    document.write("<br><br>We are sorry. "+search+" is not available in our bakery");
}


//TASK 15
var pas = prompt("Enter Password");
var m = 0;
if (!(pas.length >= 6)) {
    pas = prompt("Password has at least 6 characters\nPlease enter valid password");
}
else if (parseInt(pas[0]) >= 0){
    pas = prompt("Password not contain number in starting\nPlease enter valid password");
}
for (let i = 0; i < pas.length; i++) {
    if (pas[i].charCodeAt() >= 65 && pas[i].charCodeAt() <= 90 && pas[i].charCodeAt() >= 97 && pas[i].charCodeAt() <= 122){
        m = 1 
    } 
}
if (m = 0){
    pas = prompt("Password contains atleast 1 alphabet\nPlease enter valid password");
}

//TASK 16
var uni_name ="Sir Syed University";
var arr = uni_name.split('')
arr.forEach(element => {
    document.write("<br>"+element+"<br>"); 
});

//TASK 17
var name = prompt("Enter your name : ")
document.write("<br><br>User Input: "+name);
document.write("<br>Last Character of input: "+name[name.length-1]);

//TASK 18
var str = "The quick brown fox jumps over the lazy dog".toLowerCase().split(' ');
count = 0;
str.forEach(word => {
    if (word == 'the'){
        count++;
    }
});
document.write("<br><br>There are "+count+" occurrence(s) of word 'the'");

//Chapter 26-30

//TASK 1
var number = prompt("Enter any number: ");
document.write("<br><br>number: "+number);
document.write("<br>round off value: "+Math.round(number));
document.write("<br>floor value: "+Math.floor(number));
document.write("<br>ceil value: "+Math.ceil(number));

//TASK 2
var number = prompt("Enter any number: ");
document.write("<br><br>Number: "+number);
document.write("<br>round off value: "+Math.round(number));
document.write("<br>floor value: "+Math.floor(number));
document.write("<br>ceil value: "+Math.ceil(number));

//TASK 3
var num = prompt("Enter any number: ");
document.write("<br><br>The absolute value of "+num+" is "+Math.abs(num));

//TASK 4
document.write("<br><br>random dice value: "+ (Math.round(Math.random() * 5)+1));
document.write("<br><br>random dice value: "+ (Math.round(Math.random() * 5)+1));

//TASK 5
var coin = (Math.round(Math.random() * 1)+1);
if (coin == 1){
    document.write("<br><br>"+coin+"<br>random coin value: Heads");
}
else {
    document.write("<br><br>"+coin+"<br>random coin value: Tails");
}

//TASK 6
document.write("<br><br>random value between 1 to 100: "+ (Math.round(Math.random() * 99)+1));

//TASK 7
var weight = prompt("Enter your weight in kgs: ");
var inv = 0;
for (let i = 0; i < weight.length; i++) {
    if ((weight[i].charCodeAt() >= 65 && weight[i].charCodeAt() <= 92) || (weight[i].charCodeAt() >= 97 && weight[i].charCodeAt() <= 120)){
        inv = i;
        break
    }
}

//TASK 8
var secNum = (Math.round(Math.random()) * 9) + 1;
var num = +prompt('Enter number between (1-10)');
if ( num == secNum) {
    alert('Congratulation!!');
}
else {
    alert('Try Again!');
}

//Chapter 31-34

//TASK 1
var date = new Date();
document.write("<br><br>"+date);

//TASK 2
var date = new Date();
var month = '';
switch (date.getMonth()) {
    case 0:
        month = 'January';
        break;

    case 1:
        month = 'Feburary';
        break;
    
    case 2:
        month = 'March';
        break;
        
    case 3:
        month = 'April';
        break;

    case 4:
        month = 'May';
        break;
    
    case 5:
        month = 'June';
        break;

    case 6:
        month = 'July';
        break;

    case 7:
        month = 'August';
        break;

    case 8:
        month = 'September';
        break;
    
    case 9:
        month = 'October';
        break;
    
    case 10:
        month = 'November';
        break;

    case 7:
        month = 'December';
        break;
}
document.write("<br><br>Current month: "+month);

//TASK 3
var date = new Date();
var day = '';
switch (date.getDay()) {
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;
    
    case 2:
        day = 'Tuesday';
        break;
        
    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thuesday';
        break;
    
    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;
}
document.write("<br><br>Current Day is: "+day);

//TASK 4
if (new Date().getDay() == 6 || new Date().getDay() == 0) {
    document.write("<br><br>It's Fun day");
}

//TASK 5
if (new Date().getUTCDate() < 16) {
    document.write("<br><br>First fifteen days of the month");
}
else {
    document.write("<br><br>Last days of the month");
    
}

//TASK 6
var millis = (new Date().getTime() - new Date('Jan 1,1970').getTime());
document.write("<br><br>Current Date: "+new Date('Jan 1,1970'));
document.write("<br>Elapsed milliseconds since January 1, 1970: "+millis);
document.write("<br>Elapsed minutes since January 1, 1970: "+(millis/(1000*60*60)));

//TASK 7
var hrs = new Date().getUTCHours;
var min = new Date().getUTCMinutes;

if (hrs >= 12 && hrs < 24) {
    document.write("<br><br>Its Pm");
}
else {
    document.write("<br><br>Its Am");
}

//TASK 8
var laterDate = new Date('Dec 31,2020');
document.write("<br><br>Later Date: "+laterDate);

//TASK 9
var strD = new Date('June 18, 2015').getTime();
var preD = new Date().getTime();
var diff = preD - strD;
document.write("<br><br>"+( Math.floor(diff / (1000*60*60*24) ))+" days have passed since 1st Ramadan 2015" );

//TASK 10
var refrD = new Date('Dec 5, 2015').getTime();
var preD = new Date().getTime();
var diff = preD - refrD;
document.write("<br><br>On reference Data "+new Date('Dec 5, 2015'))
document.write("<br>"+( Math.floor(diff / (1000*60) ))+" seconds had pass since beginning of 2015" );

//TASK 11
var preD = new Date();
var pasD = new Date();
document.write("<br><br>Current Date: "+preD);
document.write("<br>1 hour ago, it was "+new Date(pasD.setHours(pasD.getHours() + 1)));

//TASK 12
var preD = new Date();
document.write("<br><br>Current Date: "+preD);
document.write("<br>100 years back, it was "+new Date(preD.setYear(preD.getFullYear() - 100)));

//TASK 13
var age = +prompt("Enter your Age");
document.write("<br><br>Your Age: "+age);
document.write("<br>Your birth year is: "+( (new Date().getFullYear()) - age));

//TASK 14
var custName = prompt("Enter Customer name : ");
var Unit = 320, Charges = 18;
document.write("<br><br><h2>K-Electric Bill</h2>");
document.write("<br>Customer Name: <b>"+custName+"</b>");
document.write("<br>Month: <b>"+new Date().toString().split(' ')[1]+"</b>");
document.write("<br>Number of Units: <b>"+Unit+"</b>");
document.write("<br>Charges per unit: <b>"+Charges+"</b>");
document.write("<br><br>Net Amount Payable (within Due Date): <b>"+(Unit * Charges)+"</b>");
document.write("<br>Late payment surcharges: <b>"+350+"</b>");
document.write("<br>Gross Amount Payable (after Due Date): <b>"+(Unit * Charges + 350)+"</b>");

//Chapter 35-38

//TASK 1
function showPresentDate(){
    return new Date();
}
document.write("<br><br>"+showPresentDate());

//TASK 2
function greetings(f_Name, l_Name){
    alert("Hello"+f_Name+" "+l_Name);
}
greetings(prompt("Enter Your First Name"), prompt("Enter Your Last Name"));

//TASK 3
function sum(num1, num2){
    return num1+num2;
}

alert("Sum is "+sum(+prompt("Enter any Number"), +prompt("Enter any Number")));

//TASK 4
function cal(num1, num2, op){
    answer = 0;
    switch (op){
        case '+':
            answer = num1 + num2;
            break;

        case '-':
            answer = num1 - num2;
            break;

        case '*':
            answer = num1 * num2;
            break;

        case '/':
            answer = num1 / num2;
            break;

        case '%':
            answer = num1 % num2;
            break;
        
        default:
            answer = 'Invalid operator';
    }
    if (answer != 'Invalid operator'){
        document.write("<br><br>Answer of "+num1+" "+op+" "+num2+" = "+answer)
    }
    else{
        alert("Invalid Character");
    }
}

var num1 = +prompt("Enter Number: ");
var num2 = +prompt("Enter Number: ");
var op = prompt("Enter Operator :");
cal(num1, num2 , op);

//TASK 5
function square(num){
    return num * num;
}
var sq = +prompt("Enter Number")
alert("Square of "+sq+" is "+square(sq));

//TASK 6
function factorial(n){
    ans = 1
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans
}
var num = +prompt("Enter Number : ");
document.write("<br><br>Factorial of "+num+" is "+factorial(num));


//TASK 7
function counting(start, end){
    for (let i = start; i <= end; i++){
        document.write(i+" ");

        if ((i%10) == 0){
            document.write("<br>");
        }
    }
}
counting(+prompt("Enter Start point : "), +prompt("Enter End point : "));

//TASK 8
function square(r){
    return r*r;
}
function Hypo(bse, per){
    return square(square(bse) + square(per));
}
document.write("<br><br>Value of Hypotenuse "+Hypo(+prompt("Enter Base value"), +prompt("Enter Perpendicular value")));

//TASK 9
function areaorec(width, height){
    return width*height;
}
var width = +prompt("Enter width: ");
var height = +prompt("Enter height: ");
alert("Area of rectangle: "+areaorec(width,height));
alert("Area of rectangle: "+areaorec(5,6));

//TASK 10
var text = prompt("Enter any word");
var f = 0;
for (let i = 0; i < text.length; i++) {
    if (!(text[i] == text[text.length - i - 1])){
        alert("'"+text+"' word is not a palindrome");
        break;
    }
    if (i == (text.length-1)){
        alert("'"+text+"' word is palindrome");
    }
}

//TASK 11
var text = prompt("Enter any text : ").split(' ');
document.write("<br><br>Example String: "+text.join(' '));
for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].slice(1);
}
document.write("<br><br>Expected Ouput: "+text.join(' '));

//TASK 12
var text = prompt("Enter any string").split(' ');
document.write("<br><br>Example String: "+text.join(' '));
var ind = 0;
for (let i = 0; i < text.length; i++) {
    if (text[ind].length < text[i].length){
        ind = i;
    }
}
document.write("<br>Expected Output: "+text[ind]);

//TASK 13
function countOcc(string, char){
    c = 0;
    for (let i = 0; i < string.length; i++) {
        if (char == string[i]){
            c++;
        }
    }
    return c;
}
var s = prompt("Enter String");
var ch = prompt("Enter which letter you want to find find");
document.write("<br><br>In string<br>"+s+"<br> has "+countOcc(s, ch)+"occurences of letter "+ch);

//TASK 14
function calcCircumference(r){
    return 2 * 3.14 * r;
}
function calcArea(r){
    return 3.14 * (r * r);
}   
document.write("<br>The circumference is "+calcCircumference(4));
document.write("<br>The Area is "+calcArea(4));

