function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElemnent = losAngelesElement.querySelector(".date");
  let losAngelesTimeElemnent = losAngelesElement.querySelector(".time");
  losAngelesDateElemnent.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd Do MMMM, YYYY");
  losAngelesTimeElemnent.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss:SSS [<small>]A[</small>]");

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElemnent = sydneyElement.querySelector(".date");
  let sydneyTimeElemnent = sydneyElement.querySelector(".time");
  sydneyDateElemnent.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd Do MMMM, YYYY");
  sydneyTimeElemnent.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss:SSS [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  console.log(cityName);
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("dddd Do MMMM, YYYY"));
  let changeCity = document.querySelector("#place");
  changeCity.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
          </div>
        </div>
        `;
}

let citiesSelectedElement = document.querySelector("#chosen-city");
citiesSelectedElement.addEventListener("change", updateCity);
