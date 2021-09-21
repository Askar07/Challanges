function checkPalindrome(str) {
    const arrValues = stringVal.split('')
    const revArrValues = arrValues.reverse()
    const revString = revArrValues.join('')

    if (stringVal == revString){
        console.log(stringVal+" "+"is a Palindrome")
    }else console.log (stringVal+" "+"is not a Palindrome" )
}
const stringVal = prompt("Enter a string")
    checkPalindrome(stringVal)