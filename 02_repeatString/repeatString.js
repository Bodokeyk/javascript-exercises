const repeatString = function(string,count) {
let stringRepeated= '';
if(count < 0){
    stringRepeated += "ERROR"
}
for(let i = 0; i < count;++i)
{
  stringRepeated += string;  
}
return stringRepeated
};

// Do not edit below this line
module.exports = repeatString;
