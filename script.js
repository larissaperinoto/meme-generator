function showInputText() {
  const containerText = document.getElementById('meme-text');
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', () => {
    containerText.innerText = inputText.value;
  });
}

showInputText();

const file = document.getElementById('meme-insert');
const photo = document.getElementById('meme-image');

file.addEventListener('change', () => {
  const reader = new FileReader();
  reader.onload = () => {
    photo.src = reader.result;
  };

  reader.readAsDataURL(file.files[0]);
});

const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

buttonEarth.addEventListener('click', () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
});

buttonFire.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

buttonWater.addEventListener('click', () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});
