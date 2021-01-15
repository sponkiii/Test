var character = document.getElementById('the-character');
var block = document.getElementById('the-block');

function jump(){
    if(character.classList != "animate"){
        character.classList.add('the-animation'); 
    }
    
    setTimeout(function(){
        character.classList.remove('the-animation');
    },1000);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("GAME OVER\n Play Again?");
        window.location = 'index.html';
    }
},10)