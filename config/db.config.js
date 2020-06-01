const mongoose = require('mongoose');
//mongodb://localhost:27017/phones
const MONGODB_URI = process.env.MONGODB_URI || '';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
  .catch(error => console.error(`An error ocurred trying to connect to de database ${MONGODB_URI}`, error));