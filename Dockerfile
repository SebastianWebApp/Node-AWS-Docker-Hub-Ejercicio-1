FROM node:22-bullseye
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm","start"]
