import bodyParser from 'body-parser';

export default (app,stat_host) => {

  // Priority serve any static files.
  app.use(stat_host);
  // Body Parser Config
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

};
