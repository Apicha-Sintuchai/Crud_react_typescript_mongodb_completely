FROM oven/bun:1-alpine AS base
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

RUN mkdir -p Picsave

EXPOSE 1234

CMD ["bun", "run", "index.js"]
