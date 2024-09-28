/** @Position1 @Winner */
/***********
// 1. DRY (Don't Repeat yourself)
// 2.my code is modular/ single responsibilty principle/ divided into components
// 3. reusable
// 4. only single loop
***/

let radius=[1,2,3,4];

function areaOfCircle(r){
  return Math.PI*r*r;
}

function circumferenceOfCircle(r){
  return 2*Math.PI*r;
}

function diameter(r){
  return 2*r;
}

// Array.prototype 
function circle(calculate){
  let arr=[];
  for(var i=0; i<radius.length; i++)
       arr.push(calculate(radius[i]));
  
  return arr;
}

console.log(circle(areaOfCircle));
console.log(circle(circumferenceOfCircle));
console.log(circle(diameter));


/** @Position2ndlast */
/**
 * issues in this code
 * 1. not modular  function area not have single responsibilty
 * 2. not reusable cann't use code  for each keys
 * 3. repeatation of code  i.e  arr.push 
 * 
 * good part is
 * 1. not multiple loops
 */

/**
let radius=[1,2,3,4];

function area(key){
  let arr=[];
  for(var i=0; i<radius.length; i++){
    if(key===1)
       arr.push(Math.PI*radius[i]*radius[i]);
    else if(key===2)
      arr.push(2*Math.PI*radius[i]);
    else 
      arr.push(2*radius[i]);
  }
  return arr
}

console.log(area(1));
console.log(area(2));
console.log(area(3));
******/

/** @Positionlast */
/**
 * very poor code
 * 1. multiple loops, multiple arrays
 * 2. repeatation of code  i.e loop and arr.push 
 *  
 * good is 
 * 1. reusability
 */

/**
let radius=[1,2,3,4];
let arrArea=[];
let circumferenceArr = [];
let diameterArr = [];

function area(){
  for(let i=0; i<radius.length; i++)
      arrArea.push(Math.PI*radius[i]*radius[i]);
  
}

function circumference(){
  for(var i=0; i<radius.length; i++)
    circumferenceArr.push(2*Math.PI.radius[i]);
}

function diameter(){
  for(let i=0; i<radius.length; i++)
    diameterArr.push(2*radius[i]);
}
area();
circumferenceArr();
diameter();
console.log(arrArea);
console.log(circumferenceArr);
console.log(diameterArr);

**/
