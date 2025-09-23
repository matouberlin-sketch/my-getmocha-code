ALTER TABLE items ADD COLUMN allergen_codes TEXT;
ALTER TABLE items ADD COLUMN kcal_per_100 REAL;
ALTER TABLE items ADD COLUMN protein_g_per_100 REAL;
ALTER TABLE items ADD COLUMN carbs_g_per_100 REAL;
ALTER TABLE items ADD COLUMN fat_g_per_100 REAL;

CREATE TABLE IF NOT EXISTS lots (
  id TEXT PRIMARY KEY,
  item_id TEXT NOT NULL,
  lot_code TEXT NOT NULL,
  received_at TEXT NOT NULL,
  qty REAL NOT NULL,
  uom TEXT NOT NULL,
  supplier_id TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (item_id) REFERENCES items(id),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE IF NOT EXISTS batch_consumption (
  id TEXT PRIMARY KEY,
  plan_id TEXT NOT NULL,
  day_index INTEGER NOT NULL,
  recipe_id TEXT NOT NULL,
  item_id TEXT NOT NULL,
  lot_id TEXT,
  qty_used REAL NOT NULL,
  uom TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES planner_plans(id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (item_id) REFERENCES items(id),
  FOREIGN KEY (lot_id) REFERENCES lots(id)
);
