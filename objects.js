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
var result = person.marks.forEach(check)
function check(result) {
    if (result > 35 ){
        return pass() 
        stop;
    }else return fail()
}

//function totalMarksAndPercentage() {
  //  var totalMarks = person.marks.reduce((a,b) => a+b,0)
    //var percentage = ''
//}
function pass(){
    console.log("Passed")
}
function fail(){
    console.log("Failed")
}