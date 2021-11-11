var numberOfButtons = document.querySelectorAll(".drum");

// ativa escutadores de eventos click no site 
for ( var i = 0; i < numberOfButtons.length; i++){
  numberOfButtons[i].addEventListener('click', function (){
    sons(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// função que tocas sons do site baseado na entrada
function sons(entrada){
  switch (entrada){
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;   
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;    
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break; 
    default:
      break;
  } 
}

// animações dos botões

function buttonAnimation(tecla){
  var teclaAtiva = document.querySelector("."+tecla);
  teclaAtiva.classList.add("pressed");
  setTimeout(function (){
    teclaAtiva.classList.remove("pressed");
  }, 100);
}

// pega input das teclas
document.addEventListener("keydown",function(event){
  sons(event.key);
  buttonAnimation(event.key);
});