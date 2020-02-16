# Specify a base image
FROM node:alpine

# Change the working directory
WORKDIR /usr/app

# Copy the app
COPY ./ ./

# Install dependencies
RUN npm install

# Default command
CMD ["node","app.js"]

