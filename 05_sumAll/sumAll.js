const sumAll = function(start, end) {
let result = 0;
let i;
if(start < 0  || end < 0) return "ERROR"
if((typeof start !== "number") || (typeof end !== "number")) return "ERROR"
if(start < end) {
    i = start;
    while(i <= end){
        result += i
        i++;
    }
}else{
    i = end;
    while(i <= start){
        result += i
        i++;
    }
}

return result
};

// Do not edit below this line
module.exports = sumAll;
