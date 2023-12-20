FROM node:16-alpine

RUN apk add --no-cache --virtual .build-deps alpine-sdk python3

WORKDIR /app

RUN npm install -g pnpm

COPY ["package.json","pnpm-lock.yaml", "./"]

RUN pnpm install

COPY . /app

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

ARG VITE_SENTRY_DSN
ENV VITE_SENTRY_DSN=$VITE_SENTRY_DSN

RUN pnpm build
RUN cat .env.example > .env
CMD pnpm serve
