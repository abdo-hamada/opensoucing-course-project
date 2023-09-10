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


    function addGo(e){
        const goItem = document.createElement('div');
        goItem.classList.add(role ==='circle'?"circle":'cross');
        goItem.classList.contains('circle')?role='cross':role='circle';
        e.target.appendChild(goItem);
        e.target.removeEventListener('click',addGo)
        events.textContent = `${role} goes !`
        checkWins()
}

let winRoles = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
function checkWins (){
    window.circleWins ; 
    window.crossWins ;
    const allSquares = document.querySelectorAll('.square');
    winRoles.forEach(array=>{
        window.circleWins = array.every((cell)=>{
            return allSquares[cell].firstChild?.classList.contains('circle')?true:false;
            // ? here  means may be null (there is no memeber property called firsChild )
        })
        if(window.circleWins){
            reload.textContent = "AGAIN"
            allSquares.forEach(e=>{
                e.removeEventListener('click',addGo);
                events.textContent = 'circle won !'
                events.classList.add('circle-won')
            })
        }
        window.crossWins = array.every((cell)=>{
            return allSquares[cell].firstChild?.classList.contains('cross')?true:false;
            // ? here  means may be null (there is no memeber property called firsChild )
        })
        if(window.crossWins){
            reload.textContent = "AGAIN"
            allSquares.forEach(e=>{
                e.removeEventListener('click',addGo);
                events.textContent = 'cross won ! '
                events.classList.add('cross-won')
            })
        }
    })
}