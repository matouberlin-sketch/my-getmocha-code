export class KitchenFlowError extends Error {
  constructor(
    message: string,
    readonly status: number = 500,
    readonly details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "KitchenFlowError";
  }
}

export class ValidationError extends KitchenFlowError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 400, details);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends KitchenFlowError {
  constructor(message = "Resource not found", details?: Record<string, unknown>) {
    super(message, 404, details);
    this.name = "NotFoundError";
  }
}

export class ConflictError extends KitchenFlowError {
  constructor(message = "Conflict", details?: Record<string, unknown>) {
    super(message, 409, details);
    this.name = "ConflictError";
  }
}

export class UnprocessableEntityError extends KitchenFlowError {
  constructor(message = "Unprocessable entity", details?: Record<string, unknown>) {
    super(message, 422, details);
    this.name = "UnprocessableEntityError";
  }
}
