import bodyParser from 'body-parser';
import path from 'path'

export default app => {
  // Body Parser Config
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  // Priority serve any static files.
  app.use(app.static(path.resolve(__dirname, '../../react-ui/build')));
};
