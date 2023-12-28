document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('file-upload').addEventListener('change', function(e) {
        var fileList = e.target.files; // Get the list of files
        if (fileList.length > 0) {
            var file = fileList[0]; // Get the first file, which should be the image
            var reader = new FileReader();

            reader.onload = function(e) {
                var img = document.createElement('img'); // Create an img element
                img.src = e.target.result; // Set the src of img to the file content
                img.alt = 'Uploaded Image'; // Set an alt attribute for accessibility

                var displayArea = document.getElementById('image-display-area');
                displayArea.innerHTML = ''; // Clear any previous content
                displayArea.appendChild(img); // Add the img element to the display area
            };

            reader.readAsDataURL(file); // Read the file as a Data URL
        }
    });
});
