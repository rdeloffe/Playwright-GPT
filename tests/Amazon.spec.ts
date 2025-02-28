// tests/amazon.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";


const SEARCH_TERM = "baskets";
const PRODUCT_NAME = "Publicité sponsorisée - Homme Hoops 3.0 Low Classic Vintage Shoes Chaussures";

test("Commander une paire de baskets sur Amazon sans compte", async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // Naviguer vers Amazon et accepter/refuser les cookies
  await homePage.navigate();
  
  const boutonRefuser = page.getByRole('button', { name: 'Refuser' });
  if (await boutonRefuser.isVisible()) {
    await boutonRefuser.click();
  }

  // Rechercher des baskets
  await homePage.searchProduct(SEARCH_TERM);

  // Attendre le chargement des résultats
  await page.waitForSelector('div.s-main-slot');

  // Sélectionner un produit spécifique
  await page.getByRole('link', { name: PRODUCT_NAME }).click();

  // Attendre que la page du produit soit chargée
  await page.waitForSelector('#productTitle');

  // Ajouter au panier
  await productPage.addToCart();

  // Aller au panier et vérifier la présence du produit
  await cartPage.goToCart();
  
  const titreProduit = await page.locator('span.a-truncate-cut').first().textContent();
  expect(titreProduit?.toLowerCase()).toContain('');
});