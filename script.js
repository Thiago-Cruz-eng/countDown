
const newYears = "19 jun 2022 21:00:00"

const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minsEL = document.getElementById('mins')
const secondsEL = document.getElementById('seconds')

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date()


  const totalSeconds = ((newYearsDate - currentDate) / 1000)

  const days = Math.floor(totalSeconds/3600/24)
  const hours = Math.floor(totalSeconds/3600) % 24
  const minutes = Math.floor(totalSeconds/60) % 60 
  const seconds = Math.floor(totalSeconds) % 60



  daysEL.innerHTML = days
  hoursEL.innerHTML = hours
  minsEL.innerHTML = minutes
  secondsEL.innerHTML = seconds

}

countDown()

setInterval(countDown, 1000)