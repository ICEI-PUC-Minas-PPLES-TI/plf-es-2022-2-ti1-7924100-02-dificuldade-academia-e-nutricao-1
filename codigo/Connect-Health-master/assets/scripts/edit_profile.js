
function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};


    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            perfis: [
                {
                    nome: "Nome",
                    aniversario: "04/04/2004",
                    email: "email@email.com",
                    objetivo: "Nenhum",
                }
            ]
        }
    }
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}


function incluirContato() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = $("#inputNome").val();
    let strAniversario = $("#inputAniversario").val();
    let strEmail = $('#inputEmail').val();
    let strObjetivo = $("#inputObjetivo").val();

    let contato = {
        nome: strNome,
        aniversario: strAniversario,
        email: strEmail,
        objetivo: strObjetivo,
    };

    objDados.perfis.push(contato);
    contato = localStorage.setItem('db', JSON.stringify(contato));



    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    // Atualiza os dados da tela
    imprimeDados();

}

function imprimeDados() {
    let perfil = document.getElementById('perfil');
    let strHtml = '';
    let objDados = leDados();


    for (i = 0; i < objDados.perfis.length; i++) {
        strHtml = `
        <h2>${objDados.perfis[i].nome}</h2>
        <p><b>Aniversário:</b> ${objDados.perfis[i].aniversario}<br>
        <b>Email:</b> ${objDados.perfis[i].email}<br>
        <b>Objetivo:</b> ${objDados.perfis[i].objetivo}</p>`
        localStorage.getItem('db');
    }
    perfil.innerHTML = strHtml;
}


window.onload = function () {
    imprimeDados();
}

function deletarAnterior() {
    localStorage.getItem();
}

// Configura os botões
document.getElementById('btnSalva').addEventListener('click', deletarAnterior);
document.getElementById('btnSalva').addEventListener('click', incluirContato);

