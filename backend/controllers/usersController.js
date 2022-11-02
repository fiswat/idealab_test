import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler';
import { db } from '../config/db.js'
import Users from '../models/Users.js';


//@desc : create user
//route: POST /api/v1/users/register
//access: public 
const createUser = async (req, res) => {
    const { email, username, password } = req.body

    try {
        //check that user does not exist
        let emailQuery = `SELECT email FROM users WHERE email=?`
        const userEmailExist = await db.query(emailQuery, email)
        // console.log(userEmailExist )
        if (userEmailExist.length > 0) {
            throw new Error('Email already exist')
        }

        let usernameQuery = `SELECT username FROM users WHERE username=?`
        const usernameExist = await db.query(usernameQuery, username)
        //  console.log(usernameExist)
        if (usernameExist.length > 0) {
            throw new Error('username already exist')
        }

        const createUserQuery = 'INSERT INTO users (username,email,password) VALUE (?,?,?)'
        const createdQuery = 'SELECT * FROM users WHERE id=?'
        const user = await db.query(createUserQuery, [username, email, password]);
        const createdUser = await db.query(createdQuery, [user.insertId]);

        res.status(200).json({
            status: 'success',
            user: createdUser[0]
        })

    } catch (err) {
        console.log(err)
        res.status(401).json({
            status: 'error',
            error: err.message
        })
    }
}

//@desc : login user
//route: POST /api/v1/users/login
//access: public 
const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    try {
        //check that email exist
        const user = await Users.findOne({ email: email })
        console.log('i am here oooooooooooooooooo', user)
        if (!user) {
            res.status(402)
            throw new Error('User does not exist, pls register')
        }

        if (user && (await user.passwordMatched(password))) {
            res.status(201).json({
                status: 'success',
                user: {
                    _id: user._id,
                    email: user.email,
                    role: user.role,
                    token: await generateToken(user._id)
                }
            })
        } else {
            res.status(400)
            throw new Error('incorrect password')
        }
    } catch (err) {
        console.log(err.message)
        res.json({
            message: err.message
        })
    }

})

//@desc : get all users
//route: GET /api/v1/users
//access: privite - admin only
const getUsers = async (req, res) => {
    try {
        const getPostsQuery = 'SELECT * FROM users'
        const users = await db.query(getPostsQuery);

        res.status(200).json({
            status: 'success',
            users
        })
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}


export {
    createUser,
    loginUser,
    getUsers
}