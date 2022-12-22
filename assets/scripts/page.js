const sendIt = () => {
    const imageSending = document.getElementById('img-send');
    const button = document.getElementById('btn');

    button.replaceWith(imageSending);
    imageSending.classList.add('active');

}
