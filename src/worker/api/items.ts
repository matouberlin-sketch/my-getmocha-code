import { Hono } from "hono";

export const itemsRouter = new Hono();

function notImplementedMessage(route: string) {
  return {
    error: {
      message: `${route} not implemented yet`,
    },
  } as const;
}

itemsRouter.get("/:itemId/where-used", (c) => {
  return c.json(notImplementedMessage("GET /api/items/:itemId/where-used"), 501);
});
