let board = [null,null,null,null,null,null,null,null,null];

initialize();

function initialize(){
    //selects all spaces
    let spaces = document.querySelectorAll(".space");

    //loops through all spaces and adds click event listeners
    for(let i = 0; i < spaces.length; i++){
        spaces[i].addEventListener("click", userClick);
    }
}

//creates connection from js to html modal
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {backdrop: "static"})

//functions runs on user click
function userClick(event){
    //grabs width of space
    let width = event.target.offsetWidth;
    //sets width of img
    width -= 60;

    //displays img on target
    event.target.innerHTML = `<img src="./img/close.png" width="${width}px" height="${width}px">`;

    //remove event listener
    event.target.removeEventListener("click", userClick);

    //grabs elements id
    let identity = event.target.id;
    //grabs number
    let number = parseInt(identity.charAt(identity.length-1));
    //sets board to 1
    board[number-1] = 1;

    //check win condition
    winCondition();

    //function runs for computer
    computerClick(width);
}

function computerClick(width){
    let check = true;
    while(check){
        let j = 0;
        //selects random number from 1-9
        let num = Math.ceil(Math.random() * 9);
        //stores whats inside element
        let text = document.querySelector(`#box${num}`).innerHTML;
        //checks if element is empty
        if(text === ""){
            //if empty fills in with O
            document.querySelector(`#box${num}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${num}`).removeEventListener("click", userClick);
            

            //grabs elements id
            let identity = num;
            //sets board to 0
            board[identity-1] = 0;

            //check win condition for computer
            winConditionComputer();
            
            //breaks loop
            check = false;
        }
        
        //selects all spaces
        let spaces = document.querySelectorAll(".space");

        //loops through all spaces and checks
        for(let i = 0; i < spaces.length; i++){
            //stores whats inside element
            let checkEmpty = spaces[i].innerHTML;

            //if not empty adds to counter
            if(checkEmpty !== ""){
                j++
            }
        }

        //if counter is greater than 8 then breaks while loop
        if(j > 8){
            check = false;
        }
    }
}

//function runs to see if user wins
function winCondition(){
    //init all wins conditions
    let row0 = 0;
    let row1 = 0;
    let row2 = 0;
    let col0 = 0;
    let col1 = 0;
    let col2 = 0;
    let cross0 = 0;
    let cross1 = 0;
    
    //loops through current board
    for(let i = 0; i < board.length; i++){
        //checks for user spaces
        if(board[i] === 1){
            //for each user space adds to that win condition
            switch(i){
                case 0:
                    row0++;
                    col0++;
                    cross0++;
                    break;
                case 1:
                    row0++;
                    col1++;
                    break;
                case 2:
                    row0++;
                    col2++;
                    cross1++;
                    break;
                case 3:
                    row1++;
                    col0++;
                    break;
                case 4:
                    row1++;
                    col1++;
                    cross0++;
                    cross1++;
                    break;
                case 5:
                    row1++;
                    col2++;
                    break;
                case 6:
                    row2++;
                    col0++;
                    cross1++;
                    break;
                case 7:
                    row2++;
                    col1++;
                    break;
                case 8:
                    row2++;
                    col2++;
                    cross0++;
                    break;
            }
        }
    }

    //checks all win conditions for three in a row
    if(row0 === 3 || row1 === 3 || row2 === 3 || col0 === 3 || col1 === 3 || col2 === 3 || cross0 === 3 || cross1 === 3){
        myModal.toggle();
        document.getElementById("winner").innerHTML = "You win!!!! :D";
    }
}

//functions runs to check to see if computer wins
function winConditionComputer(){
    //init all wins conditions
    let row0 = 0;
    let row1 = 0;
    let row2 = 0;
    let col0 = 0;
    let col1 = 0;
    let col2 = 0;
    let cross0 = 0;
    let cross1 = 0;
    
    for(let i = 0; i < board.length; i++){
        //checks for computer spaces
        if(board[i] === 0){
            //for each computer space adds to that win condition
            switch(i){
                case 0:
                    row0++;
                    col0++;
                    cross0++;
                    break;
                case 1:
                    row0++;
                    col1++;
                    break;
                case 2:
                    row0++;
                    col2++;
                    cross1++;
                    break;
                case 3:
                    row1++;
                    col0++;
                    break;
                case 4:
                    row1++;
                    col1++;
                    cross0++;
                    cross1++;
                    break;
                case 5:
                    row1++;
                    col2++;
                    break;
                case 6:
                    row2++;
                    col0++;
                    cross1++;
                    break;
                case 7:
                    row2++;
                    col1++;
                    break;
                case 8:
                    row2++;
                    col2++;
                    cross0++;
                    break;
            }
        }
    }

    //checks all win conditions for three in a row
    if(row0 === 3 || row1 === 3 || row2 === 3 || col0 === 3 || col1 === 3 || col2 === 3 || cross0 === 3 || cross1 === 3){
        myModal.toggle();
        document.getElementById("winner").innerHTML = "You lost :( try again?";
    }
}

//dom that executes when user clicks on the reset button
document.getElementById("reset").onclick = function(){reset()};
document.getElementById("reset1").onclick = function(){reset()};
document.getElementById("reset2").onclick = function(){reset()};

//resets the game
function reset(){
    board = [null,null,null,null,null,null,null,null,null];

    //selects all spaces
    let spaces = document.querySelectorAll(".space");

    //loops through all spaces and adds click event listeners
    for(let i = 0; i < spaces.length; i++){
        spaces[i].innerHTML = "";
        spaces[i].removeEventListener("click", userClick);
    }

    //runs initial set up code
    initialize();
}