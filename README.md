<h1 align="center">
  <img alt="Deno" title="Deno" src="https://deno.land/logo.svg" height="120px">
</h1>
<p align="center">
  <a href="https://deno.land/">Deno</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://deno.land/x/oak">Oak</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://deno.land/x/postgres">Postgres</a>
</p>
<h3 align="center">
  Uma pequena API de filmes. Utiliza Deno como runtime e Oak como framework. Implementa verbos REST.
</h3>

## :wrench: Preparar a aplicação
Foi utilizado o postgres como banco de dados.

Criar banco de dados com o nome `deno_movies` e executar o seguinte script para criar uma nova tabela:

```sql
  CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    genre VARCHAR(25) NOT NULL,
    is_animated BOOLEAN,
    addition_date TIMESTAMP
  )
```

O arquivo de configuração do banco de dados em `./db/database.js` espera que haja um usuário chamado `postgres` com a senha `postgres`; isso pode ser alterado.

## :checkered_flag: Execução da aplicação
Na linha de comando execute:
```powershell
  deno run -A index.js
```

## :incoming_envelope: Rotas
| Rota       | Método | Função                       |
| ---------- | ------ | ---------------------------- |
| /movies     | get    | Retorna todos os filmes      |
| /movies/:id | get    | Retorna detalhes de um filme |
| /movies     | post   | Cria um filme                |
| /movies/:id | put    | Atualiza um filme            |
| /movies/:id | delete | Deleta um filme              |