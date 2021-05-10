'use strict';

//defining all the necessary variables either using let or var
var starttop = 740;
var startleft = 212;
var speed = 10;
var score = 100;

//these two videos helped me get an idea of how to use the arrow keys to move the snake up,down,left,right
//https://www.youtube.com/watch?v=Yyz0XhmoCgc
//https://www.youtube.com/watch?v=NiG2TnZiFL0

//using arrow keys to move the snake left,right,up,down
let snake = document.getElementById('snake')
snake.style.top = starttop + "px"
snake.style.left = startleft + "px"

window.addEventListener('keydown', (event) => {
    
    switch (event.key) {
    //case 1 is when the up arrow is pressed
        case 'ArrowUp':
            snake.style.top = (starttop - speed) + "px"
            starttop = starttop - speed
            check(startleft + 10, starttop + 10)
            checkBoundary()
            break
    //case 2 is when the down arrow is pressed    
        case 'ArrowDown':
            snake.style.top = (starttop + speed) + "px"
            starttop = starttop + speed
            check(startleft + 10, starttop + 10)
            checkBoundary()
            break
     //case 3 is when the right arrow is pressed
        case 'ArrowRight':
            snake.style.left = (startleft + speed) + "px"
            startleft = startleft + speed
            check(startleft + 10, starttop + 10)
            checkBoundary()
            break
    //case 4 is when the left arrow is pressed
        case 'ArrowLeft':
            snake.style.left = (startleft - speed) + "px"
            startleft = startleft - speed
            check(startleft + 10, starttop + 10)
            checkBoundary()
            break
            
    }
})

//defining the apple parameters
var appleTop = 110
var appleLeft = 820

let apple = document.getElementById('apple')

apple.style.top = appleTop + "px"
apple.style.left = appleLeft + "px"

let scoreDiv = document.getElementById('score')
function check(a,b) {
    let x = (0.5 * 25) + appleLeft
    let y = (0.5 * 25) + appleTop

    if (((a >= x - 5) && (a <= x + 5)) && ((b <= y + 5) && (b >= y - 5)))
    {
        score = score + 10
        scoreDiv.innerHTML = "Score:" + score //10 points are earned when the snake overalps the apple(when the snake eats the apple)

        appleTop = (Math.floor(Math.random() * 550) + 110)
        appleLeft = (Math.floor(Math.random() * 600) + 230)

        apple.style.top = appleTop + "px"
        apple.style.left = appleLeft + "px"
    }
}

// this website helped me learn how to check for the boundary
//https://www.youtube.com/watch?v=JV5XBmaQdIA
//this function checks for all the boundaries (top,left,right,down)
function checkBoundary() {
   
    //this is to check the left boundary
    if (startleft < 220) {
        startleft = startleft + speed
        score = score - 10 // 10 points reduced everytime when the snake touches the boundary
        return false
      
    }
    //this is to check the right boundary
    if (startleft > 850) {
        startleft = startleft - speed
        score = score - 10 // 10 points reduced everytime when the snake touches the boundary
        return false
    }
    //this is to check the upper boundary
    if (starttop < 102) {
        starttop = starttop + speed
        score = score - 10 // 10 points reduced everytime when the snake touches the boundary
        return false
    }
    //this is to check the lower boundary
    if (starttop > 730) {
        starttop = starttop - speed
        score = score - 10 // 10 points reduced everytime when the snake touches the boundary
        return false
    }

}