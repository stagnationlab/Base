FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json /usr/src/app/
RUN npm install
RUN npm run build

# Bundle app source
COPY ./build /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]