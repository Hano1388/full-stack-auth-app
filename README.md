# Full-Stack-Auth-Application
In this app we have two separate directories, [Client](https://github.com/Hano1388/full-stack-auth-app/tree/master/client) & [Server](https://github.com/Hano1388/full-stack-auth-app/tree/master/server):

### Installation
Make sure you have the following resources installed on your machine
- NodeJS, install node for windows or mac at [Node.js](https://nodejs.org/)
- MongoDB, follow the instructions [here](https://treehouse.github.io/installation-guides/) to install it on your machine

## Client side app:
The client side built, using React Redux and the following tools:
- [Semantic UI](https://semantic-ui.com/), [Bootstrap](https://getbootstrap.com/) for Styling
- [React-Router-dom](https://github.com/ReactTraining/react-router#readme) for navigation
- [Redux-Form](https://redux-form.com/8.1.0/) for handling forms
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) middleware for handling Redux async calls

 `To Run it, you need to navigate to client folder and run the following commands in your terminal or CMD:`
 ```
 npm install
 npm start
 ```
 then in your browser navigate to [localhost:3000](http://localhost:3000/)

 ## Server Side (Backend)
 The server side built, using NodeJS, MongoDB and the following tools:
- [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs): to generate a salt and encrypt user password with it
- [jwt-simple](https://www.npmjs.com/package/jwt-simple): to generate a token for user
- [mongoose (ODM)](https://mongoosejs.com/): to deal with mongoDB
- [passport](http://www.passportjs.org/) & [passport-jwt](https://www.npmjs.com/package/passport-jwt): to handle user authentication
- [passport-local](http://www.passportjs.org/packages/passport-local/) to handle login

`To Run it, in a new terminal tab navigate to server folder and run the following commands in your terminal or CMD:`
 ```
 npm install
 npm start
 ```
then in your browser navigate to [localhost:3000](http://localhost:3010/)

`You will also need to run MongoDB in a new terminal/CMD tab to serve our backend API by running the following command`
 ```
 mongod
 ```
