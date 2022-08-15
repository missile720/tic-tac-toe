//tracker for the board
let board = [null,null,null,null,null,null,null,null,null];
//default level to easy
let level = "Easy";
//tracks computer turn number
let computerTurn = 0;
//runs on load
initialize(level);

function initialize(levels){
    //selects all spaces
    let spaces = document.querySelectorAll(".space");

    //loops through all spaces and adds click event listeners
    for(let i = 0; i < spaces.length; i++){
        spaces[i].addEventListener("click", userClick);
    }

    document.querySelector(".level").innerHTML = levels;

    if(levels === "Easy"){
        document.querySelector(".bodyContainer").classList.remove("bodyContainerImpossible");
        document.querySelector(".bodyContainer").classList.remove("bodyContainerMedium");
        document.querySelector(".bodyContainer").classList.add("bodyContainerEasy");
    }
    else if(levels === "Medium"){
        document.querySelector(".bodyContainer").classList.remove("bodyContainerEasy");
        document.querySelector(".bodyContainer").classList.remove("bodyContainerImpossible");
        document.querySelector(".bodyContainer").classList.add("bodyContainerMedium");
    }
    else{
        document.querySelector(".bodyContainer").classList.remove("bodyContainerEasy");
        document.querySelector(".bodyContainer").classList.remove("bodyContainerMedium");
        document.querySelector(".bodyContainer").classList.add("bodyContainerImpossible");
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
    winCondition(width);
}

function computerClick(width){
    computerTurn++;
    if(level === "Easy"){
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
    else if(level === "Medium"){
        //row 1
        if(board[0] === null && board[1] === 1 && board[2] === 1){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[1] === null && board[2] === 1){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[1] === 1 && board[2] === null){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //row 2
        else if(board[3] === null && board[4] === 1 && board[5] === 1){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[3] === 1 && board[4] === null && board[5] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[3] === 1 && board[4] === 1 && board[5] === null){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //row 3
        else if(board[6] === null && board[7] === 1 && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[6] === 1 && board[7] === null && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[6] === 1 && board[7] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 1
        else if(board[0] === null && board[3] === 1 && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[3] === null && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[3] === 1 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 2
        else if(board[1] === null && board[4] === 1 && board[7] === 1){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[1] === 1 && board[4] === null && board[7] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[1] === 1 && board[4] === 1 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 3
        else if(board[2] === null && board[5] === 1 && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[5] === null && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[5] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //cross 1
        else if(board[0] === null && board[4] === 1 && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[4] === null && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[4] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //cross 2
        else if(board[2] === null && board[4] === 1 && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[4] === null && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[4] === 1 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else{
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
    }
    else if(level === "Impossible"){
        //computers first turn and center not taken
        if(board[4] === null && computerTurn === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        //computer first turn if center taken
        else if(board[4] === 1 && computerTurn === 1){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        //computer second move if first move was center for computer
        else if(board[4] === 0 && computerTurn === 2 && board[0] === 1 && board[7] === 1 && board[5] === null){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[1] === 1 && board[8] === 1 && board[3] === null){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[1] === 1 && board[6] === 1 && board[5] === null){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[5] === 1 && board[6] === 1 && board[1] === null){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[0] === 1 && board[5] === 1 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[2] === 1 && board[3] === 1 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[3] === 1 && board[8] === 1 && board[1] === null){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[2] === 1 && board[7] === 1 && board[3] === null){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[0] === 1 && board[8] === 1 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[2] === 1 && board[6] === 1 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[1] === 1 && board[5] === 1 && board[2] === null){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[1] === 1 && board[3] === 1 && board[0] === null){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[5] === 1 && board[7] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[4] === 0 && computerTurn === 2 && board[3] === 1 && board[7] === 1 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //computer checks first for winning condition
        //row 1
        else if(board[0] === null && board[1] === 0 && board[2] === 0){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 0 && board[1] === null && board[2] === 0){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 0 && board[1] === 0 && board[2] === null){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //row 2
        else if(board[3] === null && board[4] === 0 && board[5] === 0){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[3] === 0 && board[4] === null && board[5] === 0){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[3] === 0 && board[4] === 0 && board[5] === null){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //row 3
        else if(board[6] === null && board[7] === 0 && board[8] === 0){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[6] === 0 && board[7] === null && board[8] === 0){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[6] === 0 && board[7] === 0 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 1
        else if(board[0] === null && board[3] === 0 && board[6] === 0){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 0 && board[3] === null && board[6] === 0){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 0 && board[3] === 0 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 2
        else if(board[1] === null && board[4] === 0 && board[7] === 0){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[1] === 0 && board[4] === null && board[7] === 0){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[1] === 0 && board[4] === 0 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 3
        else if(board[2] === null && board[5] === 0 && board[8] === 0){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 0 && board[5] === null && board[8] === 0){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 0 && board[5] === 0 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //cross 1
        else if(board[0] === null && board[4] === 0 && board[8] === 0){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 0 && board[4] === null && board[8] === 0){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 0 && board[4] === 0 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //cross 2
        else if(board[2] === null && board[4] === 0 && board[6] === 0){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 0 && board[4] === null && board[6] === 0){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 0 && board[4] === 0 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        //computer blocks user's potential win
        //row 1
        else if(board[0] === null && board[1] === 1 && board[2] === 1){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[1] === null && board[2] === 1){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[1] === 1 && board[2] === null){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //row 2
        else if(board[3] === null && board[4] === 1 && board[5] === 1){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[3] === 1 && board[4] === null && board[5] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[3] === 1 && board[4] === 1 && board[5] === null){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //row 3
        else if(board[6] === null && board[7] === 1 && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[6] === 1 && board[7] === null && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[6] === 1 && board[7] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 1
        else if(board[0] === null && board[3] === 1 && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[3] === null && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${4}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${4}`).removeEventListener("click", userClick);
            //sets board to 0
            board[3] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[3] === 1 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 2
        else if(board[1] === null && board[4] === 1 && board[7] === 1){
            //fills in with O
            document.querySelector(`#box${2}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${2}`).removeEventListener("click", userClick);
            //sets board to 0
            board[1] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[1] === 1 && board[4] === null && board[7] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[1] === 1 && board[4] === 1 && board[7] === null){
            //fills in with O
            document.querySelector(`#box${8}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${8}`).removeEventListener("click", userClick);
            //sets board to 0
            board[7] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //column 3
        else if(board[2] === null && board[5] === 1 && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[5] === null && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${6}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${6}`).removeEventListener("click", userClick);
            //sets board to 0
            board[5] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[5] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //cross 1
        else if(board[0] === null && board[4] === 1 && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${1}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${1}`).removeEventListener("click", userClick);
            //sets board to 0
            board[0] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[4] === null && board[8] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[0] === 1 && board[4] === 1 && board[8] === null){
            //fills in with O
            document.querySelector(`#box${9}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${9}`).removeEventListener("click", userClick);
            //sets board to 0
            board[8] = 0;

            //check win condition for computer
            winConditionComputer();
        }

        //cross 2
        else if(board[2] === null && board[4] === 1 && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${3}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${3}`).removeEventListener("click", userClick);
            //sets board to 0
            board[2] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[4] === null && board[6] === 1){
            //fills in with O
            document.querySelector(`#box${5}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${5}`).removeEventListener("click", userClick);
            //sets board to 0
            board[4] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else if(board[2] === 1 && board[4] === 1 && board[6] === null){
            //fills in with O
            document.querySelector(`#box${7}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`#box${7}`).removeEventListener("click", userClick);
            //sets board to 0
            board[6] = 0;

            //check win condition for computer
            winConditionComputer();
        }
        else{
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
    }
}

//function runs to see if user wins
function winCondition(width){
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
    else{
        //function runs for computer
        computerClick(width);
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

//dom that executes when user clicks on the reset button with level
document.getElementById("resetEasy").onclick = function(){reset("Easy")};
document.getElementById("resetMedium").onclick = function(){reset("Medium")};
document.getElementById("resetHard").onclick = function(){reset("Impossible")};

//resets that occur on win or lose keeping the current level difficulty
document.getElementById("reset1").onclick = function(){reset(level)};
document.getElementById("reset2").onclick = function(){reset(level)};

//resets the game
function reset(levels){
    //sets level to current selected level by button
    level = levels;
    //reset board
    board = [null,null,null,null,null,null,null,null,null];
    //reset computer turns
    computerTurn = 0;

    //selects all spaces
    let spaces = document.querySelectorAll(".space");

    //loops through all spaces and adds click event listeners
    for(let i = 0; i < spaces.length; i++){
        spaces[i].innerHTML = "";
        spaces[i].removeEventListener("click", userClick);
    }

    //runs initial set up code
    initialize(level);
}