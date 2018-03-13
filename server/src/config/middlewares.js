import bodyParser from 'body-parser';
import path from 'path'
import express from 'express';

export default app => {
  // Body Parser Config
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../../react-ui/build')));
};
