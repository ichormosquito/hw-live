# Use Node.js as the base image
FROM node:18

WORKDIR /backend

COPY backend/package*.json ./

RUN npm install

COPY backend .

EXPOSE 8080

# Start the application
CMD ["npm", "start"]