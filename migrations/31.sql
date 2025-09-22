-- Migration 31: performance indices for planner lookups
CREATE INDEX IF NOT EXISTS idx_psr_slot ON planner_slot_recipes(slot_id);
CREATE INDEX IF NOT EXISTS idx_rc_recipe ON recipe_components(recipe_id);
