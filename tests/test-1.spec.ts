import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.amazon.fr/');
  await page.goto('https://www.amazon.fr/');
  await page.getByRole('textbox', { name: 'Saisissez les caractères' }).click();
  await page.getByRole('textbox', { name: 'Saisissez les caractères' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Saisissez les caractères' }).fill('NHUABT');
  await page.getByRole('button', { name: 'Continuer les achats' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('v');
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('BASKET');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'N°1 des ventesdans Baskets mode homme+ 15 autres couleurs/motifsSponsorisé' }).getByRole('link').first().click();
  await page.getByRole('button', { name: 'Accepter' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier', exact: true }).click();
});