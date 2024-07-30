let startTime, endTime;
let isTestRunning = false;

document.getElementById('start-test').addEventListener('click', startTest);
document.getElementById('typed-text').addEventListener('input', checkTyping);

function startTest() {
    const textArea = document.getElementById('typed-text');
    textArea.value = '';
    textArea.focus();
    startTime = new Date().getTime();
    isTestRunning = true;
    document.getElementById('time').textContent = '0';
    document.getElementById('wpm').textContent = '0';
}

function checkTyping() {
    const textToType = document.getElementById('text-to-type').textContent;
    const typedText = document.getElementById('typed-text').value;

    if (typedText === textToType) {
        endTime = new Date().getTime();
        calculateResults();
        isTestRunning = false;
    }

    if (isTestRunning) {
        const currentTime = new Date().getTime();
        const timeElapsed = ((currentTime - startTime) / 1000).toFixed(1);
        document.getElementById('time').textContent = timeElapsed;
    }
}

function calculateResults() {
    const timeTaken = (endTime - startTime) / 1000;
    const wordsTyped = document.getElementById('text-to-type').textContent.split(' ').length;
    const wpm = ((wordsTyped / timeTaken) * 60).toFixed(2);

    document.getElementById('time').textContent = timeTaken.toFixed(1);
    document.getElementById('wpm').textContent = wpm;
}
