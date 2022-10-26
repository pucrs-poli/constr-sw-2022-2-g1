FROM node:14.17.3
WORKDIR /home/buildings-classrooms
COPY . .
ENV KEYCLOAK_HOST=host.docker.internal
RUN npm install
CMD ["npm", "start"]
