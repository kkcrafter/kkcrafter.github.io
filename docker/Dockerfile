FROM node:22-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Default: dev server with hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
