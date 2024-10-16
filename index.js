/////////////////////////////////////////////////Session-1/////////////////////////////////////////
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



/////////////////////////////////////////////////Session-2///////////////////////////////////////////

//1) JS identifiers:

// const arr = [1,2,3,4,5,6,7]


//2) Cases to define identifieres name :

//1) camel case 2) pascal case 
// 1) camel case : 
    // const addionOfNumbers = 
// 2) pascal case 
// const AddionOfNumbers = 


//3) Rules to write identifiers : 
//1) First character should be a letter or underscore
//2) Rest of the characters can be a letter or underscore or digit


//3) JS operators : 
// assignment
// arithmatic
// comparision 
// logical
// bitwise
// string
// other


// const ghg / 8797


// a + = 67     ====>  a= a+67
// a - = 45     ====> a = a - 45
// a *= 89      ===> a = a*89
// a **=7       ====? a = a^7


// let count = 0;
// function increament(){
//    count++;
// }

// function getCount(){
//     return count;
// }

// const increamentCounter = increament;


// increamentCounter();
// increamentCounter();


// console.log(increament());



// console.log("4" === "4")

// const var1 = true
// const var2 = false


// if(var1 && var2){
//   console.log("chotuuuuuuuuuuuuuu")
// }else{
//   console.log("bossssssssssssssssssseeeeeeeeeeee")
// }

// if(var1 || var2){
//   console.log("chotuuuuuuuuuuuuuu")
// }else{
//   console.log("bossssssssssssssssssseeeeeeeeeeee")
// }

// if(!var1){
//   console.log("chotuuuuuuuuuuuuuu")
// }else{
//     console.log("bossssssssssssssssssseeeeeeeeeeee")
//   }


//   console.log(!!!!var1)//false//true



//string and concanitation operator : (+)


// const number = +"67" + +"67"

// console.log( number)

// console.log("Z" < "z")


//Undefined and  Null :

// 

// let name; // declaration
//     name = "peterer"  /// assign

// console.log(name)

// // 
// const name =  null;
// console.log(typeof name)
// const name1 =  "";

// const number = NaN;
// console.log(typeof NaN)
// console.log("pterer" - 89)


// console.log(undefined === null)
// console.log(undefined == null)

// console.log(Boolean(null))
// console.log(Boolean(undefined))