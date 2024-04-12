import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  /*
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses
      .filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });

  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses
      .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.get("/api/courses/", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
*/
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  app.post("/api/courses", createCourse);

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };
  app.delete("/api/courses/:id", deleteCourse);

  const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const status = await dao.updateCourse(courseId, req.body);
    const currentUser = await dao.findCourseById(courseId);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };
  app.put("/api/courses/:id", updateCourse);

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    res.json(course);
  };
  app.get("/api/courses/:id", findCourseById);
  
  const findAllCourses = async (req, res) => {

    const courses = await dao.findAllCourses();
    res.json(courses);
  }
  app.get("/api/courses", findAllCourses);






}
