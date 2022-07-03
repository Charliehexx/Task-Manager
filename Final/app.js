const express=require('express')
const connectDB=require('./db/connect');
require('dotenv').config();
const app =express()
const tasks=require('./routes/tasks')
app.use(express.static('./public'))
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send("task manager app")

})
app.use('/api/v1/tasks',tasks)
const port=process.env.PORT||3000;
 
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();