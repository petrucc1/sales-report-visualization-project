# Usa uma imagem base do Node.js
FROM node:20.15.0

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Define a porta que o container vai expor
EXPOSE 5002

# Define o comando padrão para iniciar o servidor
CMD ["npm", "start"]
