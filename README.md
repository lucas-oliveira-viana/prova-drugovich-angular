# prova-drugovich-angular

## Motivação

Este é um projeto criado para uma das etapas do processo seletivo da empresa Drugovich.

## Descrição

Esta aplicação foi desenvolvida utilizando o Framework Angular na versão 16. Suas funcionalidades são: uma listagem paginada e um formulário de criação/edição de registro de clientes.

## Pré-requisitos

Antes de começar, certifique-se de atender aos seguintes requisitos:

Node.js instalado.  
Angular CLI instalado: Você pode instalá-lo com o seguinte comando:
```bash
npm install -g @angular/cli
```

Ou, caso opte por executar esse projeto com docker, deve possui-lo no seu computador.

## Instalação e Execução

### Padrão

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Navegue até o diretório do projeto:

```bash
cd prova-drugovich-angular
```
Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Abra um navegador e acesse http://localhost:4200/ para visualizar a aplicação.

### Docker

Execute o comando ```docker-compose up``` para executar o projeto

Abra um navegador e acesse http://localhost:4200/ para visualizar a aplicação.

### Outros comandos

Comando para execução de testes:

```bash
ng test
```

Comando para geração do bundle/artefato:

```bash
ng build
```