const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();

// const whateverDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

let futureDate = new Date(2022, 7, 15, 23, 59, 0);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month]
const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// giveaway.innerText = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`

/*----------*/
const futureMilliSeconds = futureDate.getTime();


function getRemainingTime() {
  const todayMilliSeconds = new Date().getTime();
  t = futureMilliSeconds - todayMilliSeconds

  const milSecsInOneDay = 24 * 60 * 60 * 1000;
  const milSecsInOneHour = 60 * 60 * 1000;
  const milSecsInOneMin = 60 * 1000;

  let days = Math.floor(t / milSecsInOneDay);
  let hours = Math.floor((t % milSecsInOneDay) / milSecsInOneHour)
  let minutes = Math.floor((t % milSecsInOneHour) / milSecsInOneMin)
  let seconds = Math.floor((t % milSecsInOneMin) / 1000)

  const values = [days, hours, minutes, seconds]

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    } 
    return item
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  });
  if(t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">It's Ikwe's Birthday Alreadyyy</h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();