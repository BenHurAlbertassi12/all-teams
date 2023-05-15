# Use a imagem base do Node.js
FROM node:14-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Compile o projeto
RUN npm run build

# Exponha a porta que a aplicação estará rodando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
