import express from 'express'
import cors from 'cors'
import cellar from './db'

app.use(cors())
app.use(express.json())

// Add a wine

app.post('/wines', async (req, res) => {
    try {
        const { label, qty, color } = req.body    
        const response = await cellar.query(`
    INSERT INTO WineCellar (label, qty, color) 
        VALUES (${label}, ${qty}, ${color}) 
        RETURNING *;
        `)

    res.json(response.rows)
    } catch(error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Get a wine

app.get('/wines/:id', async (req, res) => {
    try {    
        const id = req.id
        const response = await cellar.query(`
    SELECT * FROM WineCellar WHERE id = ${id};
        `)
        res.json(response.rows)
    } catch (error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Get all wines

app.get('/wines', async (_, res) => {
    try {
        const response = await cellar.query(`
    SELECT * FROM WineCellar;
        `)
        res.json(response.rows)
    } catch (error) {
        console.error('****   ', error.message, '   ****')
    }
})

// Delete a wine

// Update a wine

const app = express()
const port = 1138

app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
})


