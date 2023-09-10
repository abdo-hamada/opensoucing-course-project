const gameBoard= document.querySelector('#game')
const events= document.querySelector('#events')
const arr = new Array(9).fill(0,0,9)
console.log(arr)
let role = 'circle'
events.textContent = `${role} goes first !`
    arr.forEach((e,index)=>{
        const square = document.createElement('div');
        square.classList.add('square')
        square.id=index
        gameBoard.append(square)
        square.addEventListener('click',addGo)
    })

