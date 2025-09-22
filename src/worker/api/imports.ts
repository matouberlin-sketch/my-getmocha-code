import { Hono } from "hono";

export const importsRouter = new Hono();

function notImplementedMessage(route: string) {
  return {
    error: {
      message: `${route} not implemented yet`,
    },
  } as const;
}

importsRouter.get("/recipes/template.csv", (c) => {
  return c.json(notImplementedMessage("GET /api/import/recipes/template.csv"), 501);
});

importsRouter.get("/recipe-components/template.csv", (c) => {
  return c.json(
    notImplementedMessage("GET /api/import/recipe-components/template.csv"),
    501,
  );
});

importsRouter.post("/recipes/import-json", (c) => {
  return c.json(notImplementedMessage("POST /api/import/recipes/import-json"), 501);
});

importsRouter.post("/recipes/import-csv", (c) => {
  return c.json(notImplementedMessage("POST /api/import/recipes/import-csv"), 501);
});

importsRouter.post("/recipes/import-ai", (c) => {
  return c.json(notImplementedMessage("POST /api/import/recipes/import-ai"), 501);
});

importsRouter.post("/recipes/commit", (c) => {
  return c.json(notImplementedMessage("POST /api/import/recipes/commit"), 501);
});

importsRouter.get("/incomplete-entities", (c) => {
  return c.json(notImplementedMessage("GET /api/import/incomplete-entities"), 501);
});

importsRouter.patch("/incomplete-entities/:id/resolve", (c) => {
  return c.json(
    notImplementedMessage("PATCH /api/import/incomplete-entities/:id/resolve"),
    501,
  );
});
