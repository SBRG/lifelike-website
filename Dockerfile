# ========================================
# Build stage
# ========================================
FROM node:16-alpine as build
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source files
COPY . ./

# Build website bundle
ARG BASE_PATH=/
RUN yarn build --base $BASE_PATH

# ========================================
# Runtime stage - NGINX
# ========================================
FROM nginx:1.21

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html
