# Etapa de build
FROM node:18 AS build

WORKDIR /app

# Instala dependências
COPY package.json package-lock.json ./
RUN npm install

# Copia todo o código
COPY . .

# Gera build
RUN npm run build

# Etapa final de produção
FROM node:18-slim

WORKDIR /app

# Copia o build e dependências necessárias
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "start"]
