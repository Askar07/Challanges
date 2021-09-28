// Area of triangle
function triArea(base,height){
    return (base*height)/2
}console.log(triArea(2,5))

// maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
	return (side1 + side2)-1
}console.log(nextEdge(8,10))

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function add(num) {
	return num = num + 1
}console.log(add(55))

// Convert Hours into Seconds

function howManySeconds(hours) {
	return hours*3600
}console.log(howManySeconds(3))

// Perimeter of a Rectangle

function findPerimeter(length, width) {
	return 2*(length+width)
}console.log(findPerimeter(5,8))

// Power Calculator

function circuitPower(voltage, current) {
	return voltage * current
}console.log(circuitPower(430,3))

// lesthanorequal
function lessThanOrEqualToZero(num) {
return num = num >= 0 ? "false":"true"
}console.log(lessThanOrEqualToZero(5))

// Return the Sum of Two Numbers
function addition(a, b) {
	return a + b
}console.log(addition(5,10))
//square of num
function squared(a) {
	return a * a
}console.log(squared(5))

// Return the First Element in an Array
function getFirstValue(arr) {
	return arr = arr.shift()
}console.log(getFirstValue([1, 2, 3]))

// Sum of Polygon Angles
function sumPolygon(n) {
	return (n - 2) * 180
}console.log(sumPolygon(3))

// Convert Minutes into Seconds
function convert(minutes) {
	return minutes * 60
}console.log(convert(5))

// compare the values of diffrent array 
function canNest(arr1, arr2) {
	let amin = Math.min(...arr1)
	let bmin = Math.min(...arr2)
	let amax = Math.max(...arr1)
	let bmax = Math.max(...arr2)
	if (amin > bmin && amax < bmax)
		{
			return true
		}
		else {return false}
	}console.log(canNest([1, 2, 3, 4], [0, 6]))
	
// Less Than 100?
function lessThan(a,b)
{
	let c = a + b
	if (c < 100){
		return true
	}else return false
}console.log(lessThan(10,25))

// Using the "&&" Operator
function and(a,b) {
	return a && b
}console.log(and(true,false))

// Basketball Points You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value
function finalPoints(team1,team2) {

	// goal scored by team 1 is 2 times 
	// goal scored by team 2 is 3 times
	let c = (team1*2) + (team2*3)   //c is the total goal scored in the match
	return c
}console.log(finalPoints(1,1))

// Profitable Gamble
function profitAbleGame(prob,prize,pay) {

	let profit = prob * prize //profit is calculated by probablity of winnig and prize amount
	
	// netOutCome = (prob * prize) - pay // to calculate the netoutcome 
	
	if (profit > pay)
	{
		return true 
	} else return false
}console.log(profitAbleGame(0.9,3,2))

// calaculate arithmetic exp using eval()

function calc(str){
  return eval(str) //eval fucntion will automatically evalutes the arithmetic exp in the string
}console.log(calc("10+20"))

// calaculate Frames per seconds
function framesPerSeconds(min,frame) {
	var fps = (min * 60) * frame //fps is calcauted by total number of frames given per min which min is converted into seconds  
	return fps	//returns FPS
}console.log(framesPerSeconds(10,25))

//boolean to string conversion
function boolToStr(value){
	return value.toString() //tostring() converst all kind of expresions into string value
}console.log(boolToStr(true))

// find smallest and biggest number in an array

function smallestToBiggest(arr){
	var a = arr.sort((x,y) => x - y) //the given input array is sorted and stored in a var a 
	var min = Math.min(...a)//from the sorted array we get the min value using min() stored in min 
	var max = Math.max(...a) //same process repeated to get max value max() function used and stored in  max 
	var finalVal =[] // A empty array named finalVal is created to get the min and max values from the array
	if (min < max )// condition to check whether the min val is less than max val 
	{
		finalVal.push(min,max)//both values pushed in array and displayed
		
	}
	return finalVal
}console.log(smallestToBiggest([5,1,8,11,2,27,15,20]))

// convert object to Array
const person = {						 //object named person created with a array object
	firstName : "Askar",
	lastName : "Ask",
	age : 20,
	courseCompleted:["SSLC","HSC","B.E"]
}
var obj      // varible declared
function toArray(obj){
	obj = Object.entries(person)  // objec()function is used to get the entries from the object
	return obj
}console.log(toArray(obj))

//sort unsortable array
function toSort(arr){
	let a = arr.flat() // flat() function function create a new array in which sub array concatnated
	let b =a.sort() //sorting the concat array values
	if (a == b) // checking the conndion sorted and concat array should be same
	{
		return b //return the val stored 
	}else // if the array depth is more then 
		a = arr.flat(4)
	    b = a.sort()
	    return b
}console.log(toSort([[4], [1,8], [3]]))

// Square Every Digit
function squareEveryDigit(val){
	var arr = val.toString().split('')       //the digit are split into strings 
	var str = arr.map(x => x**2).join('')   // the splited string are in array structre each vlaue is squared and joined using map() anD join()
	return str   //returm type should be digit not a string value
}console.log(squareEveryDigit(5213))

// teavelling salesman Problem
function travellingSalesman(path){
	var res = path		//local variable to store the value of path
	if ( path == 0 || path == 1) // conditon if path is 0 or 1 it will be 1 path it will not enter the loop
	{
		return 1
	}
	while (path >1) //if path is > 1 neter the loop
	{
		path-- // path will be decremented on each iteration
		res *= path // decremented path value will be multiplied with previous path value 
	}return res //after the condition terminted it reutrns the value stored in res
}console.log(travellingSalesman(5))

// find discount 
	function dis(price,discount) {
		var discountVal = price - ((price * discount)/100)
		var res = parseFloat(discountVal).toFixed(2)
		return res
}console.log(dis(89,20))

// uppercase to front
function upperCaseToFront(str){
	str.split("")
	const regex = /[A-Z]/g
	var caps = str.match(regex)
	var final=[]
	final.push(caps)
	const reg = /[a-z]/g
	var small = str.match(reg)
	final.push(small)
	var capsToSmall = final.flat(2).join("")
	return capsToSmall

}console.log(upperCaseToFront("GreAsE"))

// odd or even by summing the numbers
function oddOREven(num){
	var arr = Array.from(String(num),Number)
	sum = (previousVal,currentVal) => previousVal + currentVal
	var val = arr.reduce(sum)
	if(val %2 == 0){
		 return"evenish"
	}else { return "oddish"}
}console.log(oddOREven(4433))

// using class 

class Circle {      //class created 
	constructor(radius){ // constructor of a class with a parameter
	this.radius = radius  
	}
getArea(){   //function been created to process the area and perimeter 
	console.log(3.14*(this.radius**2))  // here we can use Math.PI for pi value =22/7 which is 3.14
}
gerPerimeter(){
	console.log(2*3.14*this.radius)   // here we can use Math.PI for pi value =22/7 which is 3.14
}
}
var circleArea = new Circle(4)
circleArea.getArea()
circleArea.gerPerimeter()

// concatenate function
function concatArray(arr1,arr2) {
	var val = arr1.concat(arr2)// concat function is used to combine multiple values in single element
	return val
}console.log(concatArray([10,15,20],[6,5,4]))

function concatString(str1,str2){
	var val = str1.concat(str2)
	return val
}console.log(concatString("Hello","world"))

// SecondLargestNumbers in a array
function secondLargestNum(arr) {
	var maxVal = Math.max.apply(0,arr) //get the max value in array 
	largeNum = arr.indexOf(maxVal)  // store the index value of largest number
	arr[largeNum] = -Infinity    //replace the the value stored in the index to -infinity now the largest value will be replaces
	var secondMax = Math.max.apply(0,arr) // agian get the max value from the array now the second largest value will be taken 
	var newArr = arr
	console.log(newArr)
	return secondMax
}console.log(secondLargestNum([100,115,218,16,11,20]))

// factors of odd or even
function factorGroup(num){
	var arr =[]
	for (let i = 1; i <= num; i++){
		if (num%i==0)
		{
			arr.push(i)	
		}
	}len = arr.length
	return len%2 == 0? 'even':'odd'
}console.log(factorGroup(36))

// calculate number of days between dates
function numOfDays(date1,date2){
	let d1 = date1.getTime()
	let d2 = date2.getTime()
	const oneDay = 24*3600*1000 
	let diff = (d2-d1)/oneDay
	return diff
}console.log(numOfDays(new Date("June 20, 2019"),new Date("June 30, 2019")))

// length of array and nested array 
function len(arr) {
	let flat = arr.flat(3)
	const len = flat.length
	return len
}console.log(len([6,2,3,[0,5],[8]]))

// 	Lcm of two positive numbers
function lcm(n1,n2){
	var min = (n1>n2)? n1:n2
	while(true){
		if (min % n1 == 0 && min % n2 == 0){
			return min
		}
		min++
	}
}console.log(lcm(6,8))

// // RegExp: Validate Pin
// function validatePin(pin){
// 	const regex = /[0-9]/g
// 	var res = pin.match(regex)
// 	var len = res.length
// 	var output = (len<6 &&)? true:false
// 	return output
// }console.log(validatePin("425"))

