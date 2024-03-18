document.getElementById('check-btn').addEventListener('click', function() {
    let textInput = document.getElementById('text-input').value;
    let newText = textInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    if (newText === '') {
          alert('Please input a value');
          return;
    }
    let reversed = [...newText].reverse().join("");
    if (newText === reversed) {
          document.getElementById('result').textContent = textInput + ' is a palindrome';
    } else {
          document.getElementById('result').textContent = textInput + ' is not a palindrome';
    }
});