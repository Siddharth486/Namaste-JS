// event loop
console.log('start');

setTimeout(()=>{
  console.log('callback queue')
},4000);

fetch('https://google.com')
.then((res)=> console.log('micro task queue'));

console.log('end');