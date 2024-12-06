// data types in js categerised into two parts 
    // 1.Primitive (7 types):
        // String, Number, Boolean, null, undefined, Symbol, BigInt

    // const overs = 20    //here we are not giving any data type so that it dynamically typed

    const id1 = Symbol('123')
    const id2 = Symbol('123')
    console.log(id1 === id2);

    const bigNumber = 99999999129n
    console.log(typeof(bigNumber));

    //2.Non-Primitive or reference :
        // Array, Objects, Functions

    const heros = ["ironman", "thor", "loki"];   //array

    let obj = {                                  //object          
        name : "vinit",
        age: 22,
    }

    const myfunc =  function() {
        console.log("Hello World");
        
    }

    console.log(typeof(myfunc));
    


