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
}