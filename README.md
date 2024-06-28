# Sales Dashboard Project

## Descrição

Este projeto é um dashboard de vendas desenvolvido para exibir informações de vendas de forma visual e interativa. Ele consiste em um frontend construído com React, TypeScript, Material-UI e Recharts, e um backend construído com Node.js, Express e MongoDB Atlas. O objetivo é fornecer uma interface amigável para visualizar os dados de vendas categorizados por produtos, categorias e marcas.

## Funcionalidades

- Exibição de gráficos de vendas usando Recharts.
- Filtragem de dados por categorias, produtos e marcas.
- Atualização dinâmica dos gráficos com base nas seleções dos filtros.

## Tecnologias Utilizadas

### Frontend
- React
- TypeScript
- Material-UI
- Recharts

### Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose

### Ferramentas
- Docker
- Jest (para testes)

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Docker instalado
- Conta no MongoDB Atlas
- Yarn ou npm instalado

### Configuração do Backend

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/sales-dashboard.git
    cd sales-dashboard/backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do diretório `backend` e adicione as seguintes variáveis:

    ```env
    PORT=5002
    MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority&appName=Cluster0
    ```

4. Inicie o servidor backend:

    ```bash
    npm start
    ```

    ou

    ```bash
    yarn start
    ```

### Configuração do Frontend

1. Navegue até o diretório do frontend:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

3. Inicie o servidor frontend:

    ```bash
    npm start
    ```

    ou

    ```bash
    yarn start
    ```

4. O aplicativo estará disponível em `http://localhost:3000`.

### Utilizando Docker

1. Navegue até a raiz do projeto e execute o seguinte comando para iniciar os contêineres Docker:

    ```bash
    docker-compose up --build
    ```

2. Isso irá configurar e iniciar os serviços de backend e frontend dentro de contêineres Docker.

### Testes

Os testes serão implementados utilizando Jest. Para rodar os testes, utilize o seguinte comando na raiz do diretório `backend`:

```bash
npm test
