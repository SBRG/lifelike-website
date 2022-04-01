# ========================================
# Build stage
# ========================================
FROM node:16-alpine as build
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --network-timeout=10000000

# Copy source files
COPY . ./

# Build website bundle
ARG PUBLIC_URL=/p
RUN yarn build --base $PUBLIC_URL

# ========================================
# Runtime stage - NGINX
# ========================================
FROM nginx:1.21

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy NGINX configuration
COPY --from=build /app/nginx.conf /etc/nginx/templates/default.conf.template

# Listen port
ENV PORT=80
EXPOSE $PORT
