import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.sendStatus(400);

  const newUser = await User.create({ name });

  req.session.user = { id: newUser.id, name: newUser.name };

  res.json(newUser);
});

export default router;
