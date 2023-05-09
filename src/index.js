// use "import" to import libraries
import express from 'express';
import cors from 'cors';
import apiMembers from './resources/member';
import trainerRouter from './resources/trainer';

const admins = require('./data/admins.json');
const subscription = require('./resources/subscription');
const classes = require('./resources/class');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/subscription', subscription);
app.use('/class', classes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/admins', (req, res) => {
  res.status(200).json({
    data: admins,
  });
});

app.use('/members', apiMembers);
app.use('/trainer', trainerRouter);

app.listen(port, () => {
// eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
