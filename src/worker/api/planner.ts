import { Hono } from "hono";

import { logInfo } from "../lib/logger";

export const plannerRouter = new Hono();

function notImplementedMessage(route: string) {
  return {
    error: {
      message: `${route} not implemented yet`,
    },
  } as const;
}

plannerRouter.get("/plan/:id", (c) => {
  return c.json(notImplementedMessage("GET /api/planner/plan/:id"), 501);
});

plannerRouter.post("/slots", (c) => {
  logInfo(c, "create planner slot - pending implementation");
  return c.json(notImplementedMessage("POST /api/planner/slots"), 501);
});

plannerRouter.patch("/slots/:id", (c) => {
  logInfo(c, "update planner slot - pending implementation");
  return c.json(notImplementedMessage("PATCH /api/planner/slots/:id"), 501);
});

plannerRouter.post("/slots/reorder", (c) => {
  logInfo(c, "reorder planner slots - pending implementation");
  return c.json(notImplementedMessage("POST /api/planner/slots/reorder"), 501);
});

plannerRouter.delete("/slots/:id", (c) => {
  logInfo(c, "delete planner slot - pending implementation");
  return c.json(notImplementedMessage("DELETE /api/planner/slots/:id"), 501);
});

plannerRouter.post("/slot-recipes", (c) => {
  logInfo(c, "add slot recipe - pending implementation");
  return c.json(notImplementedMessage("POST /api/planner/slot-recipes"), 501);
});

plannerRouter.patch("/slot-recipes/:id", (c) => {
  logInfo(c, "update slot recipe - pending implementation");
  return c.json(notImplementedMessage("PATCH /api/planner/slot-recipes/:id"), 501);
});

plannerRouter.delete("/slot-recipes/:id", (c) => {
  logInfo(c, "remove slot recipe - pending implementation");
  return c.json(notImplementedMessage("DELETE /api/planner/slot-recipes/:id"), 501);
});

plannerRouter.get("/plan/:id/components", (c) => {
  return c.json(notImplementedMessage("GET /api/planner/plan/:id/components"), 501);
});

plannerRouter.get("/plan/:id/tasks", (c) => {
  return c.json(notImplementedMessage("GET /api/planner/plan/:id/tasks"), 501);
});

plannerRouter.post("/plan/:id/lock", (c) => {
  return c.json(notImplementedMessage("POST /api/planner/plan/:id/lock"), 501);
});

plannerRouter.get("/plan/:id/order-list", (c) => {
  return c.json(notImplementedMessage("GET /api/planner/plan/:id/order-list"), 501);
});

plannerRouter.get("/plan/:id/order-list.csv", (c) => {
  return c.json(notImplementedMessage("GET /api/planner/plan/:id/order-list.csv"), 501);
});
