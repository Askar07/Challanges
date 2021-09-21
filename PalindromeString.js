function checkPalindrome(str) {
    const arrValues = stringVal.split('')
    const revArrValues = arrValues.reverse()
    const revString = revArrValues.join('')

    if (stringVal == revString){
        document.getElementById("p1").innerHTML = stringVal+" "+"is a Palindrome"
    }else document.getElementById("p1").innerHTML = stringVal+" "+"is not a Palindrome" 
}
const stringVal = document.getElementById("stringVal").value
    checkPalindrome(stringVal)