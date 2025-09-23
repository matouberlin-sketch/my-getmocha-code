import type { MiddlewareHandler } from "hono";

export function checkPlanNotLocked(): MiddlewareHandler {
  return async (c, next) => {
    const planStatus = c.get<string | undefined>("planStatus");
    if (planStatus === "locked") {
      return c.json({ error: "Plan is locked" }, 409);
    }
    await next();
  };
}
