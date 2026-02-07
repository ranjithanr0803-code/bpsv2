# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /sgl

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the React app
RUN npm run build

# Set the production environment
ENV NODE_ENV=production

# Expose port 80
EXPOSE 80

# Define the command to run your app
CMD ["npm", "start"]
