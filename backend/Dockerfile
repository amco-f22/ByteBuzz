FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force


# -----------Production stage-----------
FROM node:20-alpine AS production

# Security: run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Security: remove unnecessary packages
RUN apk --no-cache add dumb-init

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY src/ ./src/

USER appuser

EXPOSE 5000

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/index.js"]