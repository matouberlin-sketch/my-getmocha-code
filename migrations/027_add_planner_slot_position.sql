ALTER TABLE planner_slots ADD COLUMN position INTEGER DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_planner_slots_plan_day_position
  ON planner_slots (plan_id, day_index, position);

WITH ranked AS (
  SELECT
    id,
    ROW_NUMBER() OVER (PARTITION BY plan_id, day_index ORDER BY id) - 1 AS pos
  FROM planner_slots
)
UPDATE planner_slots
SET position = (
  SELECT pos FROM ranked WHERE ranked.id = planner_slots.id
)
WHERE EXISTS (
  SELECT 1 FROM ranked WHERE ranked.id = planner_slots.id
);
