document.addEventListener('DOMContentLoaded', function() {
    const imageList = JSON.parse(localStorage.getItem('imageList')) || [];

    const imageContainer = document.getElementById('image-container');
    const addButton = document.getElementById('add-button');
    const removeButton = document.getElementById('remove-button');

    function displayImages() {
        imageContainer.innerHTML = '';
        imageList.forEach((imageUrl, index) => {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = `Image ${index + 1}`;
            imageContainer.appendChild(imageElement);
        });
        localStorage.setItem('imageList', JSON.stringify(imageList));
    }

    addButton.addEventListener('click', function() {
        const imageUrl = prompt('Введите URL изображения:');
        if (imageUrl) {
            imageList.push(imageUrl);
            displayImages();
        }
    });

    removeButton.addEventListener('click', function() {
        if (imageList.length > 0) {
            imageList.pop();
            displayImages();
        }
    });

    displayImages();
});
