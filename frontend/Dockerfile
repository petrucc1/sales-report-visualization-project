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

# Compila a aplicação React
RUN npm run build

# Usa uma imagem de servidor web leve para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos compilados para o diretório onde o nginx os servirá
COPY --from=0 /app/build /usr/share/nginx/html

# Expõe a porta que o container vai usar
EXPOSE 80

# Define o comando padrão para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
