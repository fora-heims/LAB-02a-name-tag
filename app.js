const inputTextBox = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');
const nameTagName = document.getElementById('name-goes-here');

updateButton.addEventListener('click', () => {
    nameTagName.textContent = inputTextBox.value;
});

const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener('click', () => {
    nameTagName.style.backgroundColor = 'pink';
});

const greenButton = document.getElementById('green-button');
greenButton.addEventListener('click', () => {
    nameTagName.style.backgroundColor = 'lightgreen';
});

const blueButton = document.getElementById('blue-button');
blueButton.addEventListener('click', () => {
    nameTagName.style.backgroundColor = 'lightblue';
});

const fontButton = document.getElementById('update-font-button');
const fontDropdown = document.getElementById('font-dropdown');
fontButton.addEventListener('click', () => {
    nameTagName.style.fontFamily = fontDropdown.value;
});

const pronounButton = document.getElementById('pronoun-button');
const printedPronouns = document.getElementById('pronouns-go-here')
const otherPronounText = document.getElementById('other-pronoun-input');
pronounButton.addEventListener('click', () => {
       printedPronouns.textContent = otherPronounText.value;
});

let numberOfNameChanges = x;
