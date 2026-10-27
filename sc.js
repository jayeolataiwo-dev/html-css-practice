//use loops for Animation, data ProcessingInstruction, array manipulation and the likes*/
// for loops- 4 main parts initialization, condition, printing, increament/decrement*/
//for loop*/
let z;
for( z=1; z<=2; z++){
    console.log('this is a for loop');
}
//while loop*/
a=1
while(a<=3){
    console.log('while loop');
    a++
}

//do while loop*/
b=1
do{ 
    console.log('do while loop');
    b++
}
while( b<=2)

//pattern programming using loops*/
let t=1
let row;
row='';
for(t=1;t<=5;t++)
{
    row=row +"*"
}
console.log(row);
//second pattern programming/
let d=1
let c=1
let round;

for(d=1;d<=5;d++){
round='';
for(c=1;c<=5;c++){
    round= round+"*";
}console.log(round);
}
// third pattern programming*/
let f=1
let g=1
let rug;

for(f=1;f<=5;f++){
rug='';
for(g=1;g<=5;g++){
    if(f==1|| f==5|| g==1||g==5){
        rug=rug+'*';
    }
    else{rug=rug+' ';}
}console.log(rug);}

//fourth pattern programming*/
let p=1
let q=1
let fire;
let n=8
for(q=1;q<=8;q++){
fire='';
for(p=1;p<=8;p++){ 
   if(p==1||p==n||q==1||q==n){
    fire=fire+q;
   }
   else{
    fire=fire+' ';
   }
}console.log(fire);}

//*fifth pattern programming*//
let r=1
let s=1
let fir;
let y=9
for(s=0;s<y;s++){
fir='';
for(r=0;r<y;r++){ 
   if(r==0||r==y-1||s==0||s==y-1||r== Math.floor(y/2) ||s==Math.floor(y/2) ||r==s ||r+s==y-1){
    fir=fir+s;
   }
   else{
    fir=fir+' ';
   }
}console.log(fir);}

//tenary operations*/
let house= 1000;
let price;
price=house<=1000? 'purchase': 'do not purchase';
console.log(price);

//switch , tests strict equality, default for if none of the condition is met*//
let rice=200;
 switch(rice){
case 150:
 console.log('not exactly');
  break;
case 200:
 console.log('exactly');
  break;
default:
 console.log('maybe');
 }

 // IF and else statements, equality too*/
 let economy=20;
 if(economy>=20){
    console.log('print money');
 }
 else{
    console.log('do not print money');
 }

 // If, else if,else if and else statements*/
let cgpa=5.0
if(cgpa>=4.5){
    console.log('first class');
}
else if(cgpa>=3.50){
    console.log('second class upper');
}
else if(cgpa>=3.49){
    console.log('second class lower');
}
else{
    console.log('third class');
}

//functions in javascript, functions are blocks of code that can be called and executed when needed. They can take parameters and return values.//
// no input/parameter and no output/return value*/
let b=10
let c=20
function add(){
    let d;
    d=b+c;
    console.log(d);
}add();//calling the function to execute it, without calling it, the function will not run.//

//no input/parameter but output/return value*/
let d=11
let e=20
function sub(){
    let f;
    f=d-e;
    return f;
} let result=sub();
console.log(result);

//input/parameter but no output/return value*/
function multiply(a,b){
    let c;
    c=a*b;
    console.log(c);
}multiply(3,2);

function subtract(c,d){
    let e;
    e=c-d;
    console.log(e);
}let a=9
let b=2
subtract(b,a);

//input and output function//
function add(p,q){
    let t;
    t=p+q;
    return t;
}let j=3
let k=4
let result=add(j,k);
console.log(result);


function subtract(n,m){
    let o;
    o=n-m;
    return o;
}let min=subtract(10,5);
console.log(min);

//function and conditional statements, if else, else if and else statements can be used inside functions to perform different actions based on different conditions. The function can take input parameters and return output values based on the conditions.//

function calculategrade(studentmarks,studentmaxmarks){
    let studentpercentage=(studentmarks/studentmaxmarks)*100;
    let studentgrade;
    if(studentpercentage>=70){
        studentgrade='A';
    }
    else if(studentpercentage>=60){
        studentgrade='B';
    }
    else if(studentpercentage>=50){
        studentgrade='C';
    }
    else if(studentpercentage>=40){
        studentgrade='D';
    }
    else if(studentpercentage>=30){
        studentgrade='E';
    }
    else{
        studentgrade='F';
    }console.log(studentgrade);
    return studentgrade;
}calculategrade(26, 100);

//function declaration//
function add(a,b){
    return a+b;
} console.log(add(4,5));

//function expression//
let sub=function(c,d){
    return c-d;
} 
console.log(sub(5,4));

//arrow function//
let div=(e,f)=>{
    return e/f;
} 
console.log(div(4,2));

//shorthand arrow function//
let div=(e,f)=>e/f;
console.log(div(4,2));

//immediately revoked function expression//
(function(){
    console.log('This is an IRFE')
}) ();

//hoisting:for 'let', print before declaration, will throw ReferenceError//
console.log(a);
let a;
a=10;
console.log(a);

//hoisting:for 'var', print before declaration, will print undefined//
console.log(b);
var b;
b=20;
console.log(b);


//local and global scope//
brai();
function bra1(){
     let x=2;
    console.log(x);
}
function brai(){
   let  x=5;
    console.log(x);
}

function home1(){
    console.log(y);
}
function home2(){
    console.log(y);
}let y=3;
home1();

// object oriented programming in javascript, objects are collections of properties and methods that can be used to represent real-world entities. Objects can be created using object literals, constructor functions, or classes. They can have properties (data) and methods (functions) that operate on that data. Objects can also inherit properties and methods from other objects through prototypal inheritance.//

let b={
    name:"John",
    age:14,
    grade:12,

    code :function(){
        console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old and I am in grade " + this.grade + ".");
    }
};b.code();

let a={
    name:'volkswagen',
    speed: 120,
    color:'bright orange',

    car:function(){
console.log( "Hi my car is a "+ this.name+" and it can go up to "+ this.speed +" km/hr and it is "+this.color+" in color.")
    }
}; a.car();

//pass by value and refrence//
//pass by value//
let a=456;
let b;
console.log(a,b);
b=a;
console.log(a,b);
b=453;
console.log(a,b);

//pass by reference//
let v={
    name:'Bolatito',
    age:25,
    gender:'female'
};
console.log(v.name,v.age,v.gender);
let v1;
v1=v;
let v2;
v2=v1;
console.log(v1,v, v2);
v2.name='Bolat';
console.log(v2);
console.log(v1,v);

//callback functions, a callback function is a function that is passed as an argument to another function and is executed after the outer function has completed. Callback functions are commonly used in asynchronous programming, event handling, and functional programming. They allow for greater flexibility and modularity in code by allowing functions to be reused and combined in different ways.//
let a=6;
let b=7;

function sub(a,b){
 return b-a;
}  //sub(4,5)

function add(a,b){
 return a+b;
} 

function div(a,b){
 return (a/b);
} 

function calc(a,b ,callback){
 return callback(a,b);
} console.log(calc(6,7,sub));
console.log(calc(6,7,add));
console.log(calc(6,7,div));


//Arrays in js//
let a=["Ademide", 25, true, "Developer", 3.14];
console.log(a);

let b=new Array(5);
b[0]="Hello";
b[1]="I am";
b[2]="Learning";
b[3]="JavaScript";
b[4]="Programming";


//let c;
//for(let c=0; c<5; c++){
 //   console.log(b[c]);
//}

//backward iteration
//let c;
//for(let c=4; c>=0; c--){
  //  console.log(b[c]);
//}

for( let x of b){
console.log(x);
}

// array methods
.push will add an element to the end of an array, 
.pop will remove the last element from an array, 
.shift will remove the first element from an array, 
and .unshift will add an element to the beginning of an array.//