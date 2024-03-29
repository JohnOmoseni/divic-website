FROM node:16-alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json package-lock.json ./
# install dependencies
ENV NODE_ENV production
RUN yarn install --frozen-lockfile
COPY . .
# build
RUN yarn build
# remove dev dependencies
RUN npm prune --production
FROM node:16-alpine
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
EXPOSE 3000
CMD ["yarn", "start"]