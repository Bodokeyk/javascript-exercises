const leapYears = function(leapyear) {
if(leapyear % 4 == 0 && leapyear % 100 !== 0){
    return true
}else if(leapyear % 100 == 0 && leapyear % 400 == 0){
    return true
}else{
    return false
}
};

// Do not edit below this line
module.exports = leapYears;
