/**
 * map, filter, reduce are higher order functions
 * Higher order functions takes function as a parameter
 */
/* behind the *******@scenes of ******@map, @filter and @reduce */
// const arr = [1,2,6,73,5,8,9,11];

// function odd(x){
//   console.log(x%2);
  
//   return x%2;
// }
// const new__arr = arr.filter(odd);
// console.log(new__arr);




// ************Object ki values dynamically or singly kaise access karte hai bahut zarurat hai padne ki


// // output {26:2, 27:1, 28:1};
// users.reduce((acc, curr)=>
//   {
//     acc
//   },0)

const arr = [1,4,6,2,3,2];
const users1=[
  {fistName:'siddharth', lastname:'saniyan', age:26},
  {fistName:'amitabh', lastname:'bachchan', age:80},
  {fistName:'elon', lastname:'musk', age:50},
  {fistName:'akshay', lastname:'saini', age:28}
 ]
 const users=[
   {firstName:'siddharth', lastname:'saniyan', age:26},
   {firstName:'kk', lastname:'singer', age:26},
   {firstName:'amitabh', lastname:'bachchan', age:80},
   {firstName:'elon', lastname:'musk', age:50},
   {firstName:'akshay', lastname:'saini', age:28}
 ]
/**acc=> accumulator, acts like sum variable containing sum of all elements of array 
 * curr=> current
*/
// #Example1:
const arr1 = arr.reduce(function sum(acc, curr){
   acc+=curr;
   return acc;
},0);

// #Example2:
const obj= users1.reduce(function(acc, curr){
  if(acc[curr.age]){
    acc[curr.age]+=1;
  }else{
    acc[curr.age] =1
  }
  return acc;
},{})

// Example 3:
const arr3 = users.reduce(function(acc, curr){
  // console.log(curr['firstName']['firstName']);
  // console.log(acc)
  if(curr['firstName']['age']>30) acc.push({'firstName':curr['firstName']['firstName']});
  // console.log(acc);
  
  return acc;
},[])
// console.log(arr3);
// console.log(users.filter(function(user){
//   return user.age>30;
// }));
// console.log(users);

const newArr =[];
for(let i=0; i<users.length; i++)
  if(users[i].age>30) return newArr.push(users[i]);

console.log({newArr});

// #Example 4: DOt Notation vs Bracket Notation

// const obj2={name:'ankit', lastName:'kumar', age:50, location:'Meerut'};
// // obj2.location='delhi';
// const newKey = 'lastName';

// /*** using dot notation */
// console.log(obj2.newKey);
// //  o/p undefined

// /*******accessing key as a variable ****/
// console.log(obj2[newKey]);  
// // o/p kumar

// /***** accessing *****/
// obj2['newCity']='Noida';
// console.log(obj2['newCity']);

// #Example5:
const source = [
  {
    batch_id: '123',
    name: 'Tony',
    contact: '9872276210',
  },
  {
    batch_id: '231',
    name: 'Steve',
    contact: '7876543210',
  },
  {
    batch_id: '123',
    name: 'Bruce',
    contact: '6776543210',
  },
  {
    batch_id: '321',
    name: 'Clint',
    contact: '8954643210',
  },
  {
    batch_id: '123',
    name: 'Peter',
    contact: '7666543210',
  },
  {
    batch_id: '231',
    name: 'Phil',
    contact: '8896543210',
  },
  {
    batch_id: '321',
    name: 'Nick',
    contact: '9876521210',
  },
]

const result = [
  {
    '123': [
      {
        name: 'Tony',
        contact: '9872276210',
      },
      {
        name: 'Bruce',
        contact: '6776543210',
      },
      {
        name: 'Peter',
        contact: '7666543210',
      },
    ],
  },
  {
    '231': [
      {
        name: 'Steve',
        contact: '7876543210',
      },
      {
        name: 'Phil',
        contact: '8896543210',
      },
    ],
  },
  {
    '321': [
      {
        name: 'Nick',
        contact: '9876521210',
      },
      {
        name: 'Clint',
        contact: '8954643210',
      },
    ],
  },
]


function converSrcToResult() {
  //  source.reduce(function(acc, curr){
  //   // curr['batch_id']
  //   // acc.push(curr['batch_id'])
  //   curr['batch_id']

  //  })
  source.reduce(function(acc, curr){
    // curr['batch_id']
  //   acc.push(
  //     {
  //       curr['batch_id']:[
  //       {
  //         name:curr['name'],
  //         contact:curr['contact']
  //       },
  //    ]
  //   }
  // )
  },[])
}

