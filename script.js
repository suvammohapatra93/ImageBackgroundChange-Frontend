let ImgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

// Update image width initially
originalImg.style.width = ImgBox.offsetWidth + "px";

let leftSpace = ImgBox.getBoundingClientRect().left; // Get correct left offset

ImgBox.onmousemove = function (e) {
    let boxWidth = e.pageX - leftSpace;

    // Update img-wrap width
    imgWrap.style.width = boxWidth + "px";

    // Move the line along with the mouse
    line.style.left = boxWidth + "px";
}

// Optionally handle mouse up to ensure the line doesn't move outside the box
ImgBox.onmouseup = function() {
    let maxWidth = ImgBox.offsetWidth;
    let currentWidth = parseFloat(imgWrap.style.width);
    if (currentWidth > maxWidth) {
        imgWrap.style.width = maxWidth + "px";
        line.style.left = maxWidth + "px";
    }
}
