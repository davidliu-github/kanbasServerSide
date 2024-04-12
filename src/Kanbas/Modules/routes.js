import { get } from "mongoose";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
    /*
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.modules.push(newModule);
        res.send(newModule);
    });
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules
            .filter((m) => m.course === cid);
        res.send(modules);
    });

    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
          (m) => m._id === mid);
        db.modules[moduleIndex] = {
          ...db.modules[moduleIndex],
          ...req.body
        };
        res.sendStatus(204);
      });
    */

    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    }

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    }

    const findModulesForCourse = async (req, res) => {    
        const { cid } = req.params;
        const modules = await dao.findModulesForCourse(cid);
        console.log("course id: " + cid);
        console.log("backend modules: " + modules);
        res.json(modules);
    }

    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        const currentModule = await dao.findModuleById(moduleId);
        req.session["currentModule"] = currentModule;
        res.json(status);
    }

    app.post("/api/courses/:cid/modules", createModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.get("/api/courses/:cid/modules", findModulesForCourse);
    app.put("/api/modules/:mid", updateModule);
}
export default ModuleRoutes;