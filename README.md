# Challange ignite nodejs 01 - fundamentos nodejs

## Features

O alçada do desafio incluirá o desenvolvimento de uma API para realizar o CRUD das tasks (tarefas).

- [ ] Criação de uma task
- [ ] Listagem de todas as tasks
- [ ] Atualização de uma task pelo `id`
- [ ] Remover uma task pelo `id`
- [ ] Marcar pelo `id` uma task como completa
- [ ] E o verdadeiro desafio: importação de tasks em massa por um arquivo CSV

## Rotas e regras de negócio

Estrutura de uma task:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descricão detalhada da task
- `completed_at` - Data de quando a task foi concluída. Iniciando com o valor `null`
- `created_at` - Data de criação da task
- `updated_at` - Data da última atualização da task

- `POST /tasks`: Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição. Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
- `GET /tasks`: Deve ser possível listar todas as tasks salvas no banco de dados. Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` ou `description`.
- `PUT /tasks/:id`: Deve ser possível atualizar uma task pelo `id`. No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados. Se for enviado somente o `title`, significa que o description não pode ser atualizado e vice-versa.
- `DELETE /tasks/:id`: Deve ser possível remover uma task pelo `id`. Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- `PATCH /tasks/:id/complete`: Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado "normal". Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

## Importação do CSV

Normalmente em uma API, a importação de um CSV acontece enviando o arquivo pela rota, por meio de outro formato, chamado `multipart/form-data`.

Para simplificar no desafio, a importação será feita de outra forma. Iniciamos utilizando a lib `csv-parse`, por meio do exemplo de [iterador async](https://csv.js.org/parse/api/async_iterator/).

Com a lib instalada utilizando o gerenciador de pacotes de sua preferência, crie um arquivo a parte para realizar a leitura do arquivo CSV.

Nesse arquivo, deve ser feito a leitura do CSV e para cada linha, realize uma requisição para a rota `POST /tasks`, passando os campos necessários.

Recomendação do formato CSV:

```csv
title,description
TASK 01,Descrição da Task 01
TASK 02,Descrição da Task 02
TASK 03,Descrição da Task 03
TASK 04,Descrição da Task 04
```
