const findTheOldest = function(arrayToWork) {
  return arrayToWork.reduce((container, itemA)=>{
    if(!("yearOfDeath" in itemA)){
        itemA.yearOfDeath = new Date().getFullYear()
    }
    itemA.age = itemA.yearOfDeath - itemA.yearOfBirth;
    return container.age < itemA.age ? itemA:container;
   },{age: 0})
    
};

// Do not edit below this line
module.exports = findTheOldest;
