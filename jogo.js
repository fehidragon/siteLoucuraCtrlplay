var jogadas = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function (){

  $('#btn_iniciar_jogo').click(function(){
    if($('#entrada_apelido_jogador_1').val == ''){
      alert("Jogador 1 está sem apelido!");
      return false;
    }
    if($('#entrada_apelido_jogador_2').val == ''){
      alert("Jogador 1 está sem apelido!");
      return false;
    }
    $('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
    $('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());

    $('#pagina_inicial').hide();
    $('#tabuleiro').show();

  });

  $('.jogada').click(function(){
    var id_campo_clicado = this.id;
    $('#'+id_campo_clicado).off();
    clique(id_campo_clicado);
  });

  function clique(id){
    var icone ='';
    var pontos = 0;
    if( (jogadas % 2) == 1){
      icone = 'url("imagens/imagemX.png")';
      pontos = -1;
    } else{
      icone = 'url("imagens/imagemO.png")';
      pontos = 1;      
    }
    jogadas++;
    $('#'+id).css('background-image', icone);

    var linha_coluna = id.split('-');
    matriz_jogo[linha_coluna[0]] [linha_coluna[1]] = pontos;

    verifica_combinacao();
  }

  var naoTemGanhador = True;
  function verifica_combinacao(){
    // verifica na horizontal
    var pontos = 0;
    for(var i = 1; i <=3; i++){
      pontos = pontos + matriz_jogo['a'][i];
    }
    ganhador(pontos);

    pontos = 0;
    for(var i = 1; i <=3; i++){
      pontos = pontos + matriz_jogo['b'][i];
    }
    ganhador(pontos); 

    pontos = 0;
    for(var i = 1; i <=3; i++){
      pontos = pontos + matriz_jogo['c'][i];
    }
    ganhador(pontos);     

    // verifica vertical
    for(var l = 1; l <=3; l++){
      pontos = 0;
      pontos += matriz_jogo['a'][l];
      pontos += matriz_jogo['b'][l];
      pontos += matriz_jogo['c'][l];
      ganhador(pontos);
    }

    // verifica na diagonal
    pontos = 0;
    pontos = matriz_jogo['a'][1]+matriz_jogo['b'][2]+matriz_jogo['c'][3];
    ganhador(pontos);
    pontos = 0;
    pontos = matriz_jogo['a'][3]+matriz_jogo['b'][2]+matriz_jogo['c'][1];
    ganhador(pontos);

    if(jogadas >=10 && naoTemGanhador){
      alert('Empate!!!');
      $('.jogada').off();
    }
  }

  function ganhador(pontos){
    if (pontos == -3){
      var jogada_1 = $('#entrada_apelido_jogador_1').val();
      alert(jogada_1 + 'é o vencedor!');
      
      naoTemGanhador = false;
      $('jogada').off();
    } else if (pontos == 3){
      var jogada_2 = $('#entrada_apelido_jogador_2').val();
      alert(jogada_2 + 'é o vencedor!');
      print("Ganhou 2");
      naoTemGanhador = false;
      $('jogada').off();
    }

  }

});

function start(){
  window.location.reload();
}
