import express from 'express'
import db from '../db.js'

const router = express.Router()

// GETS ALL TODOS for the Logged in USER
router.get('/',(req,res) =>{

})

// Create new Todo
router.post('/', (req,res) => {
    
})

// Update a Todo
router.put('/:id', (req,res) => {
    
})

// Delete a Todo
router.delete('/:id', (req,res) => {
    
})


export default router