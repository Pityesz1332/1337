function toLeetSpeak(text) {
    const leetMap = {
        'a': '4', 'b': '8', 'e': '3', 'g': '6',
        'i': '1', 'o': '0', 's': '5', 't': '7', 'z': '2'
    };
    return text.toLowerCase().split('').map(char => leetMap[char] || char).join('');
}

document.getElementById('inputText').addEventListener('input', function () {
    document.getElementById('leetOutput').textContent = toLeetSpeak(this.value);
});

document.getElementById('copyButton').addEventListener('click', function () {
    const leetText = document.getElementById('leetOutput').textContent;

    if (leetText) {
        navigator.clipboard.writeText(leetText).then(() => {
            alert('Copied');
        }).catch(err => {
            console.error('Failed to copy', err);
        });
    } else {
        alert('Nothing to copy');
    }
});