# ========================================
# Build stage
# ========================================
FROM node:16-alpine as build
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Build landing page
COPY src src/
COPY webpack.* babel.config.json ./
RUN yarn build

# ========================================
# Runtime stage - NGINX
# ========================================
FROM nginx:1.21
WORKDIR /usr/share/nginx/html

# Copy built assets
COPY --from=build /app/dist ./
