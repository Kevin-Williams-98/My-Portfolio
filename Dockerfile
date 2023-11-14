FROM node:16
# Working directory on host should contain all information and code. This is where it starts.
WORKDIR /my-portfolio
# Copies package .json and places it in working dir
COPY package.json .
# install all dependencies 
RUN npm install 
# Copy everything to working dir
COPY . .
# Need to expose a port to listen 
EXPOSE 5000
# Need to execute npm run start application
CMD ["npm","start"]