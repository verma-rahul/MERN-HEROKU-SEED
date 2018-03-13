import express from 'express';
import dbConfig from './src/config/db';
import {TodoRoutes } from './src/modules';
import middlewaresConfig from './src/config/middlewares';

const app=express();
const PORT=process.env.PORT || 3000

/**
 * Database
 */
dbConfig();


/**
 * Middlewares
 */
middlewaresConfig(app);

/**
 * All Routes
 */
app.use('/api', [TodoRoutes]);

app.listen(PORT,err =>{
    console.log("ERROR")
},res => {
    console.log(`RUNNING at ${PORT}`)
});