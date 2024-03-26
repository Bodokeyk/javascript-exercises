const removeFromArray = function(Array, ...aEliminar) {
    const arrayTo = Array;
    const toFilter = aEliminar;
    const filteredArr = arrayTo.filter(comprobar)
    function comprobar(char){
        for(const texto of toFilter){
            if(char === texto){
                return false
            }
        }
        return char
    }


    return filteredArr
};


// Do not edit below this line
module.exports = removeFromArray;
