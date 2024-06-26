const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((container, a)=>{
   return container + a;
  }, 0)
};

const multiply = function(a) {
const arrayTo = a;
return arrayTo.reduce((container, a)=>{
  return container * a
},1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
const arraOf = [a]
if(!a){
  return 1
}
for(let i = a - 1; i > 1  ;i--){
arraOf[0] = arraOf[0] * i
}
 return arraOf[0]
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
