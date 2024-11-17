const express = require('express');
const app = express();

const port=process.env.PORT || 3001;


app.use(express.json());


app.get('/api/v1/health',(req,res)=>{
    res.send('<h1>Hello world !!! i am healthy</h1>')
})





app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on ${port}`);
  });