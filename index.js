import express from 'express';
import { MongoClient } from "mongodb";
import { mentorsRouter } from './Routes/mentors.js';
import { studentsRouter } from './Routes/students.js';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();
const port = process.env.PORT;

app.use(express.json());

//Connect to a mongodb database
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected ✌️😊");
    return client;
}
export const database = await createConnection();

//current date & time  
var date_ob = new Date();
var dateTime = `${date_ob.getFullYear()}-${("0" + (date_ob.getMonth() + 1)).slice(-2)}-${("0" + date_ob.getDate()).slice(-2)} T${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}`;
console.log(dateTime);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Webdeveloper task (Mentor and Student Assigning with Database)</h1>')
})

app.use('/students', studentsRouter);
app.use('/mentors', mentorsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});