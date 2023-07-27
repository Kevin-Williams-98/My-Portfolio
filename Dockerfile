FROM node:16

WORKDIR /My-Portfolio

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm","start"]