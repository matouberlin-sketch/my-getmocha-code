import { Hono } from "hono";

import { dashboardRouter } from "./dashboard";
import { healthRouter } from "./health";
import { importsRouter } from "./imports";
import { itemsRouter } from "./items";
import { lotsRouter } from "./lots";
import { plannerRouter } from "./planner";
import { recipesRouter } from "./recipes";

export function createApiRouter(): Hono {
  const api = new Hono();

  api.route("/", healthRouter);
  api.route("/planner", plannerRouter);
  api.route("/items", itemsRouter);
  api.route("/recipes", recipesRouter);
  api.route("/import", importsRouter);
  api.route("/", lotsRouter);
  api.route("/dashboard", dashboardRouter);

  return api;
}
