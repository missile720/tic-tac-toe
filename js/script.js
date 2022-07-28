//selects all spaces
let spaces = document.querySelectorAll(".space");

//loops through all spaces and adds click event listeners
for(let i = 0; i < spaces.length; i++){
    spaces[i].addEventListener("click", userClick);
}

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
        let text = document.querySelector(`.box${num}`).innerHTML;
        //checks if element is empty
        if(text === ""){
            //if empty fills in with O
            document.querySelector(`.box${num}`).innerHTML = `<img src="./img/o.png" width="${width}px" height="${width}px">`;
            //remove event listener
            document.querySelector(`.box${num}`).removeEventListener("click", userClick);
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