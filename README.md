<h1 align=center>💲 GoFinances api 💲</h1>
<p align=center><p>

<h2>Sobre 🧐</h2>
<p>
  Essa api foi desenvolvida como parte dos desafios do bootcamp GoStack 12. Ela é capaz de armazenar, listar e deletar transações financeiras de depósito/saque utilizando um banco de dados postgres, manipulado com TypeORM.
</p>

<h2>Tecnologias utlizadas 🚀</h2>
<ul>
  <li>Typescript</li>
  <li>postgres</li>
  <li>Docker</li>
  <li>TypeORM</li>
  <li>Multer</li>
</ul>

<h2>Rotas e Respostas ⬆️⬇</h2>

<h3>GET: http://localhost:3333/transactions</h3>

```javascript
{
  "transactions": [
    {
      "id": "cf18117b-70e3-4e53-8008-b38721a59443",
      "title": "Loan",
      "type": "income",
      "value": 1500,
      "category_id": "43cedd42-be21-49b1-bb8e-800e36ce438d",
      "created_at": "2020-07-01T02:05:38.662Z",
      "updated_at": "2020-07-01T02:05:38.662Z",
      "category": {
        "id": "43cedd42-be21-49b1-bb8e-800e36ce438d",
        "title": "Others",
        "created_at": "2020-06-30T22:03:43.129Z",
        "updated_at": "2020-06-30T22:03:43.129Z"
      }
    }
  ],
  "balance": {
    "income": 1500,
    "outcome": 0,
    "total": 1500
  }
}
```

<h3>POST: http://localhost:3333/transactions</h3>

envie:

```javascript
{
  "title": "Aluguel de Junho",
  "type": "outcome",
  "value": 2000,
  "category": "Aluguel"
}
```
receba:

```javascript
{
  "title": "Aluguel de Junho",
  "type": "outcome",
  "value": 2000,
  "category_id": "bb655813-e3bb-4a1d-8e42-c2c0390cd12f",
  "id": "48ce09f0-01b8-46e1-bfad-3ee6f883f8ff",
  "created_at": "2020-07-01T02:53:49.093Z",
  "updated_at": "2020-07-01T02:53:49.093Z"
}
```

<h3>DELETE: http://localhost:3333/transactions/:id</h3>

resposta: status 200


<h2>Como contribuir? 🤔💭</h2>

<em>antes de tudo, faça um fork do repositório, mais acima</em>

```bash
# crie sua branch para realizar alterações

git checkout -b <sua-branch>

# Faça um commit com as suas alterações

git add .
git commit -m 'o que você fez'

# Pull Request, baby!

git push origin <sua-branch>

```

<em>obs: É preciso ter o postgres instalado e configurado e inserir os dados de configuração no arquivo <strong>ormconfig.json</strong></em>

<hr>

<p align=center>
  Made with 💜 by <a href="https://www.linkedin.com/in/lucas-prazeres/">Lucas dos Prazeres</a> thanks to <a href="https://rocketseat.com.br/">Rocketseat team</a> 🚀
</p>
