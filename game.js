//variaveis do game 
let board = ['', '', '', '', '', '', '', '', ''];
let playtime = 0;
let symbols = ['o','x'];
//criar variavel para  game over
let gameover = false ;
//criando uma função
function handlemove(position){
  if(gameover){
    return;
  }
  
  if(board[position] = ' ') {
    board[position]= symbols[playtime];
    gameover = iswin();
    //(!gameover)
    if(gameover == false){
    //condição
      if(playtime == 0) {
        playtime = 1;
      }else {
        playtime = 0;
    }
  }
}
return gameover;
}

function iswin(){

  let winstate =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for(let i = 0; i < winstate.length; i ++){
    let seq =winstate[i];
    let pos1 =seq [0]
    let pos2 =seq [1]
    let pos3 =seq [2]
    if (board[pos1] == board[pos2] &&
        board[pos1] == board[pos3] &&
        board[pos1] != ''){
          return true
        }
  }
  return false
}