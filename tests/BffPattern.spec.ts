import {expect, test} from "playwright/test";

test("should not expose bearer token to the frontend using BFF pattern", async ({ page }) => {
  await page.goto("https://your-app.com/login");
  // Insert login steps here (e.g., page.fill(), page.click(), etc.)

  // After successful login, navigate to a protected route
  await page.goto("https://your-app.com/protected");

  // Verify that the bearer token is not accessible from the frontend
  const accessToken = await page.evaluate(() => window.localStorage.getItem("access_token"));
  expect(accessToken).toBeNull();

  // Optionally, check if the API can be called without exposing the token to the client
  const response = await page.request.get("https://your-api.com/protected-data");
  expect(response.status()).toBe(200);
});
