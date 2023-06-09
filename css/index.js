function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElemnent = losAngelesElement.querySelector(".date");
    let losAngelesTimeElemnent = losAngelesElement.querySelector(".time");
    losAngelesDateElemnent.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("dddd Do MMMM, YYYY");
    losAngelesTimeElemnent.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElemnent = sydneyElement.querySelector(".date");
    let sydneyTimeElemnent = sydneyElement.querySelector(".time");
    sydneyDateElemnent.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("dddd Do MMMM, YYYY");
    sydneyTimeElemnent.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  //console.log(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  //console.log(cityName);
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("dddd Do MMMM, YYYY"));
  let changeCity = document.querySelector("#place");
  changeCity.innerHTML += `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
          </div>
        </div>
       
        <a href ="/">Back to Home Page</a>
        `;
}
// <a href ="index.html">Back to Home Page</a> will make it work on computer above works on platform.
let citiesSelectedElement = document.querySelector("#chosen-city");
citiesSelectedElement.addEventListener("change", updateCity);
