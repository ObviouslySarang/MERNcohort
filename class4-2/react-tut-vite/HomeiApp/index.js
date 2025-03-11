const express = require('express');
import { createTodoSchema, updateTodoSchema } from './types';

const app = express();
const port = 3000;

// Middleware

app.use(express.json());
//routes
app.post('/todo', (req, res) => {
    const { error } = createTodoSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({ error: error.errors });
    }
    // Proceed with creating the todo
    res.status(201).json({ message: 'Todo created successfully' });
    //put it in mongodb
});
app.get('/todos', (req, res) => {
   
});
app.put('/completed', (req, res) => {
    const { error } = updateTodoSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({ error: error.errors });
    }
    // Proceed with updating the todo
    res.status(200).json({ message: 'Todo updated successfully' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});