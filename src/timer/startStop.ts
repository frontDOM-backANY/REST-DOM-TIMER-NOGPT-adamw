const button = document.createElement('button');
button.className = 'toggle';

let running = false;
button.innerText = `START`;

const toggle = () => {
  running = !running;
  
  if (running) {
    button.innerText = `STOP`;
  } else {
    button.innerText = `START`
  }
}

button.addEventListener('click', () => toggle());

export default button;