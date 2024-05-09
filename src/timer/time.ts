class Timer extends HTMLElement {
  hours = 0;
  minutes = 0;
  seconds = 0;
  deciseconds = 0;
}
window.customElements.define('my-timer', Timer);

export default Timer;