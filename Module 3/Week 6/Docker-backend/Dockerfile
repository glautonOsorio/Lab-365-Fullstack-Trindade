FROM node:18-alpine AS BUILDER

WORKDIR /app
COPY ["./package.json", "./package-lock.json", "/app/"]
RUN npm install

# ----

FROM node:18-alpine

WORKDIR /app

EXPOSE 3333

ENV DB_DIALECT=postgres
ENV DB_HOST=localhost
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=root
ENV DATABASE=postgres
ENV DB_PORT=5432
ENV JWT_SECRET=tokenSuperForte

COPY --from=BUILDER ["/app/node_modules/", "/app/node_modules/"]
COPY ./src/ /app/src/

ENTRYPOINT [ "node", "./src/index.js" ]
