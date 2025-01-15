# Step 1: Set the base image to Node.js (LTS version)
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Set up the production environment
FROM node:16 AS production

# Step 8: Set the working directory inside the container
WORKDIR /app

# Step 9: Copy only the necessary files (built app and dependencies)
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Step 10: Install production dependencies
RUN npm install --production

# Step 11: Expose the application port
EXPOSE 3000

# Step 12: Start the application
CMD ["npm", "start"]
