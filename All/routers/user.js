require("dotenv").config();

const express = require("express");
const bcrypt = require('bcrypt')
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../module/User')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
//const AuthUser = require("../../midleware");
// const Blog = require("../module/Blog");
const middleware = require("../midlewares/midleware");



router.post('/signup', async (req, res, next) => {

    await User.find({ email: req.body.email })
        .exec().then(user => {
            if (user.length === 1) {
                res.status(200).json({
                    message: 'Email Exist'
                })
            } else {


                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err

                        });
                    } else {

                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            email: req.body.email,
                            password: hash
                        });
                        console.log(user);
                        user.save().then(result => {
                            console.log(result)
                            res.status(201).json(result)
                        }).catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        });

                    }
                })
            }
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
});


router.get("/all", async (req, res, next) => {
    try {
        const blog = await User.find();
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post("/Login", async (req, res, next) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        console.log("try")

        if (!user) {
            console.log("try")
            return res.status(200).json({ message: " Not found user" })

        } else {
            const result = bcrypt.compare(req.body.password, user.password)
            if (!result) {
                console.log(error)
                res.status({
                    message: "Error"
                })
            }
        }


        const token = jwt.sign({ id: user._id, email: user.email }, `${process.env.JWT_SECRET}`)
        user.token = token
        res.json({
            user, token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error occured", error })
    }


})

router.delete('/DeleteUser/:id',middleware,async (req,res,next)=>{
    await User.findByIdAndDelete(req.params._id);
    res.status(200).json({message:'Deleted successfully'})
})
router.patch("/update/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(
            {
                _id: id
            },
            {
                $set: req.body
            });
        console.log(req.params);
        res.status(200).json(user)

    } catch (error) {
        res.status(404).json(error)
    }
})


module.exports = router




