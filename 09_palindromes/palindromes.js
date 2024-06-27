const palindromes = function (stringTo) {
const arrayOfPalindrome = stringTo.toLowerCase().split("").filter((char) =>
    {
        if((char >= "a" && char <= "z")||(char >="A" && char <= "Z")||
    (char >= "0" && char <= "9")){
            return char
        }
    }
)
const arrayPalindromed = arrayOfPalindrome.slice().reverse()
console.log(arrayOfPalindrome.join("") + " ==  " + arrayPalindromed.join("") )
if(arrayOfPalindrome.join("") === arrayPalindromed.join("")){
   return true
}else{
   return false
}
};

// Do not edit below this line
module.exports = palindromes;
