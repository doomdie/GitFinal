function onBallClick() {
   
var elBall =  document.querySelector(".ball")
var currentWidth = parseInt(elBall.style.width)
var currentHeight = parseInt(elBall.style.height)
var newWidth = currentWidth + 50
var newHeight = currentHeight + 50
elBall.style.height = newHeight + 'px'
elBall.style.width = newWidth + 'px'
}