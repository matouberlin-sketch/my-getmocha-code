import { Hono } from "hono";
import { cors } from "hono/cors";

import { createApiRouter } from "./api";
import { requestContextMiddleware } from "./lib/middleware";
import { handleError } from "./lib/response";
import { type EnvironmentBindings } from "./types";

const app = new Hono<{ Bindings: EnvironmentBindings }>();

app.use("*", cors());
app.use("*", requestContextMiddleware);

app.route("/api", createApiRouter());

app.get("/", (c) => c.text("KitchenFlow worker online"));

app.notFound((c) =>
  c.json(
    {
      error: {
        message: "Route not found",
      },
    },
    404,
  ),
);

app.onError((err, c) => handleError(c, err));

export default app;
