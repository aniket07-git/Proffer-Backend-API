const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 7000;

const server = app.listen(PORT, () => {
	console.log(`App Server running in ${process.env.NODE_ENV} listening on port ${PORT}!`.yellow.bold);
});
