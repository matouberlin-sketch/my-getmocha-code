-- Migration 28: add prep and cook time columns to recipe components
ALTER TABLE recipe_components ADD COLUMN prep_time_min INTEGER DEFAULT 0 NOT NULL;
ALTER TABLE recipe_components ADD COLUMN cook_time_min INTEGER DEFAULT 0 NOT NULL;
