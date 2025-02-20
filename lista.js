function adicionar() {
    let informação = document.getElementById('add').value.trim();
    let campoLista = document.getElementsByTagName('ul')[0];

    if (informação === '') { //CAMPO EM BRANCO
        window.alert('Digite algo antes de adicionar!');
        return;
    }

    let lista = document.createElement('li'); //LISTA

    let conteudo = document.createElement('div');
    conteudo.classList.add('conteudo');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check';
    lista.appendChild(checkbox);

    let texto = document.createElement('span');
    texto.textContent = informação;
    lista.appendChild(texto);

    let botoes = document.createElement('div');
    botoes.classList.add('botoes');

    let butãoEditar = document.createElement('button'); //EDITAR
    butãoEditar.id = 'editar';
    
    let imgEditar = document.createElement('img'); //IMG DO EDITAR
    imgEditar.src = 'editar.png';
    imgEditar.alt = 'Editar';
    imgEditar.id = 'imgEditar';
    butãoEditar.appendChild(imgEditar);
    imgEditar.onclick = function() {
        texto.contentEditable = true;
        texto.focus();

        setTimeout(function() {
            // Move o cursor para o final do texto
            let range = document.createRange();
            let selection = window.getSelection();
            range.selectNodeContents(texto);
            range.collapse(false); // Coloca o cursor no final
            selection.removeAllRanges();
            selection.addRange(range);
        }, 0);
    }

    texto.onkeydown = function(event) {
        if (event.key === 'Enter') {
            texto.contentEditable = false;
            event.preventDefault();
        }
    }

    let butãoDeletar = document.createElement('button');
    butãoDeletar.textContent = 'X'
    butãoDeletar.id = 'deletar';
    butãoDeletar.onclick = function() {
        campoLista.removeChild(lista);
    }

    conteudo.appendChild(checkbox);
    conteudo.appendChild(texto);

    botoes.appendChild(butãoEditar);
    botoes.appendChild(butãoDeletar);
    
    lista.appendChild(conteudo);
    lista.appendChild(botoes);
    
    campoLista.appendChild(lista);

    document.getElementById('add').value = '';
}