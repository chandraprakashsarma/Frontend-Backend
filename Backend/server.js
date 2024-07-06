import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.get('/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'First Joke', content: 'This is a joke' },
    { id: 2, title: 'Secound Joke', content: 'This is 2nd joke' },
    { id: 3, title: 'Third Joke', content: 'This is 3rd joke' },
    { id: 4, title: 'Fourth Joke', content: 'This is 4rd joke' },
    { id: 5, title: 'Fiveth Joke', content: 'This is 5rd joke' },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
