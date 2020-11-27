import express from 'express'
import cors from 'cors'
import cellar from './db'
import { getModifiedValueText } from './getModifiedValueText'


const app = express()
const port = 1138

app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
})

app.use(cors())
app.use(express.json())

// Add a wine

app.post('/wine', async (req, res) => {
    try {
        const { label, qty, color } = req.body    
        const response = await cellar.query(`
    INSERT INTO cellar (label, qty, color) 
        VALUES (${label}, ${qty}, ${color}) 
        RETURNING *;
        `)

    res.json(response.rows)
    } catch(error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Get a wine

app.get('/wine/:id', async (req, res) => {
    try {    
        const response = await cellar.query(`
    SELECT * FROM cellar WHERE id = ${req.id};
        `)
        res.json(response.rows)
    } catch (error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Get all wines

app.get('/wine', async (_, res) => {
    try {
        const response = await cellar.query(`
    SELECT * FROM cellar;
        `)
        res.json(response.rows)
    } catch (error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Delete a wine

app.delete('/wine', async (req, res) => {
    try {
        const response = await cellar.query(`
    DELETE FROM cellar WHERE wine_id = ${req.id};
        `)
        res.json(response.rows)
    } catch (error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Update a wine

app.patch('/wine/:id', async (req, res) => {
    try {
        const { modifiedColumns, modifiedValues } = getModifiedValueText(req.body) 
        const response = await cellar.query(`
    UPDATE cellar SET (${modifiedColumns}) 
        VALUES (${modifiedValues}) 
        RETURNING *;
        `)

    res.json(response.rows)
    } catch(error) {
        console.error('****   ', error.message, '   ****')
    }
})
