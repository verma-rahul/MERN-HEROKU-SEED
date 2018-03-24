# MERN Stack application deployed in Heroku
A Project in NodeJs with Express in server Side, MongoDb as Database which serves the build version of application developed in ReactJs


# Installaiton Help:

## You will need to install these to you system :
  - Node.js and npm  [here](https://www.npmjs.com/get-npm).(check `with node -v and npm -v`)


## How To run Application

### To Run Server locally:
  - `npm install`: To install all dependencies of server
  - `npm run heroku-postbuild`: It will install alll client side dependencies and build the process Initally
  - `npm start`: We get the Node Server up an running
### To Run Client locally cd to 'react-ui' :
  - `npm install' : To install client side dependencies
  - `npm build`: To build and host through node server
  - `npm start`: To Run without building (proxy has to be setup in this case)


Our file structure will look like this (Ignore server/server.js file for now):

    - react-ui
      - node_modules
        - ...various modules...
      - public
        - index.html
      - src
        - components
           - .... various components and Tests.....
        - index.js  
      - .gitignore
      - package.json
      - ReadME
    - Server
      - src
        - config
          - config.js
          - db.js
          - middleware.js
        - modules
          - SOME-Module
            - index.js
            - SOME-Model.js
            - SOME-Controller.js
            - SOME-Router.js
           - .... various other Modules and Tests..... 
          - index.js
      - index.js
    - app.json
    - package.json
    - .babelrc
    - README.md
#### Project Structure and Heroku Insight:
1. We have 2 npm projects (React and Server), we first host the server on node and then tell heroku to build the React application to static assestand server it at '../react-ui/build', the server knows to find the static assests at this location.
2. app.json tells which builpacks to use.
3. proxy used in react-ui/package.json tells to proxy the reuqests to localhost:5000 for local deployment.
4. React-router uses HashRouting to avoid making requests to server side, since React-dom-router does not support relative routing for HashRouting, we make and use a custom history object for routes.


