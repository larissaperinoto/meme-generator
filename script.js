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
