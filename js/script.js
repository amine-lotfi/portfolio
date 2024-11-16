var i = 0;
var images = [];
var time = 3000;	// switch delay

// images array
images[0] = "res/reviews/r-1.png";
images[1] = "res/reviews/r-2.png";
images[2] = "res/reviews/r-3.png";
images[3] = "res/reviews/r-4.png";
images[4] = "res/reviews/r-5.png";

// change img function
function changeImg() {
    document.slide.src = images[i];

    // check if index is under the max
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    // run the function every (x) seconds
    setTimeout("changeImg()", time);
}

// run the function when page loads
window.onload = changeImg;