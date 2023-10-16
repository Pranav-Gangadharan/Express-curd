const express = require('express');
const AppRoutes = require('./src/routes');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

app.use('/', AppRoutes);


app.listen(process.env.PORT, () => console.log(`Server listening to port ${process.env.PORT}`));