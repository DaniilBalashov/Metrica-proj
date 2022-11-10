import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const newUser = await User.create({ name: req.body.name });
  res.json(newUser);
});

export default router;
