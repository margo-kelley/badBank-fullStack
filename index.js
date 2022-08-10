var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');
const swaggerUI = require('swagger-ui-express');
const e     = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://margo-kelley:ZWndLqBn5WiijOSW@cluster0.avptsa9.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

// swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Bad Bank API',
      version: "1.0.0"
    }
  },
  apis: ['index.js']
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

/**
 * @swagger
 * /account/create/{name}/{email}/{password}:
 *    get:
 *      description: create account for badbank
 *      responses:
 *       200:
 *        description: Success
 */
app.get('/account/create/:name/:email/:password', function (req, res) {
    // check if account exists
    dal.find(req.params.email).
        then((users) => {
            // if user exists, return error message
            if(users.length > 0){
                console.log('User already exists');
                res.send('User already exists');
            }
            else{
                // else create user
                dal.create(req.params.name,req.params.email,req.params.password).
                    then((user) => {
                        console.log(user);
                        res.send(user);
                    });
            }
        });
});


/**
 * @swagger
 * /account/login/{name}/{email}/{password}:
 *  get:
 *    description: login to existing account for badbank
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/account/login/:email/:password', function (req, res) {
  dal.find(req.params.email).
    then((user) => {
      // if user exists, check password
      if(user.length > 0){
        if (user[0].password === req.params.password){
          res.send(user[0]);
        }
        else{
          res.send('Login failed: wrong password');
        }
      }
      else{
        res.send('Login failed: user not found');
      }
    });
});

/**
 * @swagger
 * /account/find/{email}:
 *  get:
 *    description: find a user by email
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/account/find/:email', function (req, res) {
  dal.find(req.params.email).
    then((user) => {
      console.log(user);
      res.send(user);
    });
});

/**
 * @swagger 
 * /account/findOne/{email}:
 *  get:
 *    description: find a user by email, alternative
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/account/findOne/:email', function (req, res) {
  dal.findOne(req.params.email).
    then((user) => {
      console.log(user);
      res.send(user);
  });
});


/**
 * @swagger
 * /account/update/{email}/{amount}:
 *  get:
 *    description: find user via email, then update prop 'balance' via amount
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/account/update/:email/:amount', function (req, res) {
  var amount = Number(req.params.amount);
  dal.update(req.params.email, amount).
    then((response) => {
      console.log(response);
      res.send(response);
    });
});

/**
 * @swagger
 * /account/all:
 *  get:
 *    description: get ALL users
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/account/all', function (req, res) {
  dal.all().
  then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('Running on port: ' + port);