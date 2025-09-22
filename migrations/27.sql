-- Migration 27: Add ordering to planner slots
ALTER TABLE planner_slots ADD COLUMN position INTEGER DEFAULT 0 NOT NULL;

CREATE INDEX IF NOT EXISTS idx_planner_slots_plan_day_position
  ON planner_slots (plan_id, day_index, position);

WITH ranked AS (
  SELECT
    id,
    ROW_NUMBER() OVER (
      PARTITION BY plan_id, day_index
      ORDER BY rowid
    ) - 1 AS new_position
  FROM planner_slots
)
UPDATE planner_slots
SET position = (
  SELECT new_position FROM ranked WHERE ranked.id = planner_slots.id
);
