FROM node:alpine

WORKDIR /app

RUN addgroup app && adduser -S -G app app && chown -R app /app

USER app

COPY --chown=app:node package*.json ./

RUN npm install

COPY --chown=app:node . .

CMD ["npm", "run", "prod"]