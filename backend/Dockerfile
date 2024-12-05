FROM node:16-alpine

WORKDIR /backend_app

COPY package.json /backend_app
COPY package-lock.json /backend_app

RUN npm install 

COPY . /backend_app

EXPOSE 3400

CMD ["npm","start"]