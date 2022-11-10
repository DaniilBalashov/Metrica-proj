import express from 'express';
import quest from '../../questions.json';
import { Round } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});
router.get('/test', (req, res) => {
  const initialState = { qsts: quest };
  res.render('Layout', initialState);
});

router.get('/result', (req, res) => {
  res.render('Layout');
});

router.get('/result/:id', async (req, res) => {
  const results = await Round.findAll({ where: { user_id: req.params.id } });
  const initState = { results };
  res.render('Layout', initState);
});
export default router;
