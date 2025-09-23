import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("app loads", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Dashboard")).toBeVisible();
  });
});
