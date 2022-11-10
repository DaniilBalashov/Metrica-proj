import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import { Round } from '../db/models';
import quest from '../../questions.json';
import apiRouter from './routes/apiRouter';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);
app.use('/test', indexRouter);
app.post('/ono', async (req, res) => {
  const { userid } = req.params;
  const { asn, qst } = req.body;
  await Round.create({
    user_id: userid,
    quest_id: qst,
    answer_id: asn,
    correction: quest[qst].answers[asn].isCorrect,
  });
  return res.sendStatus(200);
});
app.use('/api/v1/', apiRouter);

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
