import express from 'express';
import { resolver } from './index.container';

const router = express.Router();

const userRouter = resolver.user.router;

router.use('/users', userRouter);

export { router };