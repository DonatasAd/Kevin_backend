FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test
EXPOSE 3500
CMD [ "node", "app.js" ]