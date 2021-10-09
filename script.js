//const fetch = require('node-fetch')

let urls = [
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/albums',
]
//Promise All
async function All() {
  debugger
  try {
    let resps = await Promise.all(
      urls.map((url) => fetch(url).then((resps) => resps.json()))
    )
    console.log(resps)
  } catch (error) {
    console.log(error)
  }
}
//Promise.allSettled
async function allSettled() {
  debugger
  try {
    const resps = await Promise.allSettled(
      urls.map((url) => fetch(url).then((resps) => resps.json()))
    )
    console.log(resps)
  } catch (error) {
    console.log(error)
  }
}
//Promise.any
async function any() {
  debugger
  try {
    const resps = await Promise.any(
      urls.map((url) => fetch(url).then((resps) => resps.json()))
    )
    console.log(resps)
  } catch (error) {
    console.log(error)
  }
}
let btn = document.querySelector('.btn')
btn.addEventListener('click', All)

var result = []
var arr = [1, 2, [3, [4, 5, [6, 7, [8]]]]]
function foo(arr) {
  debugger
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      foo(arr[i])
    } else {
      result = [...result, arr[i]]
    }
  }
  return result
}
console.log(foo(arr))

//let n = 9;
function fin(n) {
  if (n <= 1) {
    return n
  }
  let sum = fin(n - 1) + fin(n - 2)
  return sum
}
console.log(fin(9))
//find if sunset of set is equal to 9 then return true, or false
let set = [3, 34, 4, 12, 5, 2]
let sum = 9
function foo(arr, sum) {
  for (var i = 0; i < arr.length; i++) {
    let temArr = arr.slice(i)
    for (var j = 0; j < temArr.length; j++) {
      if (arr[i] + temArr[j] === sum) {
        return true
      }
    }
  }
  return false
}
console.log(foo(set, sum))

//[1,2,3,4,5],if n=1 output [5,2,3,4,1], if n=2 out [4,5,1,2,3] if n=k what will be out ..?
var arr = [1, 2, 3, 4, 5]
var result = []
function foo(arr, n) {
  if (arr.length < n) {
    n = n % arr.length
  }
  console.log(n)
  const temArr = arr.filter((item) => item > n)
  console.log(temArr)
  const slice = arr.slice(0, n)
  console.log(slice)
  return (result = [...temArr, ...slice])
}
console.log(foo(arr, 17))
//parenthis which are valid one
var longestValidParentheses = function (S) {
  let stack = [-1],
    ans = 0
  for (let i = 0; i < S.length; i++)
    if (S[i] === '(') stack.push(i)
    else if (stack.length === 1) stack[0] = i
    else stack.pop(), (ans = Math.max(ans, i - stack[stack.length - 1]))
  return ans
}
console.log(longestValidParentheses(')(()(()))'))
//Prototype inheritance
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.display = function () {
  console.log(this.name, this.age)
}

function Employee(name, age, salary) {
  Person.call(this, name, age)
  this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

const emp = new Employee('Mike', 20, 4000)
console.log(emp) // { name: 'Mike', age: 20, salary: 4000 }
emp.display() // Mike 20
console.log(emp.constructor) // Employee
//ES6 prototype inheritance
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  display() {
    console.log(this.name, this.age)
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age) // call super class constructor
    this.salary = salary
  }
}

const emp = new Employee('Mike', 20, 4000)
console.log(emp) // { name: 'Mike', age: 20, salary: 4000 }
emp.display() // Mike 20
console.log(emp.constructor) // Employee

// count number of repeated word
let str = 'I am Gouse I work in JS I like JS'
let temArr = str.split(' ').sort((a, b) => a.localeCompare(b))
let result = []
let count = 1
for (var i = 0; i < temArr.length; i++) {
  if (temArr[i] === temArr[i + 1]) {
    count++
  } else {
    let temItem = {}
    temItem['num'] = count
    temItem['word'] = temArr[i]
    result.push(temItem)
    count = 1
  }
}
console.log(result)

for (var i = 0; i < result.length; i++) {
  console.log(result[i].num + '==' + result[i].word)
}
//find largest number in array
function largerstNum(arr) {
  let largeNumber = []
  for (var i = 0; i < arr.length; i++) {
    let temArr = arr[i]
    let temNum = 0
    for (var j = 0; j < temArr.length; j++) {
      if (temNum < temArr[j]) {
        temNum = temArr[j]
      }
    }
    largeNumber.push(temNum)
  }
  return largeNumber
}
console.log(
  largerstNum([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
)
//currying dynamic
function add(a) {
  return function (b) {
    return b ? add(a + b) : a
  }
}
//const add = a=>b=>b?add(a+b):a
console.log(add(2)(1)(3)(4)(5)())

//
let word = ''
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  debugger
  let res = 0

  for (var i = 0; i < A.length; i++) {
    let temArr = [...A[i]]
    if (!removeDuplicate(temArr)) {
      word += A[i]
    }
  }
  return word.length
}

console.log(solution(['co', 'dil', 'ty'])) // output can be codil, coty so codel length is 5

function removeDuplicate(arr) {
  var isUnique = []
  for (var k = 0; k < arr.length; k++) {
    if (!isUnique.includes(arr[k]) && !word.includes(arr[k])) {
      isUnique.push(arr[k])
    } else {
      return true
    }
  }
}
