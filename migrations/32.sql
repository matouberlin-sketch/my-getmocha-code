-- Migration 32: import audit tables and optional recipe parent linkage
ALTER TABLE recipes ADD COLUMN parent_id TEXT REFERENCES recipes(id);

CREATE TABLE IF NOT EXISTS incomplete_entities (
  id TEXT PRIMARY KEY,
  entity_type TEXT NOT NULL CHECK (entity_type IN ('item', 'recipe')),
  entity_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  resolved_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_incomplete_entities_entity
  ON incomplete_entities(entity_type, entity_id);

CREATE TABLE IF NOT EXISTS import_jobs (
  id TEXT PRIMARY KEY,
  requested_by TEXT,
  payload_json TEXT NOT NULL,
  decision_json TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  completed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_import_jobs_status
  ON import_jobs(status);
