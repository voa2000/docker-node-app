const express = require ? ('express');

const app = express();

app.get('/', (required, response) => {
    response.send('Hi there from Viv');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});