import { randomUUID } from "node:crypto";

import { Database } from "../database.js";
import { elementNotFound } from "../services/element-not-found.js";

const database = new Database();

class TaskController {
  list(req, res) {
    const search = req?.query?.search;

    let tasks;
    if (search)
      tasks = database.select("tasks", {
        titles: search,
        description: search,
      });
    else tasks = database.select("tasks");

    return res.end(JSON.stringify(tasks));
  }

  create(req, res) {
    const title = req.body?.title;
    const description = req.body?.description;

    if (!title || !description) return res.writeHead(400).end("Invalid data");

    const task = database.insert("tasks", {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return res.writeHead(201).end(JSON.stringify(task));
  }

  delete(req, res) {
    const id = req.params?.id;

    try {
      elementNotFound(database.delete("tasks", id));
    } catch {
      return res.writeHead(404).end("Task not found");
    }

    return res.end("Elements deleted successfully");
  }

  update(req, res) {
    const id = req.params?.id;

    const title = req.body?.title;
    const description = req.body?.description;

    if (!title && !description) {
      return res.writeHead(400).end("Invalid data");
    }

    try {
      let element = elementNotFound(database.findById("tasks", id));

      if (title) element.title = title;
      if (description) element.description = description;

      element.updated_at = new Date();

      database.update("tasks", id, element);
    } catch {
      return res.writeHead(404).end("Task not found");
    }

    return res.end("Elements updated successfully");
  }

  complete(req, res) {
    const id = req.params?.id;

    try {
      let element = elementNotFound(database.findById("tasks", id));

      element.completed_at = new Date();
      element.updated_at = new Date();

      database.update("tasks", id, element);
    } catch {
      return res.writeHead(404).end("Task not found");
    }

    return res.end("Elements updated successfully");
  }
}

export default new TaskController();
