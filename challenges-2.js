const { func } = require('prop-types')

let row = 3
let col = 2

let colArr = new Array(col)
let colLength = colArr.length
let colData = []
for (var i = 1; i <= colLength; i++) {
  colData.push(i)
}
console.log(colData)
let rowArr = [] // rowArr = [[1,2],[3,4],[5,6]]
let temArr = []
function makeRows(row, col) {
  for (var i = 0; i < row; i++) {
    temArr = []
    for (var j = 0; j < col; j++) {
      temArr[j] = j
      //rowArr.push(temArr)
    }
    console.log(rowArr.push(temArr))
  }
}
makeRows(3, 2)
console.log(rowArr)

rowArr.map((item) => {
  console.log(item)
  item.map((sub) => {
    console.log(sub)
  })
})

function vowelCount(str) {
  let count = 0
  let vowels = 'aeiou'
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      count++
    }
  }
  return count
}
console.log(vowelCount('How many vowels are there in this string?'))

function fact(num) {
  if (num === 1) return num
  const res = num * fact(num - 1)
  return res
}
console.log(fact(5))

function pal(str, str2) {
  let temStr = str2.replace(/\s/, '').toLowerCase()
  //return temStr
  return str.toLowerCase() === temStr
}
console.log(pal('racecar', 'Race CAR'))

function logWord(str) {
  let word = ''
  let temArr = str.split(' ')
  //return temArr
  for (var i = 0; i < temArr.length; i++) {
    if (word.length < temArr[i].length) {
      word = temArr[i]
    }
  }
  return word
}

console.log(logWord('javascript is a funerwerwerwerwe languageerrer'))

function titleCase(str) {
  let res = []
  let temArr = str.toLowerCase().split(' ')
  for (var i = 0; i < temArr.length; i++) {
    res.push(temArr[i].charAt(0).toUpperCase() + temArr[i].slice(1))
  }
  return res.join(' ')
}
console.log(titleCase("I'm a little tea post"))

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
// check if strings endsWith
function strEndsWith(str, target) {
  if (str.endsWith(target)) {
    return true
  }
  return false
}
console.log(strEndsWith('open sesame', 'same'))

function repetStr(str, n) {
  let temStr = ''
  if (n < 0) {
    return ''
  }
  temStr = str.repeat(n)
  return temStr
}
console.log(repetStr('abc', 3))

function truncateStr(str, n) {
  return str.substring(0, n - 3) + '...'
}
console.log(truncateStr('A-tisket a-tasket', 11))

function makeAarrayInGroup(arr, n) {
  let finalAArr = []
  while (arr.length > 0) {
    finalAArr.push(arr.slice(0, n))
    arr = arr.slice(n)
  }
  return finalAArr
}
console.log(makeAarrayInGroup([0, 1, 2, 3, 4, 5], 3))

//Remove array elements based on target value

function slasher(arr, n) {
  arr.splice(0, n)
  return arr
}

console.log(slasher(['sayeed', 'gouse', 'anil'], 1))

//return true, if second str exist in first str

function mutation(str1, str2) {
  let temArr1 = [...str1]
  let temArr2 = [...str2]
  for (var i = 0; i < temArr2.length; i++) {
    if (temArr1.indexOf(temArr2[i]) === -1) {
      return false
    }
  }
  return true
}
console.log(mutation('hello', 'hell'))

//remove falsy values from array
function falsy(arr) {
  const temArr = arr.filter(Boolean)
  return temArr
}
console.log(falsy([false, null, 0, undefined, 1, 3]))

//remove second parametres values exist in first arr aruguments

function removeItems(arr, ...rest) {
  let temArr = []
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (!rest.includes(arr[i])) {
      temArr = [...temArr, arr[i]]
    }
  }
  return temArr
}
console.log(removeItems([1, 2, 3, 5, 1, 2, 3], 2, 3))

//find index of second argument

function findIndex(arr, n) {
  arr = arr.sort((a, b) => a - b)
  const index = arr.findIndex((item) => item >= n)
  return index
}
console.log(findIndex([5, 3, 20, 3], 5))

//shift the letter if SERR, then output will FREE
function rot13(str) {
  let res = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() + 13 > 90) {
      res += String.fromCharCode(str[i].charCodeAt() + 13 - 26)
    } else {
      res += String.fromCharCode(str[i].charCodeAt() + 13)
    }
  }
  return res
}
console.log(rot13('SERR PBQR ASD'))
//SUM ALL BETWEEN ARRAY GIVEN
function sum(arr) {
  arr = arr.sort((a, b) => b - a)
  let max = arr.shift()
  let min = arr.pop()
  let sum = 0
  for (var i = min; i <= max; i++) {
    sum += i
  }
  return sum
}
console.log(sum([4, 10]))

//return unique for two array

function unique(arr1, arr2) {
  let res = []
  for (let item of arr1) {
    if (arr2.indexOf(item) === -1) {
      res = [...res, item]
    }
  }
  return res
}
console.log(unique([1, 2, 4, 5, 3], [1, 5]))
