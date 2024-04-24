const express = require('express');
// error khower por cors er kaj ta korte hobe...
const cors = require('cors');
const app=express();
const port=process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users=[
    {id:1, name:'Sabana', email:'sabana@gmai.com'},
    {id:2, name:'Sabnoor', email:'sabnoor@gmai.com'},
    {id:3, name:'Sabila', email:'sabila@gmai.com'},
]

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/users', (req, res)=>{
    res.send(users);
})

app.post('/users', (req, res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`Example app listening on port: ${port}`);
})