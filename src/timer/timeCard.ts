import button from "./startStop";
import Timer from "./time";

const time = new Timer();
let { hours, minutes, seconds, deciseconds } = time;

const timeCard = document.createElement('div');
timeCard.className = 'time-card';
const container = document.createElement('div');
container.className = 'time-container';

timeCard.appendChild(container);
container.appendChild(time);
time.className = 'time';
time.innerText = '0:00:00:0';
timeCard.append(button);

const startTimer = () => setInterval(() => {
  if (deciseconds < 9) {
    deciseconds++;
  } else if (seconds < 59) {
    deciseconds = 0;
    seconds++;
  } else if (minutes < 59) {
    seconds = 0;
    minutes++;
  } else hours++;

  time.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${deciseconds}`;
}, 100);

const stopTimer = (intID: NodeJS.Timeout) => clearInterval(intID); 

let intID: NodeJS.Timeout;

button.addEventListener('click', function () {
  if (this.innerText === 'STOP') {
    intID = startTimer();
    console.log('timer started');
  } else if (this.innerText === 'START') {
    stopTimer(intID);
    console.log('timer stopped');
  }
});

export default timeCard;