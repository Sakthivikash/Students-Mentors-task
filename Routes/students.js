import {updateStudentById, createStudent, getAllStudents} from '../helper.js';
import express from 'express';

const router = express.Router();
//Get students list
router.get('/', async (req, res) => {
  const students = await getAllStudents();
  res.status(200).send(students);
});

//Create student 
router.post('/create-student', async (req, res) => {
  const data = req.body;
  const result = await createStudent(data);
  res.send(result);
});

router.put("/assign-mentor/:id", async function (request, response) {
    console.log(request.params);
    const { id } = request.params;
    const updateData = request.body;

    const result = await updateStudentById(id, updateData);
    response.send(result);
});



export const studentsRouter = router;