# Etapa de construção
FROM node:18 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o código da aplicação
COPY . .

# Gera o build da aplicação Next.js
RUN npm run build

# Etapa final para a produção
FROM node:23-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de build da etapa anterior
COPY --from=build /app/.next ./
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Instala as dependências necessárias para a produção
RUN npm install --production

# Expondo a porta que o Next.js vai rodar
EXPOSE 3000

# Define o comando para rodar o servidor de produção do Next.js
CMD ["npm", "start"]
