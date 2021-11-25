//  let vs var vs const

    // var a=10;
    //  var a=50;
    //  no error in declaration;

    // let a=10;
    // let a=50;
    // error in declaration;

    // const a=10;
    //   a=50; // we cannot override the value
    //  const a;  //We cannot redeclare in same scope;
    //  no error in declaration;

// Let does not allow to redeclare the same variable in same scope
// Const does not allow to redeclare as well as re assign the variable
// If we use const we have to initialize the variable at the time of assignment.
// Javascript variables are weakly typed or dynamically typed language

var ar = ['one', 'two', 'three'];
var ar2 = ar; // assign ar to ar2

ar2[3] = [2,3,4]; // modify element in ar2

// change to ar2 also changes ar
console.log( ar ); // ["one", 2, "three"]
console.log( ar2 )