class Timer {
    constructor (timerCounter, timerStartButton) {
        // from DOM accepts the Counter <h1> and the start button <button>
        this.timerCounter = timerCounter;
        this.timerStartButton = timerStartButton;
        this.started = false;

        // store time left in seconds to this.timeLeft
        this.timeLeft = this.toSeconds(this.timerCounter.innerText);

        this.timerStartButton.addEventListener('click', this.start);
    }
    start = () => {
        if (this.started) return;
        this.started = true;
        // calls tick until value of timeLeft is 0
        this.tick();
        this.intervalID = setInterval(this.tick, 1000);

        this.finish();
    };
    tick = () => {
        // counts down timer by one tick
        this.timeLeft--;
        console.log(this.timeLeft);
        this.timerCounter.innerText = this.toDisplay(this.timeLeft);
        if (this.timeLeft <= 0) clearInterval(this.intervalID);
    };
    finish = () => {
        // TODO: refactor into promise format??? Used when finished
        console.log('FINISHED!!!');
        started = false;
    };
    toSeconds = (text) => {
        // toSeconds will translate display text to seconds
        return text.split(':').map((x) => parseInt(x)).reduce((seconds, curNum, idx) => {
            seconds += idx === 0 ? 60 * curNum : curNum;
            return seconds;
        }, 0);
    };
    toDisplay = (seconds) => {
        // toDisplay will translate seconds to display text
        let displayMinutes = Math.floor(seconds / 60);
        let displaySeconds = seconds % 60;
        // TODO: pad both sides with 0s
        return `${displayMinutes}:${displaySeconds}`;
    };
}

const timerCounter = document.querySelector('.timer__counter');
const timerStartButton = document.querySelector('.btn--timer');

const timer = new Timer(timerCounter, timerStartButton);

console.log(timer.toSeconds('4:29'));
console.log(timer.toDisplay(2));
