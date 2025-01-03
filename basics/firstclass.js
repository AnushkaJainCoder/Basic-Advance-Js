// // // // // // // // // // const topic = (t) => 
// // // // // // // // // //     `hello ${t}`;

// // // // // // // // // // const display = (message)=>{
// // // // // // // // // //     console.log(message);
    
// // // // // // // // // // }
// // // // // // // // // // display(topic("yghnjmk"));



// // // // // // // // // const n = [1,2,3];
// // // // // // // // // // const k = (m) => m*2;
// // // // // // // // // const p = n.map((m)=>m*2);
// // // // // // // // // console.log(p);

// // // // // // // // // const fun1 = (greet) => () =>{
// // // // // // // // //     // return () => {
// // // // // // // // //         console.log(greet);
        
// // // // // // // // //     // }
// // // // // // // // // }
// // // // // // // // // let p1 = fun1("helo");
// // // // // // // // // p1(); 


// // // // // // // // // // impure func: giving same input not retuning same otput as the output depends  on the value of a
// // // // // // // // // const a = 20;

// // // // // // // // // //pure func
// // // // // // // // // const b = (c,d) => {
// // // // // // // // //     return `the sum is ${c+d} + ${a}`;
// // // // // // // // // }
// // // // // // // // // console.log(b(2,3));


// // // // // // // // // // const c1 = fun1("hello");
// // // // // // // // // // const c2 = fun1("by");
// // // // // // // // // // c1();
// // // // // // // // // // c2();

// // // // // // // // // // fun1()();

// // // // // // // // // // display(p);

// // // // // // // // // //CLOSURES
// // // // // // // // // const welc = () =>{
// // // // // // // // //     let name = "Anu";
// // // // // // // // //     return () => "welcome " + name;
// // // // // // // // // }

// // // // // // // // // const v = welc();
// // // // // // // // // console.log(v());

// // // // // // // // // const updateCounter = () =>{
// // // // // // // // //     var count = 0;
// // // // // // // // //     return () => count++;
// // // // // // // // // }

// // // // // // // // // const ans = updateCounter();
// // // // // // // // // console.log(ans());
// // // // // // // // // console.log(ans());
// // // // // // // // // console.log(ans());
// // // // // // // // // console.log(ans());

// // // // // // // // // //composition func
// // // // // // // // // //pass one function as an argument to another fun

// // // // // // // // // const getAge = () => 21;
// // // // // // // // // const isAllowed = (getAge) => getAge >= 21;
// // // // // // // // // const sd = (f, g) => X = f(g(x));
// // // // // // // // // console.log(sd);

// // // // // // // // // // MAP 
// // // // // // // // // const arr = [12, 2, 3];
// // // // // // // // // const parr = arr.map((n) => n+2);
// // // // // // // // // console.log(parr);



// // // // // // // // // //FILTER AND MAP
// // // // // // // // // const arp = [1,2,34,5];
// // // // // // // // // const prp = arp.map( (n) => n*2);
// // // // // // // // // console.log(prp);

// // // // // // // // // const srp = arp.filter((n) => n%2 == 0);
// // // // // // // // // console.log(srp);

// // // // // // // // // //rec
// // // // // // // // // const rec =  (n) =>{
// // // // // // // // //     // for(let i=n;i<11;i++){
// // // // // // // // //     //     console.log(i);   
// // // // // // // // //     // }
// // // // // // // // //     if(n==11) return;
// // // // // // // // //     console.log(n);
    
// // // // // // // // //     rec(n+1);
// // // // // // // // // }

// // // // // // // // // rec(0);

// // // // // // // // // //higher order functionc
// // // // // // // // // let input = "l"
// // // // // // // // // const high = (div, mult, add, input) => {
// // // // // // // // //     if (input === '+'){
// // // // // // // // //         console.log("+");
// // // // // // // // //         return
        
// // // // // // // // //     }
// // // // // // // // //     console.log("other");
    
// // // // // // // // // }

// // // // // // // // // high(0,0,0,input);


// // // // // // // // // //curry
// // // // // // // // // const add = (a) => (b) => (c)=>{
// // // // // // // // //     console.log(a+b+c);
    
// // // // // // // // // }
// // // // // // // // // const p1p = add(1)(2)(3);
// // // // // // // // // p1p;


// // // // // // // // // //PROXY OBJECTS

// // // // // // // // // let user = {
// // // // // // // // //     name: "Änushka",
// // // // // // // // //     password: "fhrhrh"
// // // // // // // // // }
// // // // // // // // // const option = {
// // // // // // // // //     get(target, prop, value){
// // // // // // // // //         if(prop === "password"){
// // // // // // // // //            throw new Error("denieeeeeeeee")
// // // // // // // // //         }
// // // // // // // // //         return target[prop];
       
// // // // // // // // //     },
// // // // // // // // //     ownKeys(target){
// // // // // // // // //         return Object.keys(target).filter(key => !key.startsWith("password"));
// // // // // // // // //     },
// // // // // // // // //     set(target, prop, value){
// // // // // // // // //         if(prop === 'salary'){
// // // // // // // // //             return false;
// // // // // // // // //         }
// // // // // // // // //         target[prop] = value;
// // // // // // // // //         return false;
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // user = new Proxy(user, option);
// // // // // // // // // // myproxy.name = "Sarthak"
// // // // // // // // // // console.log(user.name);
// // // // // // // // // // // console.log(myproxy.name);
// // // // // // // // // // user.name = "ÄNUSH"
// // // // // // // // // // console.log(user.name);
// // // // // // // // // console.log(Object.keys(user));

// // // // // // // // // console.log(Object.values(user));

// // // // // // // // // // console.log(myproxy.name);






// // // // // // // // console.log("Hello World from javascript!");
// // // // // // // //  console.log("Hello World from javascript!");
// // // // // // // //  console.log("Hello World from javascript!");
// // // // // // // //  console.log("Hello World from javascript!");
// // // // // // // //  console.log("Hello World from javascript!");
// // // // // // // //  console.log("Hello World from javascript!");
// // // // // // // //  console.log("Hello World from javascript!");
// // // // // // // // //  console.log("Hello World!);


// // // // // // // // //
// // // // // // // // console.log("Hello");
// // // // // // // // for(var i = 0;i<4;i++) {
// // // // // // // //     console.log(Hello);
// // // // // // // // }
// // // // // // // // const x=0;
// // // // // // // function exampleFunction() {
// // // // // // //     let x = "declared inside function"; // x can only be used in exampleFunction
// // // // // // //     console.log("Inside function");
// // // // // // //     console.log(x);
// // // // // // // }
  
// // // // // // //   console.log(x); // Causes error
  

















// // // // // // // bec we are redeclaring with the same name  in the function that's why it is functional scope and it is treated as new variable
// // // // // // // var a = 10;

// // // // // // // function test() {
// // // // // // //     console.log(a);       //undef
// // // // // // //     var a = 20;
// // // // // // //     console.log(a);       //20
// // // // // // // } 

// // // // // // // test();
// // // // // // // console.log(a);



// // // // // // // let x = 5;

// // // // // // // if (true) {
// // // // // // //     let x = 10;
// // // // // // //     console.log(x);
// // // // // // // }

// // // // // // // console.log(x);



// // // // // // // for (var i = 0; i < 3; i++) {
// // // // // // //   setTimeout(() => {
// // // // // // //       console.log(i);
// // // // // // //   }, 100);
// // // // // // // }




// // // // // // function scopeTest() {
// // // // // //   var a = 1;

// // // // // //   if (true) {
// // // // // //       var a = 2; // Same variable
// // // // // //       console.log(a);
// // // // // //   }

// // // // // //   console.log(a);
// // // // // // }

// // // // // // scopeTest();


// // // // // // function outer() {
// // // // // //   var outerVar = "I'm outside!";

// // // // // //   function inner() {
// // // // // //     var outerVar = "I'm done";
// // // // // //       console.log(outerVar);
// // // // // //   }

// // // // // //   inner();
// // // // // //   console.log(outerVar);
// // // // // // }

// // // // // // outer();




// // // // // function outer() {
// // // // //   let a = 1;

// // // // //   function inner() {
// // // // //       let a = 2;
// // // // //       console.log(a);
// // // // //   }

// // // // //   inner();
// // // // //   console.log(a);
// // // // // }

// // // // // outer();

// // // // function example() {
// // // //   if (true) {
// // // //       let y = 20; // y is block-scoped
// // // //       console.log(y); // Outputs: 20
// // // //   }
// // // //   console.log(y); // ReferenceError: y is not defined
// // // // }
// // // // example();








// // // function outerFunction() {
// // //   let outerVariable = 'I am from the outer scope';

// // //   function innerFunction() {
// // //       let innerVariable = 'I am from the inner scope';
// // //       console.log(outerVariable); // Accessing outerVariable from the outer scope
// // //       console.log(innerVariable); // Accessing innerVariable from the inner scope
// // //   }

// // //   innerFunction();
// // // }

// // // outerFunction();




// // // function fetchData(userId, callback){
// // //   setTimeout(() => {
// // //     const data = {
// // //       id: userId,
// // //       name: 'anu'
// // //     };
// // //     callback(data);
// // //   },1000)
// // // }
// // // function printData(data){
// // //   console.log('id '+data.id + ' name '+ data.name);
  
// // // }

// // // fetchData(1,printData)




// // // callbacck hell
// // function firstFunction(callback){
// //   setTimeout(()=>{
// //     	console.log('first function');
// //       callback();
// //   },1000)
// // }

// // function secondFun(callback){
// //   setTimeout(()=>{
// //     console.log('sec function');
// //     callback();
// //   },1000)
// // }

// // function thirdFun(callback){
// //   setTimeout(()=>{
// //     console.log('third fun');
// //     callback()
// //   },1000)
// // }

// // firstFunction(()=>
// //   secondFun(()=>
// //     thirdFun(()=>{
// //   console.log('last');
  
// // })))


// // //promises
// function fetchData(){
//   return new Promise((resolve, reject)=>{
//     const data = {
//       id: 1,
//       name: 'Anu'
//     }
//     resolve(data)
//   })
// }

// fetchData().then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })




let arr = [1,2,3]
let ans = arr.map(n => n * 2)
console.log(ans);
let filterans = arr.filter(n => n%2 ===0)
console.log(filterans);
let reducer = arr.reduce((accumulator, current)=>accumulator + current, 0)
console.log(reducer);









