const { Router } = require('express');
//import all routers;
const authRouter = require('./auth.js');
const userRouter = require('./users.js');
const postRouter = require('./posts.js');
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);


module.exports = router;