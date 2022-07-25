require('dotenv').config();
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'App running' });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});