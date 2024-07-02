# Use a imagem oficial do Node.js como base
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
COPY .env .
CMD ["node", "src/server.js"]
EXPOSE 3002