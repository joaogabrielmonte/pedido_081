function sim(){
    alert("você aceitou meu pedido de desculpas não tem volta kkk pode mandar o seu endereço agora 🙂‍↔️")
}

function desviar(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = GerarPosicao(10, 90) 
    btn.style.left = GerarPosicao(10, 90) 

    console.log("ops, resposta errada");
}

function GerarPosicao(min, max){
    return (Math.random() * (max - min) + min) + '%';
}