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

router.get('/result/:id', (req, res) => {
  const { id } = req.params;
  const initState = { id };
  res.render('Layout', initState);
});

router.get('/result/:id/result', async (req, res) => {
  const { id } = req.params;
  const results = await Round.findAll({ where: { user_id: id } });
  const initState = { results, qsts: quest };
  res.render('Layout', initState);
});
export default router;
