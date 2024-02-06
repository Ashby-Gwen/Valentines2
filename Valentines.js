document.getElementById('No').addEventListener('click', function () {
   var yesDiv = document.getElementById('Yes');
   var currentSize = window.getComputedStyle(yesDiv).getPropertyValue('font-size');
   var newSize = parseInt(currentSize) + 20 + 'px';
   yesDiv.style.fontSize = newSize;
});

document.getElementById('Yes').addEventListener('click', function () {
// Display the "SheSaidYes!!" div
   document.getElementById('SheSaidYes').style.display = 'flex';

   // Hide the "our-space" div
   document.getElementById('our-space').style.display = 'none';
});
