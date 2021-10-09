const { func } = require('prop-types')

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getDetaisl() {
    return this.name + '===' + this.age
  }
}
let employee = new Person('sayeed', 30)

class Child extends Person {
  constructor(name, age, company) {
    super(name, age)
    this.company = company
  }
  getPersonal() {
    return this.getDetaisl() + '===' + this.company
  }
}

let personal = new Child('sayeed', 30, 'Cisco')
console.log(employee.getDetaisl())
console.log(personal.getPersonal())
let sum = 0
function User(a) {
  var displayName = function (b) {
    return (sum += a + b)
  }
  return displayName
}
var myFunc = User(5)
myFunc(2) //Output: Welcome Raj
myFunc(3)
console.log(sum)

function a(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c
    }
  }
}
console.log(a(1)(2)(3))

//call
let obj = {
  num: 2,
}
let arr = [1, 3]
let add = function (num, num2) {
  return this.num + num + num2
}
console.log(add.call(obj, 2, 3))
console.log(add.apply(obj, arr))
let bound = add.bind(obj)
console.log(bound(2, 4))

//callback
function foo(num) {
  console.log(num)
}
function todo(callback) {
  let num = 3
  callback(num)
}
todo(foo)
