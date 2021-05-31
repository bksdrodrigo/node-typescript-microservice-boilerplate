ARG PORT=7000
FROM node:14-alpine as node

# Builder Stage
FROM node as builder
ARG NPM_TOKEN  
WORKDIR /app
COPY package*.json ./
COPY .npmrc .npmrc
RUN npm i
RUN rm -f .npmrc
COPY . .
RUN npm run build
EXPOSE ${PORT}
ENTRYPOINT [ "npm", "run", "dev" ]


# Final Stage
FROM node as final
# Comment the below line if yo need to injet the enviornment at run time
ENV NODE_ENV production 
ARG NPM_TOKEN
RUN apk --no-cache -U upgrade
RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app
WORKDIR /home/node/app
RUN npm i -g pm2

# PM2 Keys has to be Changed for the new app deployed. Each app should ahve a different key set
ENV PM2_PUBLIC_KEY 7nfucopk0dcb3a6 
ENV PM2_SECRET_KEY zmn4p5rmqp31790

COPY package*.json process.yml ./
COPY .npmrc .npmrc
USER node
RUN npm i --only=production
RUN rm -f .npmrc
# Copy js files and change ownership to user node
COPY --chown=node:node --from=builder /app/dist ./dist
# Open desired port
EXPOSE ${PORT}
ENTRYPOINT ["pm2-runtime", "./process.yml"]
# ENTRYPOINT ["node", "./dist/index.js"]