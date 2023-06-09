const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
// TO DO: add const for CRUD route/s
const items = require('./routes/items.router');
const bio = require('./routes/bio.router');
const formStatus = require('./routes/formStatus.router');
//const uploadRouter = require('./routes/upload.router.js');
const search = require('./routes/search.router');
const vendorBio = require('./routes/vendorBio.router');
const vendorItems = require('./routes/vendorItems.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
// TO DO: add route/s here for all the CRUD (GET, POST, PUT, DELETE)
app.use('/api/items', items);
app.use('/api/bio', bio);
app.use('/api/formStatus', formStatus);
//app.use('/upload', uploadRouter);
app.use('/api/search', search);
app.use('/api/vendorBio', vendorBio);
app.use('/api/vendorItems', vendorItems);

// Serve static files
app.use(express.static('build'));
app.use('/uploads', express.static('uploads'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
