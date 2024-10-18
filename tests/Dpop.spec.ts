import {expect, test} from "playwright/test";

test("should validate DPoP access token on the server", async ({ page }) => {
  await page.goto("https://your-app.com/login");
  // Insert login steps here (e.g., page.fill(), page.click(), etc.)

  // Call the API that requires a DPoP protected resource
  const response = await page.request.get("https://your-api.com/protected-data", {
    headers: {
      // Replace with the actual DPoP token and required headers
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "DPoP": "YOUR_DPOP_TOKEN",
    },
  });

  // Expect a successful response
  expect(response.status()).toBe(200);

  // Verify that the response contains the expected data
  const data = await response.json();
  expect(data).toHaveProperty("protectedData");
});
