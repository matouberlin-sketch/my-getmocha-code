-- Migration 29: immutable order snapshots for locked plans
CREATE TABLE IF NOT EXISTS order_snapshots (
  id TEXT PRIMARY KEY,
  plan_id TEXT NOT NULL UNIQUE,
  payload_json TEXT NOT NULL,
  costing_strategy TEXT NOT NULL DEFAULT 'preferred',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  FOREIGN KEY (plan_id) REFERENCES planner_plans(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_order_snapshots_plan
  ON order_snapshots(plan_id);
