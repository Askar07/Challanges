var arrNum = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var postiveNum = []

function val(check)
{
    if (check > 0){
        postiveNum.push(check)
    }
}var check = arrNum.forEach(val)
console.log(postiveNum)