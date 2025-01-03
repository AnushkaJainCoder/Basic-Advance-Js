// // // // // // // // id doesnot exist
// // // // // // // // let access = document.getElementById("greenpDanet")   



// // // // // // // // access using class
// // // // // // // // let access = document.getElementsByClassName("similar") 

// // // // // // // // let access = document.getElementById("greenplanet");
// // // // // // // // access.innerHTML = "something"
// // // // // // // // console.log(access.innerHTML);


// // // // // // // // arent.children[1].style.color = 'red'
// // // // // // // // 'red'
// // // // // // // // parent.firstElementChild
// // // // // // // // <li id=​"op1">​…​</li>​
// // // // // // // // parent.SecondElementChild
// // // // // // // // undefined
// // // // // // // // parent.lastElementChild
// // // // // // // // <li>​…​</li>​
// // // // // // // // parent.nextElementSibling
// // // // // // // // <button onclick=​"fun()​">​ hide ​</button>​
// // // // // // // // parent.firstElementChild.nextElementSibling
// // // // // // // // <li style=​"color:​ red;​">​…​</li>​
// // // // // // // // const addText = document.createElement('div')
// // // // // // // // undefined
// // // // // // // // const p = document.createTextNode("hello")
// // // // // // // // undefined
// // // // // // // // addText.appendChild(p)
// // // // // // // // "hello"

// // // // // // // // const name = 20;

// // // // // // // // const person1 = {
// // // // // // // //     name: "Alice",
// // // // // // // //     age: 21,
// // // // // // // //     greetings: () => {
// // // // // // // //         console.log(`my name is ${this.name}`);
// // // // // // // //     },

// // // // // // // // }


// // // // // // // // person1.greetings();

// // // // // // // // const person2 = {
// // // // // // // //     name: "Bob",
// // // // // // // //     age: 30,
// // // // // // // //     greet: () => {
// // // // // // // //         console.log("Hello, my name is " + this.name); // 'this' does not refer to person2
// // // // // // // //         console.log(`my name is ${this.name}`);
// // // // // // // //     }
// // // // // // // // };

// // // // // // // // person2.greet(); // Output: Hello, my name is undefined


// // // // // // // class Point {
// // // // // // //     constructor(x, y) {
// // // // // // //       this.x = x;
// // // // // // //       this.y = y;
// // // // // // //     }
  
// // // // // // //     static displayName = "Point";
// // // // // // //     static distance(a, b) {
// // // // // // //       const dx = a.x - b.x;
// // // // // // //       const dy = a.y - b.y;
  
// // // // // // //       return Math.hypot(dx, dy);
// // // // // // //     }
// // // // // // //   }
  
// // // // // // //   const p1 = new Point(5, 5);
// // // // // // //   const p2 = new Point(10, 10);
// // // // // // // //   p1.displayName; // undefined
// // // // // // // console.log(`p1 name value is ${p1.displayName}`);
// // // // // // // console.log(`p1 distance value is ${p1.distance(2,5)}`);


// // // // // // //   p1.distance; // undefined
// // // // // // //   p2.displayName; // undefined
// // // // // // //   p2.distance; // undefined
  
// // // // // // //   console.log(Point.displayName); // "Point"
// // // // // // //   console.log(Point.distance(p1, p2)); // 7.0710678118654755



// // // // // // class Car{
// // // // // //     constructor(brand){
// // // // // //         this.brand = brand;
// // // // // //     }

// // // // // //     start(){
// // // // // //         this._startengine();
// // // // // //         console.log("started");   
// // // // // //     }
// // // // // //     _startengine(){
// // // // // //         console.log("engine drmmmm..................");
        
// // // // // //     }
// // // // // // }


// // // // // // const car = new Car("BMW");
// // // // // // //car.start();
// // // // // // car._startengine();




// // // // // class Car{
// // // // //     let a = 20;

// // // // // }


// // // // const obj = {
// // // //     name: 'deeecode',
// // // //     age: 200,
// // // //     print: function() {
// // // //       console.log(this)
// // // //     }
// // // //   }
  
// // // //   obj.print()


// // // const obj = {
// // //     name: 'deeecode',
// // //     age: 200,
// // //     print: function() {
// // //       function print2() {
// // //         console.log(this)
// // //       }
  
// // //       print2()
// // //     }
// // //   }
  
// // //   obj.print()



// // const obj = {
// //     name: 'deeecode',
// //     age: 200,
// //     print: () => {
// //       console.log(this)
// //     }
// //   }
  
// //   obj.print()



// const obj = {
//     name: 'deeecode',
//     age: 200,
//     // print: function() {
  
    
//     print2 : () => {
//         console.log(this);
//     // console.log(`arrow function: ${this}`)
//     },
//     //   console.log(this);
//       print1: function (){
//         console.log(this);
//         // console.log(`normal function: ${this}`)
//       }
//     //   console.log(this);
      
//     //   print2()
//     // }
//   }
  
//   obj.print2()
//   obj.print1()




class Car{
    static count = 0;
    constructor(){
        Car.count++;
    }
    static getCount(){
        return Car.count++
    }
}

let c = new Car();
let c1 = new Car();

console.log(Car.getCount());
