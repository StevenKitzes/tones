console.log('Hello, there!');

const details = {
  punkSquier: {
    name: 'Fender Squier Strat',
    details: 'This was my first guitar, and you can see how much I loved it (and still do).  Of note here is the Seymour Duncan dual coil humbucker pickup in the bridge position, giving the guitar a much sharper sound than the standard Squier single coil would provide.',
  },
  ibanez: {
    name: 'Ibanez RG450',
    details: 'At the time of recording, this guitar has very heavy strings installed, and the string locking hardware at the nut is not installed.',
  },
  durazo: {
    name: 'Durazo Handmade Custom',
    details: 'This guitar was completely handmade by a friend from raw wood (except for the fretboard).  It features Wilkinson m-Series pickups, a very heavy mahogany body with maple top, and strings on the lighter side.',
  },
  hamer: {
    name: 'Hamer Slammer',
    details: 'Bone stock, this guitar has minor body damage and worryingly stiff tuners, but it plays unreasonably nicely for a $100 antique store find.',
  },
  squier: {
    name: 'Fender Squier Strat',
    details: 'Bone stock hand-me-down Squier Strat with the threaded part of a whammy bar broken off inside the bridge.',
  },
  stewmac: {
    name: 'StewMac LP Clone',
    details: 'This Gibson Les Paul replica kit from StewMac was assembled amateurishly and painted/finished painstakingly by Yours Truly.  The action could use a little attention.',
  },
  gf: {
    name: 'Guitar Fetish 335 Clone',
    details: 'This Gibson 335 replica kit from Guitar Fetish was assembled with assistance from the same luthier who built my Durazo Custom.  This 335 clone was painted/finished painstakingly by Yours Truly.  It has a replacement neck volume pot because the original GF sent was DOA.  The strings buzz on the frets nearest the body, making me think there is a combination of action and truss adjustment needed, but the truss nut was stripped out of the box.  This kit was kind of a mess, but I got it for ~60% off so no complaints.  It plays super smooth and easy despite its problems, if not for the fret buzz it would be a really nice kit, especially at the price.',
  },
};

const guitar = document.getElementById('guitar');

const bridge = document.getElementById('bridge');
const neck = document.getElementById('neck');

const clean = document.getElementById('clean');
const distorted = document.getElementById('distorted');

const guitarName = document.getElementById('name');
const guitarDetails = document.getElementById('details');

const imageContainer = document.getElementById('image-container');

const audio = document.getElementById('audio');

bridge.checked = true;
clean.checked = true;

guitar.addEventListener('change', update);
bridge.addEventListener('change', update);
neck.addEventListener('change', update);
clean.addEventListener('change', update);
distorted.addEventListener('change', update);

function update() {
  if (guitar.value === 'placeholder') {
    guitarName.style.backgroundColor = '#FFAAAA';
    setTimeout(() => {
      guitarName.style.backgroundColor = 'unset';
    }, 1000)
    return;
  }

  const audioFileParts = ['audio/'];
  const imageFileParts = ['images/'];

  switch (guitar.value) {
    case 'punkSquier':
      audioFileParts.push('01-punk-squier-');
      imageFileParts.push('punk-squier-crop.jpg');
      break;
    case 'ibanez':
      audioFileParts.push('02-ibanez-');
      imageFileParts.push('ibanez-crop.jpg');
      break;
    case 'durazo':
      audioFileParts.push('03-durazo-');
      imageFileParts.push('durazo-crop.jpg');
      break;
    case 'hamer':
      audioFileParts.push('04-hamer-');
      imageFileParts.push('hamer-crop.jpg');
      break;
    case 'squier':
      audioFileParts.push('05-squier-');
      imageFileParts.push('squier-crop.jpg');
      break;
    case 'stewmac':
      audioFileParts.push('06-stewmac-');
      imageFileParts.push('stewmac-crop.jpg');
      break;
    case 'gf':
      audioFileParts.push('07-gf-');
      imageFileParts.push('gf-crop.jpg');
      break;
    default:
      console.log('Error: unknown guitar');
      return;
  }

  audioFileParts.push(clean.checked ? 'clean-' : 'distorted-');
  audioFileParts.push(bridge.checked ? 'bridge.mp3' : 'neck.mp3');

  const audioFile = audioFileParts.join('');
  const imageFile = imageFileParts.join('');

  audio.setAttribute('src', audioFile);
  audio.play();
  imageContainer.innerHTML = `<img id='guitar-image' src='${imageFile}' />`

  updateText(guitar.value);
}

function updateText(which) {
  guitarName.innerHTML = details[which].name;
  guitarDetails.innerHTML = details[which].details;
}
