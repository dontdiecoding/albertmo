FROM oven/bun:latest

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY package.json /usr/src/bot
COPY tsconfig.json /usr/src/bot

RUN bun install

COPY . /usr/src/bot

CMD ["bun", "watch"]