# Use a base Node.js image
FROM node:14

# Install PostgresSQL
RUN apt-get update && apt-get install -y postgresql
# run PostgreSQL
RUN service postgresql start

# Set up a non-root user and password for running the application
RUN useradd -m admin
RUN echo 'admin:admin12345' | chpasswd
USER admin

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]