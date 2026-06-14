import express from "express"
import { createNote, deleteNote, getNotes, updateNote } from "../controllers/note.controller.js"

const router = express.Router()

router.post("/create-notes" , createNote)
router.get("/get-notes" , getNotes)
router.put("/update-notes/:id" , updateNote)
router.delete("/delete-notes/:id" , deleteNote)


export default router