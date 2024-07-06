import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin: ["https://rupee-master-s.vercel.app/"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

// MongoDB connection setup
const MONGODB_URL: string =
    "mongodb+srv://sigmatandon141:dtu123456@rupeemaster.tyhtxwz.mongodb.net/?retryWrites=true&w=majority&appName=rupeemaster";

mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));

// Routes setup
app.use("/financial-records", financialRecordRouter);

// Start server
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
