const body = document.querySelector('body');
const timerPrompt = document.querySelector('.app__heading-phrase');
const timerCounter = document.querySelector('.timer__counter');
const timerStartButton = document.querySelector('.btn--timer');

const timer = new Timer(timerCounter, timerStartButton);
const background = new Background(body, timerPrompt, timerCounter, timerStartButton);
