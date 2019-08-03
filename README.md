# node-sqlite-rpg

Este repositório contém um Servidor NodeJS simples para construir um serviço de gerenciamento de personagens de Role Playing Game (RPG). Utilizando a biblioteca Express para a criação do servidor e SQLite como DataBase.

Este servidor será utilizado para fins educativos e de treinamento.

Inicialmente utilizado como Dummy Database* para o Treinamento de REACT.
*Dummy Database: Objeto Javascript salvo em memória temporária, usado apenas para retorno de dados apenas para testes.

Em atualizações futuras irei, de fato, implementar o servidor uilizando NodeJS e SQLite.


-//-


*1. Instruções Gerais*

*1.1 NodeJS e NPM*

Instalar a versão mais recente do NodeJS (^v10.15.3) encontrada no site: https://nodejs.org/en/

Prompt de Comando (ou algum simulador de Console a sua escolha, exemplo: cmder)

Executar os comando node -v e npm -v para verificar a instalação. Esses comandos devem escrever no console a versão instalada do NnodeJS e NPM

* Titulo *

Acesse https://github.com/emerson-silva/node-sqlite-rpg e baixe o repositório como um .zip

Extraia todo o conteúdo do arquivo node-sqlite-rpg-master.zip para uma pasta de sua preferência e a acesse pelo Prompt de Comando

Execute o comando npm install para instalar as dependências do projeto

Execute o comando node src para iniciar o servidor

Acesse a url http://localhost:3001/ para testar o servidor. A mensagem "Servidor em execução." deve ser exibida

(opcional) Acesse as demais urls descritas no item *Instruções de Uso*, abaixo, para testar todas as respostas do servidor.


-//-


*Instruções de Uso*

Acessar a url hostname/port/character/character_id para acessar um personagem em específico.
exemplo: localhost:3001/character/1

Acessar a url hostname:port/character/all para acessar uma lista com todos os personagens cadastrados.
exemplo: localhost:3001/character/all


-//-


Emerson Silva
03 de Agosto de 2019