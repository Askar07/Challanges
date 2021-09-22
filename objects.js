const person = {
    id:1101,
    personName:"Askar",
    age:20,
    marks:[
        m1=95,
        m2=85,
        m3=100,
        m4=50,
        m5=80
    ]
}
function check(result) {
    if (result > 35 ){
        console.log("Passed")
    }else console.log("failed")
}

function totalMarksAndPercentage() {
    var totalMarks = person.marks.reduce((a,b) => a+b,0)
    var percentage = ''
}