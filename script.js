const obj = {
    close: document.querySelector('.close'),
    feedback: document.querySelector('.feedback'),
    regulations: document.querySelector('.regulations'),
    sentenceLink: document.querySelector('.sentence__link-item')
};

obj.close.addEventListener('click', function () {
    obj.feedback.style.display = 'none';
});
obj.regulations.addEventListener('click', function () {
    obj.feedback.style.display = 'block';
});
obj.sentenceLink.addEventListener('click', function () {
    console.log('Button clicked');
});