// Chapter 38-42

//Task 1
function power(a,b){
    return Math.pow(a,b)
}
alert("power of 3 raise to 3 is "+power(3,3));

//Task 2
var yr = +prompt("Enter Any Year : ");
if((yr%4)==0){
    alert(yr+ " is leap year");
}
else{
    alert(yr+ " is not a leap year"); 
}

//Task 3
function calcS(a,b,c){
    return(a+b+c)/2;
}

function area(a,b,c){
    var S=calcS(a,b,c);
    return S*(S-a)*(S-b)*(S-c);
}
alert("Sides of Triangle are 2 3 4 and area is: " +area(2,3,4));

//Task 4
function calAvg(a,b,c){
    return(a+b+c)/3;
}

function calPercentage(a,b,c){
    return((a+b+c)/300)*100;
}

function mainFunction(a,b,c) {
    alert("Average is : " +calAvg(sub1,sub2,sub3)+"Percentage is : " +calPercentage(sub1,sub2,sub3));

}

var sub1=+prompt("Enter Marks of 1st Subject : ");
var sub2=+prompt("Enter Marks of 2nd Subject : ");
var sub3=+prompt("Enter Marks of 3rd Subject : ");
mainFunction(sub1,sub2,sub3);

//Task 5
var str = "Saylani Trust";
var ch = prompt("String :'"+str+"' what character index you want to find ?");

function selfIndexOf(txt, chr){
    for (let i = 0; i< txt.length; i++) {
        if (txt[i].toLowerCase() == ch.toLowerCase()){
            return i;
            break;
        }
    }
}
alert('Index is :'+selfIndexOf(str, ch));

//Task 6
function delVowel(str) {
    var sentence = '';
    if (str.length <= 25){
        for (let i = 0; i < str.length; i++) {
            if (!(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u')){
                sentence += str[i];    
            }
        }
        alert('Sentence after deleting vowel: '+sentence);
    }
    else {
        alert('Sentence Characters are more than 25');
    }
}
var text = prompt("Enter String Smaller than 25 Characters : ");
delVowel(text);

//Task 7
function chkVowel(str) {
    var c = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u'){            
            if (str[i+1].toLowerCase() == 'a' || str[i+1].toLowerCase() == 'e' || str[i+1].toLowerCase() == 'i' || str[i+1].toLowerCase() == 'o' || str[i+1].toLowerCase() == 'u'){
                c.push(i);    
                
            }
        }
    }
    document.write("<br><br>Such occurence are: ");
    for (let i = 0; i < c.length; i++) {
        document.write(str[c[i]]+str[c[i]+1]+',');     
    }
}
var txt = 'Pleases read this application and give me gratuity';
chkVowel(txt);

//Task 8
function meters(dist) {
    return dist*1000;
}
function inches(dist) {
    return dist*39370.1;
}
function feets(dist) {
    return dist*3280.84;
}
function centimeters(dist) {
    return dist*100000;
}

var distn = +prompt('Enter Distance between 2 cites in kilometers : ');
document.write("<br><br>Distance in meters: "+meters(distn)+" meters");
document.write("<br>Distance in inches: "+inches(distn)+" inches");
document.write("<br>Distance in feets: "+feets(distn)+" feet");
document.write("<br>Distance in centimeters: "+centimeters(distn)+" cm");

//Task 9
function overtimepay(amount) {
    if (amount > 40 ){
        return Math.ceil(amount - 40) * 12;
    }
    else {
        return 0;
    }
}

alert('Over Time Amount: Rs='+overtimepay(+prompt("Enter No. of hours of Work : ")));

//Task 10
function currencynote(amnt) {
    var h = 0, f = 0, t = 0;
    if ((amnt/100) >= 1){
        h = Math.floor(amnt/100);
        amnt = amnt%100;
        // console.log(amnt);
    }
    if ((amnt/50) >= 1){
        f = Math.floor(amnt/50);
        amnt = amnt%50;
        // console.log(amnt);
    }
    if ((amnt/10) > 1){
        t = Math.floor(amnt/10);
        amnt = amnt%10;
        // console.log(amnt);
    }
    document.write("<br><br>You should have "+h+" hundred notes "+f+" fifty notes and "+t+" ten notes handy");
}
currencynote(+prompt('Enter Amount you want to withdraw : '));

//Chapter 43-48

//Task 1 and 2
function showMsg(name) {
    alert('Thank you for purchasing '+name+' from us');
}

//Task 3
var std = ['Taha', 'Usama', 'Umair', 'Hammad'];
var clas = ['10','11','12','13'];
document.write("<br><br>Before Delete");
document.write("<br><table class='tb'><tr><th>Index</th><th>Name</th><th>Class</th></tr>");
for (let i = 0; i < std.length; i++) {
    document.write("<tr><td>"+i+"</td><td>"+std[i]+"</td><td>"+clas[i]+"</td><td><button onclick='delrec("+i+")'>Delete</button></td></tr>");
}
document.write("</table>");

function delrec(i){
    std.splice(i,1);
    clas.splice(i,1);
    console.log(std);
    document.write("<br><br>After click on delete button on any one particular  row");
    document.write("<br><table class='tb'><tr><th>Index</th><th>Name</th><th>Class</th></tr>");
    for (let i = 0; i < std.length; i++) {
        document.write("<tr><td>"+i+"</td><td>"+std[i]+"</td><td>"+clas[i]+"</td><td><button onclick='delrec("+i+")'>Delete</button></td></tr>");
    }
    document.write("</table>");
}

//Task 4
function overImg() {
    document.getElementById('imgs').setAttribute('src', 'img/sarfraz.jpg');
}
function outImg() {
    document.getElementById('imgs').setAttribute('src', 'img/babar.jpg');
}

//Task 5
var num = document.getElementById('num');

function addVal() {
    num.value = parseInt(num.value) + 1;
}
function subVal() {
    if (num.value > 0)
        num.value = parseInt(num.value) - 1;
}

//Chapter 49-52

//Task 1
function showData(){
    var divs = document.getElementsByClassName('signup');
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    document.getElementById('username').innerHTML = 'USERNAME: '+user;
    document.getElementById('password').innerHTML = 'PASSWORD: '+pass;    
}

//Task 2

function DisplayAll() {
    text = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit fugiat sint necessitatibus nostrum. Perspiciatis unde minus voluptatum iste, impedit dignissimos, vitae ullam molestias recusandae dolorum error! Obcaecati, iusto maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit fugiat sint necessitatibus nostrum. Perspiciatis unde minus voluptatum iste, impedit dignissimos, vitae ullam molestias recusandae dolorum error! Obcaecati, iusto maiores.';
    document.getElementById('contnt').innerHTML = document.getElementById('contnt').innerText + text;
}

//Task 3
function showDetail() {
    var vals = document.getElementsByClassName('inpt');
    var inp = document.getElementById('tble');
    var tr = document.createElement('tr');
    var c = 0;

    var idVals = vals[0].value[0]+vals[1].value[0]+vals[2].value[vals[2].value.length - 1];
    tr.setAttribute('id', idVals);

    for (let i = 0; i < vals.length + 2; i++) {
        if (i < 4) {
            td = document.createElement('td');
            tn = document.createTextNode(vals[i].value);
            td.append(tn);
            tr.append(td);
            vals[i].value = '';
        }
        else {
            if (c==0){
                c = 1;
                td = document.createElement('button');
                td.innerHTML = 'Update';
                td.setAttribute('onclick', 'sDataUpdate('+idVals+')');
                td.setAttribute('id', 'u'+idVals);
                tr.append(td);
            }
            else {
                td = document.createElement('button');
                td.innerHTML = 'Delete';
                td.setAttribute('onclick', 'sDataDelete(b'+idVals+')');
                td.setAttribute('id', 'b'+idVals);
                tr.append(td);
            }
        } 
        
    }
    inp.childNodes[1].appendChild(tr);
}


function sDataDelete(elm) {
    elm.parentElement.innerHTML = '';
}

function sDataUpdate(id) {
   
    for (let i = 0; i < id.childNodes.length - 2; i++) {
        var inp1 = document.createElement('input');
        inp1.setAttribute('type','text');
        inp1.setAttribute('class','tempryInputField');
        inp1.value = id.childNodes[i].innerHTML;
        id.childNodes[i].appendChild(inp1);
        id.childNodes[i].removeChild(id.childNodes[i].childNodes[0]);
    }
    
    id.childNodes[4].setAttribute('onclick', 'updateValues('+id.getAttribute('id')+')');
    id.childNodes[5].disabled = true;
    
}

function updateValues(id) {
    var vals = document.getElementsByClassName('tempryInputField');
    var val = [];
    for (let i = 0; i < vals.length; i++) {
        val[i] = vals[i].value;
    }
    for (let i = 0; i < id.childNodes.length - 2; i++) {
        var tn = document.createTextNode(val[i]);
        
        id.childNodes[i].appendChild(tn);
        id.childNodes[i].removeChild(id.childNodes[i].childNodes[0]);
        
    }
    id.childNodes[4].setAttribute('onclick', 'sDataUpdate('+id.getAttribute('id')+')');
    id.childNodes[5].disabled = false;
}

//Chapter 52-58

//Task 1
function view(val) {
    var modal = document.getElementById('disply-img');
    modal.style.display = 'block';
    modal.childNodes[3].setAttribute('src', val.getAttribute('src'));
    modal.childNodes[1].setAttribute('onclick', 'closeModal()')
}
function closeModal() {
    var modal = document.getElementById('disply-img');
    modal.style.display = 'none';
}

//Task 2
function zoomIn(txt) {
    txt.style.fontSize = '25px'; 
}
function zoomOut(txt) {
    txt.style.fontSize = '15px'; 
}

//Chapter 58-67

//Task 1
//1.
var element = document.getElementById('main-content');

//2.
console.log(element)
document.write("<br><br>All Child elements are: "+element);

//3.
var rnder = document.getElementsByClassName('render');
console.log(rnder)
for (let i = 0; i < rnder.length; i++) {
    document.write('<br><br>Render Class Elements are : '+rnder[i].innerHTML);
    console.log(rnder[i].innerHTML);
}

//4.
var inptt = document.getElementById('first-name');
inptt.value = 'TAHA';

//5.
var inptt = document.getElementById('last-name');
inptt.value = 'JAMAL';
var inptt = document.getElementById('email');
inptt.value = 'tjamali8042@gmail.com';

//Task 2
//1.
var fc = document.getElementById('form-content');
console.log(fc.nodeType);
document.write("<br><br>Node type is : "+fc.nodeType);

//2.
var ln = document.getElementById('lastName');
document.write("<br><br>Node type is : "+ln.nodeType);
document.write("<br><br>Child node is: "+ln.childNodes);
console.log(ln.nodeType)
console.log(ln.childNodes)

//3.
var ln = document.getElementById('lastName');
ln.appendChild(document.createTextNode(' (update child node)'));

//4.
var mc = document.getElementById('main-content');
document.write("<br><br>First Child is: "+mc.firstChild);
document.write("<br><br>Last Child is: "+mc.lastChild);
console.log(mc.firstChild);
console.log(mc.lastChild);

//5.
document.write("<br><br>next Sibling is : "+ln.nextSibling);
document.write("<br><br>previous Sibling is : "+ln.previousSibling);
console.log(ln.nextSibling);
console.log(ln.previousSibling);

//6.
var emil = document.getElementById('email');
document.write("<br><br>Parent Node is: "+emil.parentNode);
document.write("<br><br>Node Type is: "+emil.nodeType);
console.log(emil.parentNode);
console.log(emil.nodeType);


