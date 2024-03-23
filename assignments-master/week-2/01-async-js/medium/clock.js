let hours = 0;
let minutes = 0;
let seconds = 0;

// async function updateSeconds(){
//     seconds++;
//     console.log("Seconds:",seconds);
//     setTimeout(updateSeconds,1000);
// }
// async function updateMinutes(){

//     console.log("Minutes:",minutes);
//     minutes++;
//     setTimeout(updateMinutes,60000);
// }
// async function updateHours(){

//     console.log("Hours:",hours)
//     hours++;
//     setTimeout(updateHours,3600000)
// }

// updateHours()
// updateMinutes()
// updateSeconds()

async function updateClock() {
  console.log(
    "Time:",
    hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
  );
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
      if (hours == 24) {
        hours = 0;
      }
    }
  }
  setTimeout(updateClock, 1000);
}
updateClock();