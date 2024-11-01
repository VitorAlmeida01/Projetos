document.getElementById('listarContatosBtn').addEventListener('click', async (event) => {
  try {
    const response = await fetch('/listarContatos');
    const contatos = await response.json();

    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = ''
    listaContatos.style = 'border: 2px solid black; margin: 10px; border-radius: 20px; padding: 20px;';

    contatos.forEach(contato => {
      const listItem = document.createElement('li');
      listItem.textContent = `Código: ${contato.codigoContato}, Nome: ${contato.nomeContato}, Telefone: ${contato.foneContato}`;
    
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Deletar';
      deleteButton.className = 'deleteButton'
      deleteButton.addEventListener('click', async () => {
        await deletarContato(contato.codigoContato);
        listItem.remove();
      });

      const updateButton = document.createElement('button');
      updateButton.textContent = 'Atualizar';
      updateButton.className = 'updateButton'
      updateButton.addEventListener('click', () => {
        const form = document.createElement('form');
        const novoNomeInput = document.createElement('input');
        const novoFoneInput = document.createElement('input');
        const saveButton = document.createElement('button');

        novoNomeInput.className = 'novoNomeInput'
        novoFoneInput.className = 'novoFoneInput'


        novoNomeInput.setAttribute('type', 'text');
        novoNomeInput.setAttribute('placeholder', 'Novo Nome');
        novoFoneInput.setAttribute('type', 'tel');
        novoFoneInput.setAttribute('placeholder', 'Novo Telefone');

        novoNomeInput.value = contato.nomeContato;
        novoFoneInput.value = contato.foneContato;

        saveButton.textContent = 'Salvar';
        saveButton.addEventListener('click', async () => {
          const novoNome = novoNomeInput.value;
          const novoFone = novoFoneInput.value;

          await atualizarContato(contato.codigoContato, novoNome, novoFone);


          form.remove();

          alert('Contato atualizado com sucesso!')
        });

        form.appendChild(novoNomeInput);
        form.appendChild(novoFoneInput);
        form.appendChild(saveButton);

        listItem.appendChild(form);
      });

      listItem.appendChild(deleteButton);
      listItem.appendChild(updateButton);
      listaContatos.appendChild(listItem);
    });
  } catch (error) {
    console.error('Erro ao listar contatos:', error);
  }
});

async function atualizarContato(codigoContato, novoNome, novoFone) {
  try {
    const response = await fetch('/adicionarOuAtualizarContato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoContato,
        nomeContato: novoNome,
        foneContato: novoFone,
        acao: 'atualizar',
      }),
    });
    
    console.log('Contato atualizado com sucesso');
    // Lógica após atualizar o contato
  } catch (error) {
    console.error('Erro ao atualizar contato:', error);
  }
}

async function deletarContato(codigoContato) {
  try {
    const response = await fetch(`/deletarContato/${codigoContato}`, {
      method: 'DELETE',
    });
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error('Erro ao deletar contato:', error);
  }
}

// Adicionar Contato
document.querySelector('button[value="adicionar"]').addEventListener('click', async (event) => {
    event.preventDefault();
  
    const nomeContato = document.querySelector('input[name="nomeContato"]').value;
    const foneContato = document.querySelector('input[name="foneContato"]').value;

    if ((nomeContato && foneContato) === ''){
      alert('Preencha todos os campos para adicionar um contato')
      return
    } else{

    try {
      const response = await fetch('/adicionarOuAtualizarContato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomeContato,
          foneContato,
          acao: 'adicionar',
        }),
      }).then((response) => {
        if (response.status == 500){
          alert('Já existe um contato com esse número!')
        }else{
          alert('Contato salvo!')
        }
      })

    } catch (error) {
      console.error('Erro ao adicionar contato:', error)
      
    }
    document.getElementById('nomeContato').value = ''
    document.getElementById('foneContato').value = ''
    }
  
    
  });

  
  

  
  
  