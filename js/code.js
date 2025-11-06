function onBallClick() {
var randomIncrease = getRandomIntInclusive(20,60)
var elBall =  document.querySelector(".ball")
var currentWidth = parseInt(elBall.style.width)
var currentHeight = parseInt(elBall.style.height)
var newWidth = currentWidth + randomIncrease
var newHeight = currentHeight + randomIncrease
if (newWidth >= 400 || newHeight >= 400){
    newWidth = 100
    newHeight = 100
}
elBall.style.height = newHeight + 'px'
elBall.style.width = newWidth + 'px'
}