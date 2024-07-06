// dtu123456
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const MONGODB_URL: string =
  "mongodb+srv://sigmatandon141:dtu123456@rupeemaster.tyhtxwz.mongodb.net/?retryWrites=true&w=majority&appName=rupeemaster";

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("MongoDB connected Lessgo!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});