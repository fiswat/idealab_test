import express from 'express';
const router = express.Router();

import { getUsers, createUser, loginUser } from '../controllers/usersController.js'

//get all users route
router.route('/').get(getUsers)
router.route('/register').post(createUser)
router.route('/login').post(loginUser)

export default router