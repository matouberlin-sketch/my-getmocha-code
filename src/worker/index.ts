import { Hono } from "hono";
import { requestLogger } from "./middleware/requestLogger";

export interface EnvBindings {
  DB: D1Database;
}

const app = new Hono<{ Bindings: EnvBindings }>();

app.use("*", requestLogger());

app.get("/api/health", (c) => c.json({ status: "ok" }));

export default app;
