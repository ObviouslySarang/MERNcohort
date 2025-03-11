const express = require('express');
const { createTodoSchema, updateTodoSchema } = require('./types');
const Todo = require('./db');
const cors = require('cors');

const app = express();
const port = 3000;


// Middleware
app.use(cors());
app.use(express.json());
//routes
app.post('/todo', async (req, res) => {
    const result = createTodoSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
    }
    // Proceed with creating the todo
    try {
        await Todo.create({
            title: req.body.title,
            description: req.body.description,
            completed: false
        });
        res.status(201).json({ message: 'Todo created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create todo' });
    }
});
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({ todos });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to get todos' });
    }
});
app.put('/completed',async (req, res) => {
    const { error } = updateTodoSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({ error: error.errors });
    }
    // Proceed with updating the todo
    await Todo.updateOne({ 
        _id: req.body.id
    }, {
        completed: true
    });
     
    res.status(200).json({ message: 'Todo updated successfully' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/todos`); 
});