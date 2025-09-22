import { Hono } from "hono";

export const lotsRouter = new Hono();

function notImplementedMessage(route: string) {
  return {
    error: {
      message: `${route} not implemented yet`,
    },
  } as const;
}

lotsRouter.get("/lots", (c) => {
  return c.json(notImplementedMessage("GET /api/lots"), 501);
});

lotsRouter.post("/lots", (c) => {
  return c.json(notImplementedMessage("POST /api/lots"), 501);
});

lotsRouter.post("/batch-consumption", (c) => {
  return c.json(notImplementedMessage("POST /api/batch-consumption"), 501);
});
