import { type Context } from "hono";

export type LogFields = Record<string, unknown>;

export function logInfo(c: Context, message: string, fields: LogFields = {}): void {
  const payload = buildPayload(c, "info", message, fields);
  console.log(JSON.stringify(payload));
}

export function logError(c: Context, message: string, fields: LogFields = {}): void {
  const payload = buildPayload(c, "error", message, fields);
  console.error(JSON.stringify(payload));
}

function buildPayload(
  c: Context,
  level: "info" | "error",
  message: string,
  fields: LogFields,
): LogFields {
  return {
    level,
    message,
    requestId: c.var.requestId,
    path: c.req.path,
    method: c.req.method,
    ...fields,
  } satisfies LogFields;
}
