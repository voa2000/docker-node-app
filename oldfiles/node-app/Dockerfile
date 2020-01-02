# Specify a base image
FROM node:alpine

#Creating a user dirctory
WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./


# Default command
CMD ["npm", "start"]