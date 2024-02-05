# Use Node 16 alpine as parent image
FROM node:16-alpine

WORKDIR /app
COPY . .

# Install dependencies
RUN npm install
RUN npm run build

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
