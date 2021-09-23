const person = {
    id:1101,
    personName:"Askar",
    age:20,
    marks:[
        m1 = 95,
        m2 = 85,
        m3 = 20,
        m4 = 50,
        m5 = 90
    ]
}
var result = person.marks.every(check)
function check(value) {
        return value > 35        
} if (result == true){
    pass()
 }else fail()
function getReport(){
var total = person.marks.reduce(totalMarks)
var percent = (total/500)*100 
console.log("Total Marks:",total+"/500","\n","Percentage:",percent+"%")
function totalMarks(sum,val) {
    return sum + val
}return percent 
}
function pass() {
    console.log("Passed")
    console.log("ID:",person.id,"\n","Name:",person.personName,"\n","Age:"+ person.age,"\n","Marks:"+person.marks) 
    getReport()
}
function fail(){
    console.log("Failed") 
    console.log("ID:",person.id,"\n","Name:",person.personName,"\n","Age:"+ person.age,"\n","Marks:"+person.marks)
    getReport()
    
}

