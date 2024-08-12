FROM node:20
RUN git clone https://github.com/FXastro/Astro-Api
RUN npm install
RUN yarn
EXPOSE 5000
CMD [ "node", "index.js" ]