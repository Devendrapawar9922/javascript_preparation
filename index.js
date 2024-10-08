
//1) What is js ?


//2) Data types ?
// 2 types: 
// 1) PDT   2) NPD 
// PDT: SS NN BB U
// NPD : Array. Object, Functions


//3) Scope ?
// 1) Global scope
// 2) Local Scope 
// I) Functional Scope
// II) Block Scope

//    const peter = 45;
//    console.log(window)

// I) Functional Scope : 
// function greet (){
//     const a = "peter bhai"
//     console.log("hello word")
// }

// II) Block Scope 
// function greet() {
//     a = "peter bhai"
// }
// greet()
// console.log(a)



//4) Types of variables ?
// var, let, const 
// var : 
  // functional scope
  // var can be hoisted 
//   console.log(a)
//   var a = 100;
         
  // var can be redeclared
//   var a = 56;
//   var a = 48;
//   console.log(a)

  // var can be re-assign
//   var a = 56;
//       a = 48;
//   console.log(a)

// let : 
   // Block scope
   // let can not be hoisted
    //    console.log(a);
    //    let a = 57;
   // Let can not be re declare but can be re-assign
        // let a = 56;
        //     a = 59;
                
        // console.log(a)

// const :  
    // Block scope   
    // const can not be hoisted
    // const can not be re declare can not be re-assign