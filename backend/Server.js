import express from 'express'
const app = express()
import { Model } from './Data_Models/task.model.js'
import connectDB from './Database_Connections/db.js'
import cors from 'cors'
import config from './config/config.js'



const port = config.port

connectDB()

app.use(express.json())
app.use(cors(
  {origin: "http://localhost:5173"}
))


app.post('/', (req, res) => {
  const {Task, Time, Date}=req.body
  Model.create({
    Task:Task,
    Time:Time,
    Date:Date
  });
  console.log(Task, Time, Date);
  console.log("Saved");
  res.sendStatus(200);
});


app.get('/j', async(req, res) => {
  const data = await Model.find()
  .select('Task Time Date')
  res.send(data)
  // console.log('Reviewed 👍')
})

app.delete('/DeleteData/:id', async(req, res) => {
  const {id} = req.params
  try{
    const deletion = await Model.findByIdAndDelete(id)
    if (!deletion)res.status(200).json({message:'Task deleted successfully'});
} catch(error){
  console.error('Error deleting task:', error);
  res.status(500).send('Error deleting task');
}

console.log("Task deletion with id : ", id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})