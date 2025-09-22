import { type Context } from "hono";

import { KitchenFlowError } from "./errors";

export function jsonResponse<T>(c: Context, data: T, status = 200) {
  return c.json({ data }, status);
}

export function handleError(c: Context, error: unknown) {
  if (error instanceof KitchenFlowError) {
    return c.json(
      {
        error: {
          message: error.message,
          details: error.details ?? null,
        },
      },
      error.status,
    );
  }

  console.error("Unhandled worker error", error);
  return c.json(
    {
      error: {
        message: "Internal server error",
      },
    },
    500,
  );
}
