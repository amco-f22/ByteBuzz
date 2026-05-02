# -----------Build Stage-----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci && npm cache clean --force

# /app
COPY . /app
RUN npm run build


# -----------Production Stage-----------
FROM nginx:1.27-alpine AS production

# * for nginx config, we can use the default one, so we don't need to copy any custom config file
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
