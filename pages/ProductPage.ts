import { Page } from "@playwright/test";

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectFirstProduct() {
    await this.page.locator(".s-main-slot .s-result-item").nth(0).click();
  }

  async addToCart() {
    const addToCartButton = this.page.locator("#add-to-cart-button");
    await addToCartButton.waitFor({ state: "visible" });
    await addToCartButton.click();
  }
}