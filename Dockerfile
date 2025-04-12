# Etapa de construção
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa final
FROM node:23-slim

WORKDIR /app

# Copia build e dependências do estágio anterior
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

# Garante que o build ID esteja presente
COPY --from=build /app/.next/BUILD_ID ./.next/BUILD_ID

EXPOSE 3000

CMD ["npm", "start"]
