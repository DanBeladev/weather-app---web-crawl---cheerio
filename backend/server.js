import app from './app';

const port = process.env.PORT || '3001';

app.listen(port, () => {
    console.log(`Server is up and listening on port: ${port}`);
});

console.log(`Listening on port ${port}`);
