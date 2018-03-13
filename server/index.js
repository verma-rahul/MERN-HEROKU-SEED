// import dbConfig from './src/config/db';
// import {TodoRoutes } from './src/modules';
import express from 'express';
import middlewaresConfig from './src/config/middlewares';
const app=express();
const PORT=process.env.PORT || 5000

/**
 * Middlewares
 */
middlewaresConfig(app);

// Answer API requests.
app.get('/api', function (req, res) {
res.set('Content-Type', 'application/json');
res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

// listening at Port
app.listen(PORT,err =>{
    console.log("ERROR")
},res => {
    console.log(`RUNNING at ${PORT}`)
});
