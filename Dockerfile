FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY next.config.js ./next.config.js

COPY components ./components
COPY pages ./pages
COPY public ./public
COPY utils ./utils
COPY styles ./styles
COPY layouts ./layouts
COPY config ./config
COPY api ./api
COPY hook ./hook
COPY store ./store
COPY types ./types

CMD ["npm", "run", "dev"]