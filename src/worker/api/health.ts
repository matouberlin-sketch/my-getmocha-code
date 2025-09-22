import { Hono } from "hono";

import { jsonResponse } from "../lib/response";

export const healthRouter = new Hono();

healthRouter.get("/health", (c) => {
  return jsonResponse(c, {
    status: "ok",
    service: "kitchenflow-worker",
    timestamp: new Date().toISOString(),
  });
});
