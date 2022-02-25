console.log('Hello, there!');

const guitar = document.getElementById('guitar');

const bridge = document.getElementById('bridge');
const neck = document.getElementById('neck');

const clean = document.getElementById('clean');
const distorted = document.getElementById('distorted');

const name = document.getElementById('name');
const details = document.getElementById('details');

const imageContainer = document.getElementById('image-container');

bridge.checked = true;
clean.checked = true;

guitar.addEventListener('change', update);
bridge.addEventListener('change', update);
neck.addEventListener('change', update);
clean.addEventListener('change', update);
distorted.addEventListener('change', update);

function update() {
  if (guitar.value === 'placeholder') {
    name.style.backgroundColor = '#FFAAAA';
    setTimeout(() => {
      name.style.backgroundColor = 'unset';
    }, 1000)
    return;
  }
}
