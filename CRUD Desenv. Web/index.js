const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path')

const app = express()
const PORT = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbcontato',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/adicionarOuAtualizarContato', (req, res) => {
  
  try {
    const { codigoContato, nomeContato, foneContato, acao } = req.body;
  
  if (acao === 'adicionar') {

    const sql = 'INSERT INTO contatos (nomeContato, foneContato) VALUES (?, ?)';
    const values = [nomeContato, foneContato];

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Erro ao adicionar contato:', err);
        res.status(500).send('Erro ao adicionar contato');
      } else {
        console.log('Contato adicionado com sucesso');
        res.status(200).send('Contato adicionado com sucesso');
      }
    });
      } else {
        const sql = 'SELECT * FROM contatos WHERE codigoContato = ?';
        const selectValues = [codigoContato];

        connection.query(sql, selectValues, (err, results) => {
        
        if (results.length > 0) {
          const updateSql = 'UPDATE contatos SET nomeContato = ?, foneContato = ? WHERE codigoContato = ?';
          const updateValues = [nomeContato, foneContato, codigoContato];

          connection.query(updateSql, updateValues, (updateErr, updateResults) => {
            console.log('Contato atualizado com sucesso');
              res.status(200).send('Contato atualizado com sucesso');
          });

          
        } 
      
    });
        } 
  } catch (error) {
      res.status(403).json({'Erro':error})
  }
});

app.get('/listarContatos', (req, res) => {
  const sql = 'SELECT * FROM contatos';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar contatos:', err);
      res.status(500).json({ error: 'Erro ao buscar contatos' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete('/deletarContato/:codigoContato', (req, res) => {
  const codigoContato = req.params.codigoContato;

  const sql = 'DELETE FROM contatos WHERE codigoContato = ?'; 
  connection.query(sql, codigoContato, (err, results) => {
    if (err) {
      console.error('Erro ao deletar contato:', err);
      res.status(500).send('Erro ao deletar contato');
    } else {
      console.log('Contato deletado com sucesso');
      res.status(200).send('Contato deletado com sucesso');
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
