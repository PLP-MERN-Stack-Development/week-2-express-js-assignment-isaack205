require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./Middleware/customLogger');
const productRoute = require('./Routes/prodRoute');
const connectDB = require('./Config/db');


const port = process.env.PORT || 3000 ;

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(logger);

connectDB
.then(() => {
  app.use('/product', productRoute);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  });
})
.catch((err) => {
  console.error('Failed to connect to database:', err);
  process.exit(1); // Exit if DB connection fails
});



