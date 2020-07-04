let user = '0';
const gridCounter = 3;
HtmlForTicTacToe();

function HtmlForTicTacToe(counter){
    let html = "";
    const rowColCounter = (counter==undefined) ? gridCounter : counter;
    for(var row = 1; row <= rowColCounter; row++){
        html += '<div class="row">'
        for(var col = 1; col <= rowColCounter; col++){
            html += `<div class="col-md-4 col-4" onclick='SelectGridCell(${row},${col})' style="border:dotted;border-radius: 10px;margin-top: 10px;margin-bottom: 10px;">
                            <label id= 'lbl${row}${col}'>?</label>
                        </div>`;
        }
        html+= '</div>';
    }
    document.getElementById('ticTacToeGrid').innerHTML = html;
}

function SelectGridCell(row,col){
    let userSelected = user;
    
    let el = document.getElementById(`lbl${row}${col}`);
    let elText = el.textContent;
    if(elText =='0' || elText == 'X'){
        alert('This cell is already occupied');
    }else{
    if(userSelected == '0'){
        user = 'X';
        el.style.color = 'rgb(255,255,255)';
        el.textContent = '0';
    }else{
        user = '0';
        el.style.color = 'rgb(0,185,0)';
        el.textContent = 'X';
    }
}
}

function CheckWinner(){
    let gridCells = document.querySelectorAll('#ticTacToeGrid label');
    let gridCellsValues = [];
    for(let cell of gridCells){
            cellVal = cell.textContent;
            gridCellsValues.push(cellVal);
    }

    debugger;
    // Checking horizontal row first
    for(let i = 1 ; i <= gridCounter; i++){
    if(gridCellsValues[i-1] == gridCellsValues[i+(1*gridCounter) -1] && gridCellsValues[i+(1*gridCounter) -1] == gridCellsValues[i+ (2*gridCounter) -1]){
        FlagWinner(gridCellsValues[i-1]);
       }
}

debugger;
    // Checking vertical rows
    for(let j = 1 ; j <= (gridCounter * gridCounter); j= j+gridCounter){
        if(gridCellsValues[j-1] == gridCellsValues[j] && gridCellsValues[j] == gridCellsValues[j+1]){
            FlagWinner(gridCellsValues[j]);
    }
}

debugger;
    //Checking diagonally
    if(gridCellsValues[0] == gridCellsValues[4] && gridCellsValues[4] == gridCellsValues[8]){
        FlagWinner(gridCellsValues[0]);
    }
    if(gridCellsValues[2] == gridCellsValues[4] && gridCellsValues[4] == gridCellsValues[6]){
        FlagWinner(gridCellsValues[2]);
    }


}

function FlagWinner(winner){
    debugger;
    let playerNameField = `.player${winner} input`;
    let winnerControl = document.querySelectorAll(playerNameField)[0];
    let winnerName= winnerControl.value;
    document.getElementsByClassName('gameWinner')[0].textContent = `${winnerName} (${winner}) won `;
}