# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev=false
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Runtime stage
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
RUN mkdir -p /data && chown -R nodejs:nodejs /data && chmod -R 775 /data
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
USER nodejs
EXPOSE 3000
CMD ["node", "dist/index.js"]
