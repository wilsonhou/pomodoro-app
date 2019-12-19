class Timer {
    constructor (timerCounter, timerStartButton) {
        // from DOM accepts the Counter <h1> and the start button <button>
        this.timerCounter = timerCounter;
        this.timerStartButton = timerStartButton;
        this.started = false;

        // initialise event objects to fire
        this.startEvent = new Event('timerStart');
        this.finishEvent = new Event('timerFinish');

        // store time left in seconds to this.timeLeft
        this.timeLeft = this.toSeconds(this.timerCounter.innerText);
        this.initialTime = this.timeLeft;

        // TODO: Make timer reuseable
        this.timerStartButton.addEventListener('click', this.start);
    }
    start = () => {
        if (this.started) return;
        this.started = true;
        console.log('CALLED START');

        // dispatch start event on button
        this.timerStartButton.dispatchEvent(this.startEvent);

        // calls tick until value of timeLeft is 0
        this.tick();
        this.intervalID = setInterval(this.tick, 1000);
    };
    tick = () => {
        // counts down timer by one tick
        this.timeLeft--;
        this.timerCounter.innerText = this.toDisplay(this.timeLeft);
        if (this.timeLeft <= 0) {
            clearInterval(this.intervalID);
            this.finish();
        }
    };
    finish = () => {
        // TODO: refactor into promise format??? Used when finished
        console.log('FINISHED!!!');
        this.started = false;
        this.timerCounter.innerText = this.toDisplay(this.initialTime);
        this.timeLeft = this.initialTime;
        // dispatch start event on button
        this.timerStartButton.dispatchEvent(this.finishEvent);
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
        displayMinutes = displayMinutes < 10 ? `0${displayMinutes}` : `${displayMinutes}`;
        let displaySeconds = seconds % 60;
        displaySeconds = displaySeconds < 10 ? `0${displaySeconds}` : `${displaySeconds}`;

        return `${displayMinutes}:${displaySeconds}`;
    };
}
