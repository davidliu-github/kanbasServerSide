import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import mongoose from "mongoose";
import UserRoutes from "./src/Kanbas/Users/routes.js";
import CourseRoutes from "./src/Kanbas/Courses/routes.js";
import ModuleRoutes from "./src/Kanbas/Modules/routes.js";
import express from 'express'
import cors from "cors";
import "dotenv/config";
import session from "express-session";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}
));
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));


app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app)
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000)