import { Note } from "../models/note.models.js";

export const createNote = async (req , res) => {
    try {
        const {tittle , content } = req.body;
        if(!tittle || !content){
            return res.status(400).json({message:"tittle and content are required"})
        }
        const newNote = new Note({tittle , content})
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
}

export const getNotes = async(req , res) => {
    try {
        const notes = await Note.find().sort({createdAt:-1})
        return res.status(201).json(notes)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const updateNote = async(req , res) => {
    try {
        const {tittle , content} = req.body
        const updateNote = await Note.findByIdAndUpdate(req.params.id , {tittle , content} , {new:true})
        if(!updateNote){
            return res.status(404).json({message:"message not update"})
        }
        return res.status(201).json(updateNote)       
    } catch (error) {
                return res.status(500).json({message:error.message})

    }
}