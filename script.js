setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const setClock = () =>{
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds()/60;
  const minutesRatio = (secondsRatios + currentDate.getMinutes())/60;
  const hoursRatio = (minutesRatios + currentDate.getHours())/12;
  setRatation(secondHand, secondsRatio);
  setRatation(minuteHand, minutesRatio);
  setRatation(hourHand, hoursRatio);
};

function setRatation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio*360);
}

