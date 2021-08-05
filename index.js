const express = require('express');
const app = express();
const port = 3000;


app.listen(port,()=>{
    console.log(`Example app listening at http://localhst:${port}`);
});

app.get('/',(req,res)=>{
    res.send('hello World');
});

app.get('/hello',(req,res)=>{
    res.send('hello');
});

