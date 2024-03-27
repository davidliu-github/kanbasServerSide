import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./src/Kanbas/Courses/routes.js";
import ModuleRoutes from "./src/Kanbas/Modules/routes.js";
import express from 'express'
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app)
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)