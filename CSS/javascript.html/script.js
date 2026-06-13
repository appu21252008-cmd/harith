var a; //declaration
a=10;//initialization
var a=10;//re-declaration and re-initialization

console.log(a);

let b; //declaration
b=20;//initialization
b=30;//re-initialization
console.log(b);
const c=30;//declaration and initialization
console.log(c);
var num=10;
var str="orange";
var bool=true;
var arr=[1,2,3,4,5];
var undef;
var nul=null;
var symbol1=Symbol("li");
var bigInt =123456789n;
var obj={
    name:"harith"
}
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof undef);
console.log(typeof nul);
console.log(typeof symbol1);
console.log(typeof bigInt);
console.log(typeof obj);

//arithmetic operator
var x=10;
var y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//conditional operator(>,<,>=,<=,==,===,!=,!==)
var x=1;
var y="1";
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
//logical operator(&&, ||, !)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

//assignment operator(=, +=, -=, *=, /=, %=)

var x=10;
var y=20;
console.log(x);
x-=y;
console.log(x);

//if(condition){
//    //statement
//}

var x=10;
if(x%2==0){
    console.log("even");
}

//if(condition){
//    //statement
//}else{
//    //statement
//}

if(x%2==0){
    console.log("even");
}else{
    console.log("odd");
}

var mark =30;
if(mark>=90){
    console.log("O grade");
} else if(mark>=80){
    console.log("A grade");
} else if(mark>=70){
    console.log("A+ grade");
}
else if(mark>=60){
    console.log("B grade");
}
else if(mark>=35){
    console.log("pass");
}

//ternary operator
var x=2;
//condition ? true statement : false statement
var result = (x%2==0) ? "even" : "odd";
console.log(result);

var mark = 50;

var grade = mark>=90 ? "o grade" :
            mark>=80 ? "A+ grade" :
            mark>=70 ? "A grade" :
            mark>=60 ? "B+ grade" :
            mark>=50 ? "B grade" :
            mark>=35 ? "pass" : "fail";

console.log(grade);

var day = 8;
var day=8;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

//for(initialization; condition; increment/decrement){
//    //statement
//}

for(let i=1; i<=10; i++){
    console.log(i);
}

//while(condition){
//    statement
//}

var num =10246;
var digit = 0;
while(num>0){
    digit++;
    num=Math.floor(num/10);
}
console.log(digit)

//unary operator (i++,++i,i--,--i)

var x=1;

console.log(x++);
console.log(++x);
var x=1;

console.log(x--);
console.log(--x);

var a=1; //3
var b=1; //2
var c=0; //2
//             1 +   0 +   1 -  3  +   1 +   1 +   1 + 3
var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
console.log(result);

//do{
//      //Statement
//  }while(condition);

do{
    console.log("do..while")
}while(false);

while(false){
    console.log("while example")
}

for(let i=1;i<=10;i++){
   // if(i>5){
   //    break;
   // }
   if(i==5){
    continue;
   } 
   console.log(i);
}

function add(){
    console.log(10+20);
 }
 add();
 add();
 add();

 function add(a,b){
    console.log(10+20);
 }
 add(10,20);
 add();
 add();

 add(10,20);
 add(15,25);
 add(20);
 add();

 var add = ()=>{
    console.log(10+20);
}
add();

var sum = () =>{
    console.log("Arrow Function");
}
sum();

var arr =[1,2,3,4,5];
var square = arr.map((val)=>(val**2))
console.log(square)

var even = arr.filter((val)=>(val%2==0));
console.log(even);

//              reduce((prev curr)=>(calculation),initialvalue)
var sum = arr.reduce((total,val)=>(total+val),0);
console.log(sum);

