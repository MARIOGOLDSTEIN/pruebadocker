FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY server.js ./
# El puerto solo es documentativo, no se abre al host
EXPOSE 3000
CMD ["node", "server.js"]