var codificarCifraCesar = true;
var codificarBase64 = true;
//Escopo de fuções
  // Escopo de crição do campo de incremento
  function escolheCodificacao(selecao, invisivel)
  {
    if('CifraCesar'=== selecao.value)
    {
      infoIncremento.classList.remove('invisivel');
      incremento.classList.remove('invisivel');
    }
  
    if('Base64'=== selecao.value)
    {
      infoIncremento.classList.add('invisivel');
      incremento.classList.add('invisivel');
    }
  }

  //Escopo codificação Cifra de César
    function codificandoCifraCesar (texto, incremento)
    {
      incremento = parseInt(incremento);
      if (codificarCifraCesar)
      {
        var arrTexto = texto.split('');
        var arrCifrado = [];

        for (var i = 0; i < arrTexto.length; i++)
        {
          var codificado = arrTexto[i].charCodeAt();
          codificado += incremento;
          arrCifrado.push(codificado);
        }
        codificarCifraCesar = false
        return arrCifrado.join(' ');
      }
    }

  //Escopo decodificação Cifra de César  
    function decodificandoCifraCesar (arrCifrado, incremento)
    {
      incremento = parseInt(incremento);
      var arrTextoDecodificado = [];
      if(codificarCifraCesar === false)
      {
        var arrTexto = arrCifrado.split(' '); 
        var arrConvertida = ''
        for (var i = 0; i < arrTexto.length; i++)
        {
          arrConvertida = String.fromCharCode(arrTexto[i] - incremento);
          arrTextoDecodificado.push(arrConvertida);
        }
        codificarCifraCesar = true;
        return arrTextoDecodificado.join('');
      }
    }

  //Escopo codificação Base64
    function codificandoBase64 (texto)
    {
      if(codificarBase64)
      {
        var codificadoNaBase64 = btoa(texto);
        codificarBase64 = false;
        return codificadoNaBase64;
      }  
    }

  //Escopo decodificação Base64  
    function decodificandoBase64 (texto)
    {
      if(codificarBase64 === false)
      {
        var textoDecodificado = atob(texto);
        codificarBase64 = true;
        return textoDecodificado;
      }
    }

//Manipulação do Dom
  //Seleciona as opções entre Cifra de César e Base64
    var selecao = document.querySelector('#codificacao');
    var infoIncremento = document.querySelector('#infoIncremento');    

  //Radios buttons de codifica e decodifica
    var radioCodifica = document.querySelector('#cod');
    var radioDecodifica = document.querySelector('#decod');
  
  //Botões de codifica e decodifica
    var btnCodifica =document.querySelector('#btnCod');
    var btnDecodifica =document.querySelector('#btnDecod');


//Escopo de eventos
selecao.addEventListener('change', ()=>{
  var incremento = document.querySelector('#incremento');
  escolheCodificacao(selecao, incremento);
})

radioCodifica.addEventListener('change', () =>
{
  btnCodifica.classList.remove('invisivel');
  btnDecodifica.classList.add('invisivel');
})

radioDecodifica.addEventListener('change', () =>
{
  btnDecodifica.classList.remove('invisivel');
  btnCodifica.classList.add('invisivel');
})

btnCodifica.addEventListener('click', (event) =>
{
  event.preventDefault();
  var divMensagem = document.querySelector('#textoModidicado').classList.add('invisivel');
  var texto = document.querySelector('#texto').value;
  if('CifraCesar'=== selecao.value) 
  {
    var numIncremento = incremento.value;
    divMensagem = document.querySelector('#textoModidicado').classList.remove('invisivel');
    var textoCodCifra = codificandoCifraCesar(texto, numIncremento);
    var mostraMsg = document.querySelector('#textoMod')
    mostraMsg.textContent = textoCodCifra;
  }
  else if ('Base64' === selecao.value)
  {
    divMensagem = document.querySelector('#textoModidicado').classList.remove('invisivel');
    var textoCodBase = codificandoBase64 (texto);
    var geraMsg = document.querySelector('#textoMod');
    geraMsg.textContent = textoCodBase;
  }
})

btnDecodifica.addEventListener('click', (event) =>
{
  event.preventDefault();
  var textoGerado = document.querySelector('#textoMod').textContent;
  if('CifraCesar'=== selecao.value) 
  {
    var incrementa = incremento.value;
    var textoDecodCifra = decodificandoCifraCesar (textoGerado, incrementa);
    var mensagem = document.querySelector('#textoMod');
    mensagem.textContent = textoDecodCifra;
  }
  else if ('Base64' === selecao.value)
  {
    var textoDecodBase = decodificandoBase64 (textoGerado);
    console.log(textoDecodBase);
    var exibeMsg = document.querySelector('#textoMod');
    exibeMsg.textContent = textoDecodBase;
  }
})