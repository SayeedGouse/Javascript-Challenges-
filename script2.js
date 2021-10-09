//city weather
function cityWeather(city) {
  debugger
  city = city.toLowerCase()
  // Implement the function
  // You can use console.log for debugging

  // API url = `https://example.com/data/2.5/weather?...`
  // Use q parameter (city) at the end of the url in order to mock data correctly
  if (
    city === null ||
    city === 'undefined' ||
    typeof city === 'number' ||
    typeof city === 'object'
  ) {
    throw 'not a string'
  }
  if (city === '') {
    throw 'string is empty'
  }
  return new Promise((resolve, reject) => {
    // Implement the function - call http request
    let url = `https://example.com/data/2.5/weather?units=metrics&q=${city}`
    axios
      .get(url)
      .then(function ({ data }) {
        resolve(data)
      })
      .catch(function (error) {
        reject(error)
      })

    // Implement the function
  })
}

console.log(cityWeather('Bogota'))
