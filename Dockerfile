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
ARG PUBLIC_URL=/
RUN yarn build --base $PUBLIC_URL

# ========================================
# Runtime stage - NGINX
# ========================================
FROM nginx:stable

# Copy built app
COPY --from=build /app/build /usr/share/nginx/html

# Copy NGINX configuration
COPY --from=build /app/nginx.conf /etc/nginx/templates/default.conf.template

# Listen port
ENV PORT=80
EXPOSE $PORT
