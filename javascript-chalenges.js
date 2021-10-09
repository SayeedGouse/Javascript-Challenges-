var unsortedArray = [-10, 7, 29, 30, 5, -10, -70]

function computeProduct(arr) {
  arr.sort((a, b) => {
    return a - b
  })
  //console.log(arr)
  let product1 = 1
  let product2 = 1
  for (var i = arr.length - 1; i > 3; i--) {
    product1 *= arr[i]
  }
  product2 = arr[0] * arr[1] * arr[arr.length - 1]
  if (product1 > product2) return product1
  return product2
}
console.log(computeProduct(unsortedArray))

/* ----- Finding Missing Array item----- */
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 8, 7, 11]
var upperBound = 11
var lowerBound = 1

const findMissingItem = (arrayOfIntegers, upperBound, lowerBound) => {
  let sumOfArry = 0
  arrayOfIntegers.forEach((item) => {
    sumOfArry += item
  })
  totalupperLower =
    (upperBound * (upperBound + 1)) / 2 - (lowerBound * (lowerBound - 1)) / 2

  return totalupperLower - sumOfArry
}
console.log(findMissingItem(arrayOfIntegers, upperBound, lowerBound))

/* ----- Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element----- */

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10]
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

function findLargestDifference(array) {
  currMin = array[0]
  currMaxDifference = 0
  for (var i = 1; i < array.length; i++) {
    if (array[i] > currMin && array[i] - currMin > currMaxDifference) {
      currMaxDifference = array[i] - currMin
    }
    if (array[i] < currMin) {
      currMin = array[i]
    }
  }
  return currMaxDifference
}
console.log(findLargestDifference(array))

/* ----- Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique! ----- */
var firstArray = [2, 2, 4, 1]
var secondArray = [1, 2, 0, 2]

function intersection(firstArray, secondArray) {
  let result = new Set()
  firstArray.map((item) => {
    secondArray.find((arrItem) => {
      if (item === arrItem) {
        if (!result.has(item)) result.add(item)
      }
    })
  })

  return [...result]
}
console.log(intersection(firstArray, secondArray))

/* Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG" */
var string = 'Welcome to this Javascript Guide!'

let arr = string.split(' ')
let output = []
arr = arr.map((word) => {
  return word.split('').reverse().join('')
})
console.log(arr.join(' '))

/*Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army" */

var firstWord = 'Mary'
var secondWord = 'Army'
function isAnagram(firstWord, secondWord) {
  let arr = firstWord
    .toLowerCase()
    .split('')
    .sort((a, b) => {
      return a.localeCompare(b)
    })
  let arr2 = secondWord
    .toLowerCase()
    .split('')
    .sort((a, b) => {
      return a.localeCompare(b)
    })
  return arr.join('') === arr2.join('')
}
console.log(isAnagram(firstWord, secondWord))

/** Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account */

function isPalindrome(word) {
  return (
    word.replace(/\s/g, '').toLowerCase().split('').reverse().join('') ===
    word.replace(/\s/g, '').toLowerCase()
  )
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('race Car'))

/**Check if a given string is a isomorphic */

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('paper', 'title')) // true
console.log(isIsomorphic('kick', 'side')) // false

function isIsomorphic(firstString, secondString) {
  // Check if the same lenght. If not, they cannot be isomorphic
  if (firstString.length !== secondString.length) return false

  var letterMap = {}

  for (var i = 0; i < firstString.length; i++) {
    var letterA = firstString[i],
      letterB = secondString[i]

    // If the letter does not exist, create a map and map it to the value
    // of the second letter
    if (letterMap[letterA] === undefined) {
      // If letterB has already been added to letterMap, then we can say: they are not isomorphic.
      if (secondString.indexOf(letterB) < i) {
        return false
      } else {
        letterMap[letterA] = letterB
      }
    } else if (letterMap[letterA] !== letterB) {
      // Eles if letterA already exists in the map, but it does not map to
      // letterB, that means that A is mapping to more than one letter.
      return false
    }
  }
  // If after iterating through and conditions are satisfied, return true.
  // They are isomorphic
  return true
} // true // true // true // false // false

/**Given an integer, determine if it is a power of 2. If so, return that number, else return -1. (0 is not a power of two) */

function isPowerOfTwo(num) {
  return num !== 0 && (num & (num - 1)) === 0
}
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(64))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(0))
console.log(isPowerOfTwo(-1))

/** Write a mul function which will work properly when invoked with following syntax. */
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c
    }
  }
}

console.log(mul(2)(3)(4)) // output : 24
console.log(mul(4)(3)(4)) // output : 48

/** What will be the output of the following code? */
var Employee = {
  company: 'xyz',
}
var emp1 = Object.create(Employee)
delete emp1.company
console.log(emp1.company)

/** Promise.All */
function fetchData() {
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
  ]

  // map every url to the promise of the fetch
  let requests = urls.map((url) =>
    fetch(url).then((response) => response.json())
  )

  // Promise.all waits until all jobs are resolved
  Promise.all(requests).then((responses) =>
    responses.forEach((response) =>
      // alert(`${response.url}: ${response.status}`)
      console.log(response)
    )
  )
}
console.log(fetchData())

/*** Find the Alphabet number using string */
function letterValue(str) {
  var anum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  if (str.length == 1) return anum[str] || ' '
  var letters = /^[A-Za-z]+$/
  return str.split('').map((letterValue) => {
    if (letterValue.match(letters)) {
      return anum[letterValue]
    }
    return letterValue
  })
}
console.log(letterValue('zoo a#!').join(''))
/** If string is sayeedGouse convet to sayeed_gouse vice versa */
function foo(str) {
  if (str.indexOf('_') > -1) {
    let arr = str.split('_')
    let firstWord = arr.shift(0)
    arr = arr.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return [firstWord, ...arr].join('')
  } else {
    let arr2 = str.split('')
    arr2 = arr2.map((letter) => {
      if (letter.toUpperCase() === letter) {
        return '_' + letter.toLowerCase()
      }
      return letter
    })
    return arr2.join('')
  }
}
console.log(foo('sayeed_gouse'))

/** Increase a given string with 13 plus count if A is given convert it to N */

function ciper(srt) {
  debugger
  let letter = ''
  for (var i = 0; i < srt.length; i++) {
    //console.log(srt[i])
    if (srt[i].charCodeAt() + 13 > '90')
      letter += String.fromCharCode(srt[i].charCodeAt() + 13 - 26)
    else letter += String.fromCharCode(srt[i].charCodeAt() + 13)
  }
  return letter
}
console.log(ciper('SERR')) // output FREE

//async await using fecth
const fetchData2 = async () => {
  try {
    const response = await fetch('https://course-api.com/react-store-products')
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
console.log(fetchData2())

const fetchDataMultiple = async () => {
  try {
    const responses = await Promise.all([
      fetch('https://course-api.com/react-store-products'),
      fetch(
        'https://course-api.com/react-store-single-product?id=recd1jIVIEChmiwhe'
      ),
    ])
    const response = await Promise.all(
      responses.map((item) => {
        return fetch(item.url).then((res) => res.json())
      })
    )
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
fetchDataMultiple()
// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number
function myFunction(num) {
  debugger
  var isPrime = false
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = true
    }
  }
  if (!isPrime) {
    return num
  } else {
    while (true) {
      ++num
      var isPrimeNum = false
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrimeNum = true
        }
      }
      if (!isPrimeNum) {
        break
      }
    }
    return num
  }
}

console.log(myFunction(115))

//second option for above question
function myFunction(input) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }
  let n = input
  while (!isPrime(n)) {
    n++
  }
  return n
}
console.log(myFunction(115))

// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  let res = []
  let j = 0
  for (let i = min; i <= max; i++) {
    res[j] = i
    j++
  }
  return res
}
console.log(myFunction(2, 10)) //out put [2, 3, 4, 5, 6, 7, 8, 9, 10]
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(date, date1) {
  let res =
    new Date(date).getTime() / (1000 * 60 * 60 * 24) -
    new Date(date1).getTime() / (1000 * 60 * 60 * 24)
  return Math.abs(res)
}
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')))
// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

function myFunction(a, b) {
  let h = Math.abs(
    (new Date(a).getTime() - new Date(b).getTime()) / (1000 * 60 * 60)
  )
  return h <= 1
}
console.log(
  myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
)
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: obj.size + 'cm' }),
    ...(obj.weight && { weight: obj.weight + 'kg' }),
  }
}

console.log(
  myFunction({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 })
  //myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
)
console.log(
  myFunction({
    fn: 'Martin',
    ln: 'Harper',
    age: 26,
    email: 'martin.harper@test.de',
    weight: 102,
  })
)
console.log(
  myFunction({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 })
)
console.log(
  myFunction({
    fn: 'Matthew',
    ln: 'Müller',
    age: 19,
    email: 'matthew@mueller.de',
  })
)
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
  return {
    ...((obj.a === '' && { a: null }) ||
      (obj.a === ' ' && { a: null }) ||
      (obj.a && { a: obj.a })),
    ...((obj.b === '' && { b: null }) ||
      (obj.b === ' ' && { b: null }) ||
      (obj.b && { b: obj.b })),
    ...((obj.c === '' && { c: null }) ||
      (obj.c === ' ' && { c: null }) ||
      (obj.c && { c: obj.c })),
    ...((obj.d === '' && { d: null }) ||
      (obj.d === ' ' && { d: null }) ||
      (obj.d && { d: obj.d })),
  }
}
console.log(myFunction({ a: '', b: 'b', c: '' }))
console.log(myFunction({ a: 'a', b: 'b', c: '', d: ' ' }))
console.log(myFunction({ a: '', b: ' ', c: ' ', d: '' }))
//second option
function myFunction(obj) {
  let temObj = { ...obj }
  for (var key in temObj) {
    if (temObj[key].trim() === '') temObj[key] = null
  }
  return temObj
}
console.log(myFunction({ a: '', b: 'b', c: '' }))
console.log(myFunction({ a: 'a', b: 'b', c: '', d: ' ' }))
console.log(myFunction({ a: '', b: ' ', c: ' ', d: '' }))

//multiple urls

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
