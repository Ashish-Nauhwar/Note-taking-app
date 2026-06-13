import mongoose from "mongoose"

const noteSchema = mongoose.Schema({

    tittle:{
        type: String,
        required: true,
        trim: true
    },
    content:{
        type: String,
        required: true
    }
} , {timestamps: true})


export const Note = mongoose.model("Note" , noteSchema)