class Background {
    constructor (body, timerPrompt, timerCounter, timerStartButton) {
        this.body = body;
        this.timerPrompt = timerPrompt;
        this.timerCounter = timerCounter;
        this.timerStartButton = timerStartButton;

        // backgrounds used
        this.backgroundFocus = 'linear-gradient(to right bottom, rgba(54, 174, 255, 1), rgba(120, 255, 196, 1))';
        this.backgroundPrepare = 'linear-gradient(to right bottom, rgba(255, 110, 25, 1), rgba(245, 255, 112, 1))';

        // change styles when timer starts
        this.timerStartButton.addEventListener('timerStart', this.startTimerAnimation);
        this.timerStartButton.addEventListener('timerStart', this.toFocus);

        // change styles when timer ends
        this.timerStartButton.addEventListener('timerFinish', this.startTimerAnimation);
        this.timerStartButton.addEventListener('timerFinish', this.toPrepare);
    }
    toFocus = () => {
        // changes state to focus mode
        this.changeTimerPrompt('Focus');

        // TODO: GET RID OF TRANSITION!
        this.timerCounter.style.transition = 'all 1.4s';
        this.timerCounter.style.fontSize = '15rem';
        this.timerCounter.style.transform = 'translateY(-2rem)';

        // transition background
        this.body.firstElementChild.style.opacity = 0;
    };
    changeTimerPrompt = (text) => {
        this.timerPrompt.style.opacity = 0;
        setTimeout(() => {
            this.timerPrompt.innerText = text;
            this.timerPrompt.style.opacity = 1;
        }, 700);
    };
    toPrepare = () => {
        this.changeTimerPrompt('Prepare');

        this.timerCounter.style.fontSize = '';
        this.timerCounter.style.transform = '';

        // transition background to prepare
        this.body.firstElementChild.style.opacity = 1;
        this.resetTimerAnimation();
    };
    startTimerAnimation = () => {
        // flips the timer and fade out
        let buttonIcon = this.timerStartButton.firstElementChild;

        buttonIcon.style.transform = `rotate(180deg)`;
        buttonIcon.style.opacity = `0`;
        buttonIcon.style.cursor = 'default';
    };
    resetTimerAnimation = () => {
        // flips the timer and fade out
        let buttonIcon = this.timerStartButton.firstElementChild;
        buttonIcon.style.transform = '';
        buttonIcon.style.opacity = '';
        buttonIcon.style.cursor = '';
    };
}
