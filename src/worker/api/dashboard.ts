import { Hono } from "hono";

export const dashboardRouter = new Hono();

function notImplementedMessage(route: string) {
  return {
    error: {
      message: `${route} not implemented yet`,
    },
  } as const;
}

dashboardRouter.get("/summary", (c) => {
  return c.json(notImplementedMessage("GET /api/dashboard/summary"), 501);
});
