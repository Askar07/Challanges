const person = {
    id:1101,
    personName:"Askar",
    age:20,
    marks:[
        m1 = 95,
        m2 = 85,
        m3 = 100,
        m4 = 50,
        m5 = 90
    ]
}
var result = person.marks.every(check)
function check(value) {
        return value > 35        
} if (result == true){
    display()
 }else fail()

var total = person.marks.reduce(getReport)
function getReport(sum,val) {
    return sum + val
} var percent = (total/500)*100
function display(){
    pass()
    console.log("ID:",person.id,"\n","Name:",person.personName,"\n","Age:"+ person.age,"\n","Marks:"+person.marks) 

}
function pass() {
    console.log("Passed")
}
function fail(){
    console.log("Failed") 
    console.log("ID:",person.id,"\n","Name:",person.personName,"\n","Age:"+ person.age,"\n","Marks:"+person.marks)
     
}
console.log("Total Marks:",total)
console.log("Percentage:",percent)