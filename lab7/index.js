const express =require('express');
const app = express();
const port = 3000;
app.get('/Sanket_Prabhu', (req, res) => {res.send('Hello World, from Sanket Prabhu');});
app.listen(port, () => console.log('Hello World app listening on port %d',port));