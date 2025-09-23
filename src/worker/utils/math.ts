export function toNetQuantity(grossQty: number, trimLossPct = 0, cookYieldPct = 100): number {
  const trimFactor = 1 - trimLossPct / 100;
  const cookFactor = cookYieldPct / 100 || 1;
  return grossQty * trimFactor * cookFactor;
}

export function toScaleFactor(plannedPortions: number, recipeYield: number): number {
  if (recipeYield === 0) {
    return 0;
  }
  return plannedPortions / recipeYield;
}
