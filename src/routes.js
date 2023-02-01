import { HTTP_METHODS } from "./constants/methods.js";
import TaskController from "./controllers/task-controller.js";

import { buildRoutePath } from "./utils/build-route-path.js";
export const routes = [
  {
    method: HTTP_METHODS.GET,
    path: buildRoutePath("/tasks"),
    handler: (req, res) => TaskController.list(req, res),
  },
  {
    method: HTTP_METHODS.POST,
    path: buildRoutePath("/tasks"),
    handler: (req, res) => TaskController.create(req, res),
  },
  {
    method: HTTP_METHODS.DELETE,
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => TaskController.delete(req, res),
  },
  {
    method: HTTP_METHODS.PUT,
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => TaskController.update(req, res),
  },
  {
    method: HTTP_METHODS.PATCH,
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (req, res) => TaskController.complete(req, res),
  },
];
