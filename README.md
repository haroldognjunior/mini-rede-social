Para executar este projeto,

tem que rodar o comando npm install nos diretórios API e Client, uma vez terminada a instalacao das dependências, dar o comando npm start.

O banco de dados configurado no pgadmin é o techagro com o usuário postgres com a senha 123. Caso precise alterar as crendenciais, há que modificá-lo em ap/src/db.js.

Nao foi posśivel terminar a funcao de comentar, porém o componente para mostrar os comentários por post está feito e funcionando, entao foi deixado o endpoint para post localhost:3001/posts/:id/comments com o body para testar no postman:

"comment": "string body",           
"userIdUser": "number body",
"postId" : "number body"

string body deve ser substituído pelos valores a serem inseridos, lembrar que as validacoes estao funcionando, entao os valores numéricos de userIdUser e postId devem existir na base de dados para que o comment possa ser inserido e visto desde o componente Comment.jsx do front.