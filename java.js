let now = new Date();

let h5 = document.querySelector("h5");
let h2 = document.querySelector("h2");

let year = now.getFullYear();
let date = now.getDate();
let minutes = now.getMinutes();
let hours = now.getHours();

let months = [
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
let month = months[now.getMonth()];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h5.innerHTML = `Today is ${day}, ${month} ${date}, ${hours}: ${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

function convertTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innherHTML;
  temperatureElement.innerHTML = (8 * 9) / 5 + 32;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let convert = document.querySelector("#convert-temp");
convert.addEventListener("click", convertTemp);
