# Specify a base image
FROM node:alpine

#Creating a user directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install
COPY . .


# Default command
CMD ["npm", "start"]