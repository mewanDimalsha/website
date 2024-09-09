const Joi = require('joi');
const express = require("express");
const app = express();


app.use(express.json())
const courses = [
    {id:1, name:'C'},
    {id:2, name:'Java'},
    {id:3, name:'Python'},
]

app.get('/',(req,res)=>{
    res.send("Hello world !!!")
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .required()
    });

    const { error } = schema.validate(req.body);  // Destructure error from the result

    if (error) {
        // 400 Bad Request
        return res.status(400).send(error);  // Send the specific error message
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("requested object was not found...");

    
})


app.get('/api/courses/:id',(req,res)=>{
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("requested object was not found...");
    res.send(course);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});