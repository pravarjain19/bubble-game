const cardtag = document.getElementById('card');
const timertag = document.getElementById('timer');
const scoretag = document.getElementById('score');
const hooktag = document.getElementById('hook');

const cardTag = document.getElementById('card');

var total = 0;
var hookval = 0;   

function createBuble(){
var res = "";

for (let i = 0; i < 77; i++) {
   res+=  `<div class="bub">${Math.floor(Math.random()*10)}</div> `;
    
}

cardtag.innerHTML = res;

}
function randomHook(){
    hookval=Math.floor(Math.random()*10);
    hooktag.innerHTML=  hookval;
}

function startTime(){
    var time = 30;
    setInterval(()=>{
        if(time>=0){
            timertag.innerHTML = time--;
        }
        else{
            clearInterval();
            cardTag.innerHTML= ` <Button  class="btn"> <a href="./game.html">Play Again</a></Button>`

            
        }
    }, 1000)
}

function updateScore(){
    total+=10;
    scoretag.innerHTML=total;
}


createBuble();
randomHook();
startTime();





cardTag.addEventListener('click' , function(e){
    var curval = Number(e.target.innerHTML);
   if(hookval == curval ){
        // console.log();
        updateScore();
        createBuble();
        randomHook();
   }

})