let user = '0';
const gridCounter = 3;
let winStatus = false;
HtmlForTicTacToe();

function HtmlForTicTacToe(counter){
    let html = "";
    const width = screen.width;
    const rowColCounter = (counter==undefined) ? gridCounter : counter;
    html += '<div class="row"><div class="col-md-12 col-12"><table>';
    for(var row = 1; row <= rowColCounter; row++){
        html += '<tr>';
        if(width < 560){
            html += '<td style="width:25px"></td>';
        }
        for(var col = 1; col <= rowColCounter; col++){
            html += `<td onclick='SelectGridCell(${row},${col})' class="gridCell">
                            <label id= 'lbl${row}${col}'>?</label>
                        </td>`;
        }
        html+= '</tr>';
    }
    html += '</table></div></div>';
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
    let gcv = gridCellsValues;
    debugger;
    // Checking horizontal row first
    for(let i = 1 ; i <= gridCounter; i++){
    let gcv = gridCellsValues;
    if(gcv[i-1] != '?' && gcv[i-1] == gcv[i+(1*gridCounter) -1] && gcv[i+(1*gridCounter) -1] == gcv[i+ (2*gridCounter) -1]){
        FlagWinner(gcv[i-1]);
       }
}

debugger;
    // Checking vertical rows
    for(let j = 1 ; j <= (gridCounter * gridCounter); j= j+gridCounter){
        if(gcv[j-1] != '?' && gcv[j-1] == gcv[j] && gcv[j] == gcv[j+1]){
            FlagWinner(gcv[j]);
    }
}

debugger;
    //Checking diagonally
    if(gcv[0] != '?' && gcv[0] == gcv[4] && gcv[4] == gcv[8]){
        FlagWinner(gcv[0]);
    }
    if(gcv[2] != '?' && gcv[2] == gcv[4] && gcv[4] == gcv[6]){
        FlagWinner(gcv[2]);

    }
    if(!winStatus){
        alert('No one is winner at this time. Continue or start new the game.');
    }
}

function FlagWinner(winner){
    debugger;
    winStatus = true;
    let playerNameField = `.player${winner} input`;
    let winnerControl = document.querySelectorAll(playerNameField)[0];
    let winnerName= winnerControl.value;
    document.getElementsByClassName('gameWinner')[0].textContent = `${winnerName} (${winner}) won `;
}