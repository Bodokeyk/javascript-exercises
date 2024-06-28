const fibonacci = function(numberOf) {
    if(numberOf < 0){return "OOPS"}
const arrayOf = [0]
let resultadoDe = 0;
for(let i = 0;i < numberOf ;i++ ){
    if(arrayOf.length <= 1){
        arrayOf.push(1);
        console.log(arrayOf)
    }else{
        resultadoDe = arrayOf.reduce((container, valorA) => container + valorA,0)
        console.log(resultadoDe + " array = " + arrayOf)
    arrayOf[0] = arrayOf[1]
    arrayOf[1] = resultadoDe;
    }
}
return arrayOf[arrayOf.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
