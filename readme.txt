Pre-requisito
|> node.org/en
|> Instalar o yarn [Indicado na comunidade de gerenciador de package]
|> Visual studio code
|> Extensão dráculo, material icon theme, Fira code


1.yarn init -y
 |> fazer ls para o arquivo pakage foi criado
2.yarn add express
 |> verificar que apareceu novas informações dentro do package.js, tb uma nova pasta node_modules & yarn.lock

3. Criar o index.js
 --> yarn index.js
4. já pode testar no chrome usando http://localhost:2222

5. Alterar a responde para un json
 --> Realizar os testes 

6. Instalar nodemon -D
 -> yarn nodemon index.js
7. Testar via insomnia
Metodos HTTP: GET, POST, PUT AND DELETE
http://localhost:2222/users
    {
	 "name": "Abigaelle",
	 "email": "abigaelle@ilog.com"
    }

 -> Tipo de parametros
 ->Tipos de parametros 
     -> Query Params : 
     -> query (Filtros, ordenação, paginação) [Utilizado no método get]
     -> Routes (Identificar um recurso na alteração ou remoção)
     -> Body  (Dados para criação ou alteração de um registro)

8. Usar app.use(express.json());
 
9. Para usar o mysql 
     --> yarn add mysql
             |> show databases;
             |> create database ilog_db_apr;
             |> create table users(userId int not null primary key auto_increment, name varchar(100));
             |> insert into users(name) value ('billy');
             |> create user 'billy@localhost' IDENTIFIED WITH mysql_native_password BY '123456';
             |> GRANT ALL PRIVILEGES ON *.* TO 'billy@localhost';
