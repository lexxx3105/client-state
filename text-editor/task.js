const textEditor = document.getElementById('editor');

textEditor.addEventListener('input', function() {
  const editorValue = textEditor.value;
  localStorage.setItem('editorValue', editorValue);
});

window.addEventListener('load', function() {
  const storedValue = localStorage.getItem('editorValue');
  if (storedValue) {
    textEditor.value = storedValue;
  }
});