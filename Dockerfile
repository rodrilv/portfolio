FROM node:18-slim

WORKDIR /portfolio
COPY . /portfolio
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm build
EXPOSE 5173
CMD ["pnpm", "run", "preview", "--host", "--port", "5175"]