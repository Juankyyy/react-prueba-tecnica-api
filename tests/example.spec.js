// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";
const PREFIX_URL_IMAGE = "https://cataas.com/cat/";

test("app shows a title, fact of cats and a image", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    // Verificar si se muestra el título
    const title = page.getByTestId("title");
    await expect(title).toHaveText("Cat Facts");

    // Verificar si hay alguna frase
    const fact = page.getByTestId("fact");

    await expect(fact).toHaveText(/\w+/);

    // Verificar si hay alguna imagen
    const image = page.getByTestId("image");
    const imageUrl = await image.getAttribute("src");

    await expect(imageUrl?.startsWith(PREFIX_URL_IMAGE)).toBeTruthy();

    // Verificar que al pulsar el botón cambia la frase
    const factText = await fact.textContent()
    console.log("1) ", factText);

    const factBtn = page.getByTestId('factButton');
    await factBtn.click();
    
    await page.waitForTimeout(1000)

    const newFact = page.getByTestId("fact");
    await expect(newFact).toHaveText(/\w+/)

    const newFactText = await newFact.textContent();
    console.log("2) ", newFactText);

    await expect(factText).not.toBe(newFactText);
});
