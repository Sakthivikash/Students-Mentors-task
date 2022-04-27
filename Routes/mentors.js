import { getAllMentors, createMentor, updateMentorById, getStudentsByMentor } from '../helper.js';
import express from 'express';
const router = express.Router();


//Get mentors list
router.get('/', async (req, res) => {
  const mentors = await getAllMentors();
  res.status(200).send(mentors);
});

//Create mentor 
router.post('/create-mentor', async(req, res) => {
    const data= req.body;
    const result= await createMentor(data);
    res.send(result);
    });

    //Assign students for a mentor
router.put("/assign-students/:id", async function (request, response) {
        console.log(request.params);
        const { id } = request.params;
        const updateData = request.body;
    
        const result = await updateMentorById(id, updateData);
        response.send(result);
    });

    //Get students for a mentor
    router.get("/:id", async function (request, response) {
        console.log(request.params);
        const { id } = request.params;
        const mentor= await getStudentsByMentor(id);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        mentor? response.send(mentor): response.status(404).send({ message: "No such mentor found ❗" });
      });



export const mentorsRouter= router;