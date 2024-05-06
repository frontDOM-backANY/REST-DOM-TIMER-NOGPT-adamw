const button = document.querySelector<HTMLButtonElement>('#counter')!;

let running = false;
button.innerHTML = `START`;

const toggle = () => {
  running = !running;
  
  if (running) {
    button.innerHTML = `STOP`;
  } else {
    button.innerHTML = `START`
  }
}

button.addEventListener('click', () => toggle());

export default button;