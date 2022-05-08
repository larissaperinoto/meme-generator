function showInput() {
  const containerText = document.getElementById('meme-text');
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', function () {
    containerText.innerText = inputText.value;
  })
}

showInput();
