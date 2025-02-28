import { Page } from "@playwright/test";

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.waitForSelector("#nav-cart", { state: "visible" });
    await this.page.click("#nav-cart");
  }

  async verifyCartPage() {
    await this.page.waitForURL(/.*cart.*/);
  }
}