function checkPalindrome(stringVal) {
    //var stringVal = document.getElementById("stringVal").value
    var arrValues = stringVal.split('')
    var revArrValues = arrValues.reverse()
    var revString = revArrValues.join('')

    if (stringVal == revString){
        /*document.getElementById("p1").innerHTML =*/ console.log(stringVal+" "+ "is a Palindrome")
    }else /*document.getElementById("p1").innerHTML = */console.log(stringVal+" "+ "is not a Palindrome") 
    
}
var stringVal = prompt("Enter a string:")
checkPalindrome(stringVal)