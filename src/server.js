import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import { Round } from '../db/models';
import quest from '../questions.json';
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

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  store: new FileStore(),
  secret: 'oh klahoma', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/test', indexRouter);

app.post('/test/:userid', async (req, res) => {
  const { userid } = req.params;
  const { asn, qst } = req.body;
  await Round.create({
    user_id: userid,
    quest_id: qst,
    answer_id: asn,
    correction: quest[qst].answers[asn].isCorrect,
  });
  if (qst === quest.length - 1) {
    res.clearCookie('user_sid');
    req.session.destroy();
    return res.sendStatus(200);
  }
  return res.sendStatus(200);
});
app.use('/api/v1/', apiRouter);

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
