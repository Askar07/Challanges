function checkPalindrome() {
    var stringVal = document.getElementById("stringVal").value
    var arrValues = stringVal.split('')
    var revArrValues = arrValues.reverse()
    var revString = revArrValues.join('')

    if (stringVal == revString){
        document.getElementById("p1").innerHTML = stringVal+" "+ "is a Palindrome"
    }else document.getElementById("p1").innerHTML = stringVal+" "+ "is not a Palindrome" 
    
}
