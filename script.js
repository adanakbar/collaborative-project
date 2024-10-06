// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var images = document.getElementsByClassName("gallery-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
