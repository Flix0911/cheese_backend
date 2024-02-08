//import dependency
const express = require('express')

//import schema
const Cheese = require('../models/Cheese')

//create router
const router = express.Router()

//index
router.get('/', async (req, res) => {
    try {
        res.json(await Cheese.find({}))
    }catch(err){
        res.status(400).json(err)
    }
})

//create
router.post('/', async (req, res) => {
    try {
        res.json(await Cheese.create(req.body))
    }catch(err){
        res.status(400).json(err)
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    }catch(err){
        res.status(400).json(err)
    }
})

//show
router.get('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findById(req.params.id))
    }catch(err){
        res.status(400).json(err)
    }
})

//update
router.put('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.params.body))
    }catch(err){
        res.status(400).json(err)
    }
})

//export router
module.exports = router