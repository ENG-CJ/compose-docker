FROM node:16-alpine

WORKDIR /frontend_app

COPY . /frontend_app

RUN npm install

COPY . /frontend_app

EXPOSE 3300

CMD ["npm","start"]