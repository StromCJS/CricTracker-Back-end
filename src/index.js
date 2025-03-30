import express from "express"
import dotenv from "dotenv"
import userAuthRouter from "./routes/authRoutes.js"
import adminAuthRouter from "./routes/admin-auth.router.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./config/db.js"

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
 origin: process.env.FRONTEND_URL, // Allow only your frontend
    credentials: true, // Allow cookies (important for JWT)
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
     }));
app.use("/api/auth", userAuthRouter);
app.use("/api/admin", adminAuthRouter)


app.get("/health", (req, res) => {
    return res.status(200).json({ message: "Health good" })

})

const PORT = process.env.PORT || 5125;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
