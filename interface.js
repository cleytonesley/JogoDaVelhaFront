document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})
//funcção
function handleClick(event){
    let square = event.target;
    let position = square.id;

   if(handlemove(position)){
    setTimeout(() => {
        alert("Agora posso dormir kkkkkkk")
    }, 15);
   }
    upadatesquares();
}
//outrafunção  observar oque se passa por aqui
function upadatesquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

        if (symbol != ' '){
            square.innerHTML= `<div class = '${symbol}'></div>`  
        }
    })

}