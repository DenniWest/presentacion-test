FROM node:12-alpine
WORKDIR /user/src/app

COPY package*.json ./

ENV PORT=3000

RUN npm install

COPY . .

EXPOSE $PORT

ENTRYPOINT ["node","app.js"]
