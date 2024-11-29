FROM node:21-alpine as deps

COPY package*.json ./

# Use the default working directory for Node.js
WORKDIR /app

RUN npm ci

FROM node:21-alpine as prod
WORKDIR /app
COPY --from=deps ./node_modules ./node_modules
COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]