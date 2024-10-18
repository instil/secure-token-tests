import {expect, test} from "playwright/test";

test("should not store access token in localStorage or sessionStorage", async ({ page }) => {
  await page.goto("https://your-app.com/login");
  // Insert login steps here (e.g., page.fill(), page.click(), etc.)

  await page.goto("https://your-app.com");

  const localStorageToken = await page.evaluate(() => localStorage.getItem("access_token"));
  const sessionStorageToken = await page.evaluate(() => sessionStorage.getItem("access_token"));

  expect(localStorageToken).toBeNull();
  expect(sessionStorageToken).toBeNull();
});

test("should set secure cookies with proper attributes", async ({ page, context }) => {
  await page.goto("https://your-app.com/login");
  // Insert login steps here (e.g., page.fill(), page.click(), etc.)

  const cookies = await context.cookies();
  const accessTokenCookie = cookies.find(cookie => cookie.name === "access_token");

  expect(accessTokenCookie).not.toBeNull();
  expect(accessTokenCookie.httpOnly).toBe(true);
  expect(accessTokenCookie.secure).toBe(true);
  expect(accessTokenCookie.sameSite).toBe("Strict");
});
