import {magicButton, magicParagraph} from './dom-loader';
var showMagic = false;

magicButton.addEventListener('click', toggleMagicState);
updateMagicParagraph();

function toggleMagicState() {
    showMagic = !showMagic;
    updateMagicParagraph();
    updateMagicButton();
}

function updateMagicButton() {
    if (showMagic) {
        magicButton.textContent = 'Hide the Magic';
    } else {
        magicButton.textContent = 'Show the Magic';
    }
}

function updateMagicParagraph() {
    if (showMagic) {
        magicParagraph.style.display = 'block';
    } else {
        magicParagraph.style.display = 'none';
    }
}