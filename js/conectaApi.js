async function listaVideos() { // relembrando que por padrao o js é sincrono
    const conexao = await fetch("http://localhost:3000/videos"); // e ao definir uma funcao como assincrona, o await fetch aguardara uma execucao em que recebera uma response que poderá ser resolved (then) ou rejected (catch.) esse método que RECEBE é por si um method GET.
     const conexaoConvertida = await conexao.json(); // esse metodo json (JavaScript Object Notation) pega todos os dados do response em formato de bytes que era recebido no console.log(conexao) e transforma em um objeto JS que aplicado aqui por exemplo, retonar no console um array de 3 itens de videos contendo suas informacoes do db.json.
    //console.log(conexaoConvertida);

    return conexaoConvertida
}
listaVideos();

// no primeiro teste tive erro de console: Unhandled Promise Rejection: TypeError: Load Failed
                                                //(anonymous funtion) - conectaApi.js:2

    // tinha escrito http://localhost/3000/videos coloquei / entre local host e 3000 ao :