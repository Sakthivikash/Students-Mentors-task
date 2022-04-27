import { database } from "./index.js";
import { ObjectId } from "mongodb";

export async function createStudent(data) {
  return await database
    .db("Day43")
    .collection("students")
    .insertOne(data);
}
export async function createMentor(data) {
  return await database
    .db("Day43")
    .collection("mentors")
    .insertOne(data);
}

export async function getAllStudents() {
  return await database
    .db("Day43")
    .collection("students")
    .find({}).toArray();
}
export async function getAllMentors() {
  return await database
    .db("Day43")
    .collection("mentors")
    .find({}).toArray();
}
  export async function updateStudentById(id, updateData) {
    return await database
      .db("Day43")
      .collection("students")
      .updateOne({  _id: ObjectId(id) }, { $set: updateData });
  }
  
  export async function updateMentorById(id, updateData) {
    return await client
      .db("Day43")
      .collection("mentors")
      .updateOne({  _id: ObjectId(id) }, { $set: updateData });
  }
  export async function getStudentsByMentor(id) {
    return await database
      .db("Day4")
      .collection("students")
      .findOne({  _id: {$eq: mentor} });
  }
