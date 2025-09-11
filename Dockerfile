# -------------------------------------------------------
# Stage 1: Dependencies
# -------------------------------------------------------
# We start with Node.js v22.11.0 (Alpine Linux version).
# Alpine is a very small Linux distribution, which makes the final Docker image smaller and faster.
FROM node:22.11.0-alpine AS deps

# Set the working directory inside the container to /app
# Every command after this will run inside /app
WORKDIR /app

# Copy only package.json and package-lock.json
# This ensures Docker can cache the "npm ci" step, so dependencies don’t reinstall every time
COPY package*.json ./

# Install dependencies using npm ci
# - npm ci is faster and more reliable than npm install
# - It installs exactly what is in package-lock.json, preventing version mismatches
RUN npm ci

# -------------------------------------------------------
# Stage 2: Build
# -------------------------------------------------------
# Create another container for building the Next.js application
FROM node:22.11.0-alpine AS builder
WORKDIR /app

# Copy the already installed node_modules from the "deps" stage
# This saves time because dependencies don’t need to be installed again
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the project files (source code, config, etc.)
COPY . .

# Run the build command from package.json
# For Next.js 15 with Turbopack, this creates the optimized .next folder
RUN npm run build

# -------------------------------------------------------
# Stage 3: Production (Final Image)
# -------------------------------------------------------
# This stage is for running the built app in production
FROM node:22.11.0-alpine AS runner
WORKDIR /app

# Set environment variables
# NODE_ENV=production ensures that Next.js and Node run in production mode (faster, optimized)
# PORT=3000 is the default port for Next.js apps inside the container
ENV NODE_ENV=production
ENV PORT=3000

# Copy only the essential files needed to run the app:
# - public folder (static assets like images, fonts, etc.)
# - .next folder (the compiled build output from Next.js)
# - node_modules (runtime dependencies only)
# - package.json (used by Next.js internally at runtime)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose port 3000 so Docker knows this container listens on port 3000
EXPOSE 3000

# Start the Next.js server in production mode
# This runs "next start", which serves the already built application
CMD ["npm", "start"]
