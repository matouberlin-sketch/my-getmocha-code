import { Hono } from "hono";

export const recipesRouter = new Hono();

function notImplementedMessage(route: string) {
  return {
    error: {
      message: `${route} not implemented yet`,
    },
  } as const;
}

recipesRouter.get("/:id/suppliers", (c) => {
  return c.json(notImplementedMessage("GET /api/recipes/:id/suppliers"), 501);
});
