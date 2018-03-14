// import dbConfig from './src/config/db';
// import {TodoRoutes } from './src/modules';
import express from 'express';
import path from 'path'
import middlewaresConfig from './src/config/middlewares';
const app=express();
const PORT=process.env.PORT || 5000
const stat_host=express.static(path.resolve(__dirname, '../react-ui/build'))
/**
 * Middlewares
 */
middlewaresConfig(app,stat_host);

// Answer API requests.
app.get('/api', function (req, res) {
res.json({ message: 'Hello from the Node server!' });
});

// All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
// response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

// listening at Port
app.listen(PORT,err =>{
    console.log("ERROR")
},res => {
    console.log(`RUNNING at ${PORT}`)
});
