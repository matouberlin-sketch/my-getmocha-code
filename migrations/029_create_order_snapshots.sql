CREATE TABLE IF NOT EXISTS order_snapshots (
  id TEXT PRIMARY KEY,
  plan_id TEXT NOT NULL UNIQUE,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES planner_plans(id)
);
