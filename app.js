const express = require('express')
require('dotenv').config()


const app = express()

app.use(express.json())



var list = [
    {
        'name':"Aman",
        'age':'19',
        'id':1,
    },
    {
        'name':"Bajrang",
        'age':'23',
        'id':2,
    },
    {
        'name':"Pankaj",
        'age':'20',
        'id':3,
    },
    {
        'name':"Kanoje",
        'age':'21',
        'id':4,
    },
];


app.get('/api/v1/home',(req,res)=>{

    res.status(200).json({
        'msg':"Welcome to Home",
        'data':list
    });
})

app.post('/api/v1/login',(req,res)=>{

    const id  = req.body.id;

    if(!id){
        return res.status(401).json({msg:'Please Provide a id'});
    }

        let user;

    list.forEach(element => {
        if(element.id === id){
            user = element;
        }
    });


    if(!user){
        return res.status(404).json({msg:'not found'});
    }

    res.status(200).json({
        'msg':"Welcome to Home",
        user
    });
})





const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})