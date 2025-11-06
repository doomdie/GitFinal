function onBallClick() {
   
var elBall =  document.querySelector(".ball")
var currentWidth = parseInt(elBall.style.width)
var currentHeight = parseInt(elBall.style.height)
var newWidth = currentWidth + 50
var newHeight = currentHeight + 50
if (newWidth >= 400 || newHeight >= 400){
    newWidth = 100
    newHeight = 100
}
elBall.style.height = newHeight + 'px'
elBall.style.width = newWidth + 'px'
}