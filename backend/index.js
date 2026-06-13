import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import noteRoute from "./routes/note.route.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

//database connection code
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("✅ Database connected successfully")
} catch (error) {
    console.log("Error while connecting mongodb :" , error)
   
}
app.use(express.json())
app.use("/api/v1/noteapp" , noteRoute)

app.listen(port , () => {
    console.log(`Server is running on port : ${port}`)
})