FROM node:21-alpine AS builder

RUN apk add --no-cache --update npm
WORKDIR /app
COPY . .
RUN npm ci

FROM node:21-alpine AS runner

WORKDIR /app
COPY --from=builder /app .

CMD npm run start