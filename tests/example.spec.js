// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";

test("app shows a title, fact of cats and a image", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    // Verificar si se muestra el título
    const title = page.locator("h1");
    await expect(title).toHaveText("Cat Facts");

    // Verificar si hay alguna frase
    const fact = await page.locator("p");
    
    await expect(fact).toHaveText(/\w+/);
});
