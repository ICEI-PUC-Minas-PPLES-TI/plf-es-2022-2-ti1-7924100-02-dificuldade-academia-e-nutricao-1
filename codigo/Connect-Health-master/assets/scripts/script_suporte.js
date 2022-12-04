// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Gabriel",
            "sobrenome": "Morais",
            "email": "gabriel@gmail.com",
            "assunto": "Feedback",
            "comopossoajudalo": "Site é bem funcional e esta tudo funcionando."
        },
        {
            "id": 2,
            "nome": "Igor",
            "sobrenome": "Santos",
            "email": "igor@gmail.com",
            "assunto": "Ajuda",
            "comopossoajudalo": "Como consigo acessar os exercícios?"
        },
        {
            "id": 3,
            "nome": "Julia",
            "sobrenome": "Borges",
            "email": "julia@gmail.com",
            "assunto": "Problemas",
            "comopossoajudalo": "A parte de dieta não está funcionando."
        },
        {
            "id": 4,
            "nome": "Victor",
            "sobrenome": "Fonseca",
            "email": "victor@gmail.com",
            "assunto": "Feedback",
            "comopossoajudalo": "Poderia melhorar o site nas funcionalidade"
        },
        {
            "id": 5,
            "nome": "Marcos",
            "sobrenome": "Aguiar",
            "email": "marcos@gmail.com",
            "assunto": "Problemas",
            "comopossoajudalo": "As dicas sobre musculação e dieta são muito ruins."
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Mensagem inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,

    displayMessage("Mensagem alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Mensagem removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}