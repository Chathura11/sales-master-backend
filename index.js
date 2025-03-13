const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const connection = require('./config/db.config');
const cookieParser = require('cookie-parser');

const app = express()

const PORT = process.env.PORT || 5050;

// Use the cors middleware
app.use(cors({
    // origin: 'http://localhost:3000', // Replace with your actual frontend domain
    // credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  }));


app.use(bodyParser.json())
// Use cookie-parser middleware
app.use(cookieParser());

connection();

const userRouters = require('./routes/users.routes')
const brandRouters = require('./routes/brand.routes');
const categoryRouters = require('./routes/category.routes');
const locationRouters = require('./routes/location.routes');


//user model
app.use('/api/users',userRouters);
app.use('/api/brands', brandRouters);
app.use('/api/categories',categoryRouters);
app.use('/api/locations',locationRouters);

app.listen(PORT,()=>{
    console.log(`Server is up and run on port ${PORT}`);
});
