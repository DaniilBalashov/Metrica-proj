import express from 'express';
import quest from '../../questions.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});
router.get('/test', (req, res) => {
  const initialState = { qsts: quest };
  res.render('Layout', initialState);
});

export default router;
