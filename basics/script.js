// // // // const btns = document.querySelectorAll("button");
// // // // for(const butt of btns){
// // // //     butt.addEventListener("click",createPara);
// // // //     // console.log("clcked");
    
// // // // }
// // // // function createPara(butt){
// // // //     const para = document.createElement("p");
// // // //     para.textContent = `You pressed ${butt.target.textContent}`;
// // // //     document.body.appendChild(para);
// // // // }
// // // // const button = document.querySelector("button");
// // // // const p = document.querySelector("p");
// // // // button.addEventListener("click", updateName );

// // // // function updateName(){
// // // //     const name = prompt("enter name");
// // // //     p.textContent = `Hello ${name}`;
// // // // }


// // // sum(displayPage,1,2);

// // // function sum(callback, x,y){
// // //     let result = x+y;
// // //     callback(result);
// // // }

// // // function displayPage(result){
// // //     console.log(result);
// // //     document.getElementById("h1").textContent = result;
// // // }


// // // function loadscript(src){
// // //     var script = document.createElement("script");
// // //     script.src = src;
// // //     script.onload = () =>{
// // //         console.log("loaded script "+ src);
        
// // //     }
// // //     document.body.appendChild(script);
// // // }
// // // loadscript("firstclass.js")




// // //--------------------------------- callback
// // function sum(a,b){
// //     console.log(a+b);
    
// // }

// // function calculator(a,b,sum){
// //     sum(a,b);
// // }

// // calculator(1,2,sum)

// // calculator(1,2, (a,b) => {
// //     console.log(a+b);
    
// // })












// // // function compile(code, run){
// // //     // run(code);
// // //     console.log("processing");
    
// // //     setTimeout(()=>{
// // //         console.log("code compiled successfully");
       
        
// // //         run(code);

        
// // //     }, 3000);
   
// // //     // setTimeout(() => {
        
// // //     // }, timeout);
// // //     // setTimeout(()=>{
// // //     //     console.log("compile successfully");
// // //     //     run(code, )
        
// // //     // })
// // // }

// // // function run(code){
// // //     console.log("run successfully", code);
// // //     console.log("done");
    
// // // }

// // // compile("print(hello world)",run)


// // function checkusername(user,pass, checkPas){
// //     if(user != "Anu"){
// //         console.log("ïnvalid");return;
        
// //     }
// //     setTimeout(()=>{
// //         console.log("valid user");
// //         setTimeout(()=>{
// //             if(pass!="ngnkr"){
// //                 console.log("invalid");
// //                 return;
                
// //             }
// //             console.log("authenticated");
// //             setTimeout(()=>{
// //                 console.log("home page");
                
// //             }, 3000)
// //         },3000);
           
// //     }, 3000);
// // }


// // checkusername("Anu","ngnkr")

// // // function checkPas(pass, home, user){
   
// // //     setTimeout(()=>{
// // //         if(pass!="ngnkr"){
// // //             console.log("invalid");
// // //             return;
            
// // //         }
// // //         console.log("authenticated");
// // //         home(user);
        

// // //     },3000)
// // // }

// // // function home(user){
// // //     console.log("Home page");
    
// // // }

// // // checkusername("Anu","ngnkr",checkPas("ngnkr",home("Anu"),"ngnkr") );



// function webpage(){
//     setTimeout(()=>{
//        console.log("NavBar");
//        setTimeout(()=>{
//         console.log("Body");
//             setTimeout(()=>{
//                 console.log("API Image");
//                 setTimeout(() => {
//                     console.log("footer"); 
//                 }, 3000);   
//             },2000) 
//        }, 3000)
 
//     }, 1000)
// }
// webpage()

// doubt
function webpage(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("NavBar");
            resolve("123")
            
            // console.log();
            
            // reject("dobe");
        },1000)
    })
}

function body(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("body");
            resolve("helo");
            
        })
    })
    
}

webpage().then((res)=>body()).then(((res)=>{
    console.log(res);
    
})).catch((err)=>{
    console.log("hello");
    
});
// );


