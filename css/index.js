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
setInterval(updateTime, 1);
