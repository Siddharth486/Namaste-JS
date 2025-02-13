debugger;
function parent(){
  let num = 1;
  var child = ()=>{
      console.log(num);
  }
  num++;
  return child;
}

const child = parent();
child();