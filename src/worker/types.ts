export type EnvironmentBindings = {
  DB: D1Database;
  KITCHENFLOW_COSTING_STRATEGY?: "preferred" | "lowest";
  KITCHENFLOW_CACHE_TTL_SECONDS?: string;
};

export type Environment = {
  Bindings: EnvironmentBindings;
};

export type AppContext = {
  Bindings: EnvironmentBindings;
};
