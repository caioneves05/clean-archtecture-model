import express from 'express';
import { resolver } from './index.container';

const router = express.Router();

const userRouter = resolver.user.router;
const taskRouter = resolver.task.router;

router.use('/users', userRouter);
router.use('/tasks', taskRouter);

export { router };