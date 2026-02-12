const express = require('express');

const app = express();
app.use(express.json());

let todos = [];
let nextId = 1;

// 전체 목록 조회
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 단건 조회
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// 생성
app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const todo = { id: nextId++, title, completed: completed || false };
  todos.push(todo);
  res.status(201).json(todo);
});

// 수정
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// 삭제
app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  const deleted = todos.splice(index, 1)[0];
  res.json(deleted);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
