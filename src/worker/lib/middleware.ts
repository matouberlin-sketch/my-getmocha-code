import { MiddlewareHandler } from "hono";

export const requestContextMiddleware: MiddlewareHandler = async (c, next) => {
  const requestId = crypto.randomUUID();
  c.var.requestId = requestId;
  const start = Date.now();

  await next();

  const durationMs = Date.now() - start;
  c.res.headers.set("x-request-id", requestId);
  c.res.headers.set("x-response-time", `${durationMs}`);
};
