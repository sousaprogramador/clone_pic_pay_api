import express from 'express';

const app = express();

app.get('/',(request,response)=>{
  return response.json({message:'Api Online'})
})

app.listen(3333);