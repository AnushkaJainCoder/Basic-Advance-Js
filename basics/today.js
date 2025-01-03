// // // // // // // // // // function add(a,b){
// // // // // // // // // //     return a+b;
// // // // // // // // // // }

// // // // // // // // // // function mult(a,b){
// // // // // // // // // //     // console.log(a*b);
    
// // // // // // // // // //     return a*b;
// // // // // // // // // // }

// // // // // // // // // // let ch = add(1,2 );

// // // // // // // // // // function calculator(a,b){
// // // // // // // // // //     // console.log(a);
// // // // // // // // // //     const result = mult(a,b);
// // // // // // // // // //     const addResult = add(a,b);
    
// // // // // // // // // //     return result;
// // // // // // // // // // }
// // // // // // // // // // console.log(calculator(1,2));

// // // // // // // // // const obj = {
// // // // // // // // //     name: 'Geeks',
// // // // // // // // //     greet: function() {
// // // // // // // // //         console.log(name);
// // // // // // // // //     }
// // // // // // // // // };
// // // // // // // // // obj.greet(); 

// // // // // // // // const originalObject = { 
// // // // // // // //     name: 'John', 
// // // // // // // //     hobbies: ['reading', 'painting'] 
// // // // // // // //   };
  

// // // // // // // //  // const copiedObject = originalObject;
// // // // // // // //   const copiedObject = { ...originalObject };
  

// // // // // // // //   copiedObject.hobbies.push('gaming');
  
// // // // // // // //   console.log(originalObject); 
  
// // // // // // // //   console.log(copiedObject); 
// // // // // // // //   // Output: { name: 'John', hobbies: ['reading', 'painting', 'gaming'] }





// // // // // // // let ar = {
// // // // // // //     firstname: "anu",
// // // // // // //     lastNmae: "dj",
// // // // // // //     password: "wedje"
// // // // // // // }

// // // // // // // let p = JSON.stringify(ar);
// // // // // // // console.log(p);

// // // // // // // let q = JSON.stringify(ar,(key, value) => {
// // // // // // //     if(key != 'password'){
// // // // // // //         return value
// // // // // // //     }
// // // // // // // },20);
// // // // // // // console.log(q);


// // // // // // // let pq = JSON.parse(q, (key,value)=>{
// // // // // // //     if(key == 'firstname'){
// // // // // // //         return value
// // // // // // //     }
// // // // // // // });
// // // // // // // console.log(pq);
// // // // // // // console.log(
// // // // // // //     typeof(null));


// // // // // // // let arr = [1,2]
// // // // // // // let arrp = new Array(5)
// // // // // // // let arrpp = new Array(5,12)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)
// // // // // // // arrp.push(23)

// // // // // // // console.log(arrp);
// // // // // // // console.log(arrpp);


// // // // // // // // let arrps = []





// // // // // // let parent = {};
// // // // // // let child1 = {...parent}
// // // // // // let child2 = parent
// // // // // // child1.name = "Manoj"
// // // // // // child2.name = "Anu"
// // // // // // console.log(`parent: ${parent.name}`);
// // // // // // console.log(`child1: ${child1.name}`);
// // // // // // console.log(`child2: ${child2.name}`);
 



// // // // // let ages = [1,2,3]
// // // // // // let parr = arr.map((n)=>  n+2
       
// // // // // // )
// // // // // // let car = arr.reduce((max,curr)=>{
// // // // // //     if(curr>max) max=curr;
// // // // // //     return max;
// // // // // // })

// // // // // // let red = ages.reduce((max, curr)=>{
// // // // // //     if(curr>max) max = curr
// // // // // //     return max

// // // // // // })


// // // // // let fil = ages.filter((age)=>age>2)
// // // // // let reduce = ages.reduce((ans, age)=>{
// // // // //     debugger;
// // // // //     for(let i=0;i<ages.length;i++){
// // // // //         console.log(`age: ${age}`);
// // // // //         console.log(`ans: ${ans}`);
        
        
// // // // //         debugger
// // // // //         if(age>2) age.push(ans);

// // // // //     }
// // // // //     return ans;
// // // // // },0)


// // // // // console.log(`reduce: ${reduce}`);
// // // // // console.log(`filter: ${fil}`);



// // // // // // let shoppingCart = [
    
// // // // // //     {name: 'Oranges', price: 122, qnty: 3},

// // // // // //     {name: 'Apple', price: 223, qnty: 3},

// // // // // //     {name: 'Apple', price: 213, qnty: 3},

// // // // // //     {name: 'grapes', price: 90, qnty: 3},

// // // // // // ]
// // // // // // const products = shoppingCart.reduce((productgrp, product)=>{
// // // // // //     const name = product.name;
// // // // // //     if(productgrp.name == null){
// // // // // //         productgrp.name = {}
       
// // // // // //     }
// // // // // //     productgrp[name] = product


// // // // // //     return productgrp;

// // // // // // },{})

// // // // // // console.log(products);



// // // // // error handling
// // // // try{
// // // //     let jsonFile = '{"name": "Anu", "age": "21"}'
// // // //     let objectFile = JSON.parse(jsonFile);
// // // //     console.log(objectFile);
// // // //     if(!objectFile.email){
// // // //         console.log(objectFile.email);
        
// // // //         throw new SyntaxError("email not exist");
// // // //     }
// // // //     // else
    

// // // // }
// // // // catch(err){
   
// // // //         console.log(err);
    
    
// // // // }

// // // // //check function is valid or not
// // // // function validEmail(email){
// // // //     if(!email.includes("@")){
// // // //         throw new Error("ivalid email")
// // // //     }
// // // //     console.log("true");
    
// // // // }

// // // // try{
// // // //     validEmail("anu@gmail.com")
// // // // }
// // // // catch(err){
// // // //     console.log(err);
    
// // // // }



// // // //oops

// // // function BankAccount(){
// // //     this.acountName = name;
// // //     this.accountNumber = Date.now();
// // //     this.balance = balance 

// // // }



// // var a = Math.sqrt(-9);
// // if(a == NaN){
// //     console.log("a is equal to NaN");
// // }
// // else{
// //     console.log("a is not equal to NaN");
// // }
// // console.log(a);

// // console.log(typeof(a));


// // // 

// var name ="jk";
// function Dog(name, breed, weight){
//     // this.name = name;
//     return name
//     // this.breed = breed
//     // this.weight = weight
//     // this.sound = () =>{

//     // }
// }

// var fido =  Dog("Fido", "Mixed", 21);
// console.log(fido);

// // var fluffy = new Dog("fluffy", "Poodle", 21);




function SomeOne(eyes, nose, ears){
    this.eyes = eyes;
    this.ears = ears
    this.nose = nose
}

SomeOne.prototype.handsome = true;
let female = new SomeOne(2,1,2);
let animal = new SomeOne(2,1,4);
// console.log(female.handsome);
// console.log(animal.handsome);
console.log(female.hasOwnProperty("handsome"));
console.log(animal.hasOwnProperty("handsome"));



