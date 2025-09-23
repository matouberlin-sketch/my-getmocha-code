import { describe, expect, it } from "vitest";
import { toNetQuantity, toScaleFactor } from "../utils/math";

describe("math utils", () => {
  it("computes net quantity", () => {
    expect(toNetQuantity(10, 10, 100)).toBeCloseTo(9);
    expect(toNetQuantity(5, 0, 80)).toBeCloseTo(4);
  });

  it("computes scale factor", () => {
    expect(toScaleFactor(20, 10)).toBe(2);
    expect(toScaleFactor(0, 10)).toBe(0);
    expect(toScaleFactor(10, 0)).toBe(0);
  });
});
