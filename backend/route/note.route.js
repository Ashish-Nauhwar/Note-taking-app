import express from "express"
import { createNote } from "../controllers/note.controller.js"

const router = express.Router()

router.post("/create-note" , createNote)


export default router