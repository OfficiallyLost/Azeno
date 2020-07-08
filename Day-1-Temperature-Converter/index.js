const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index', { message: 'default message here', messageHeader: 'default header here' });
});

app.post('/weather', (req, res) => {
	res.render('index', { message: 'the maths eqation result here', messageHeader: 'Result' });
});

app.listen(1000, () => console.log('listening on port 1000'));
