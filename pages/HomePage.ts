import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.amazon.fr");
  }

  async acceptCookies() {
    const acceptCookies = this.page.locator("text=Accepter les cookies");
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }
  }

  async searchProduct(product: string) {
    await this.page.fill("#twotabsearchtextbox", product);
    await this.page.press("#twotabsearchtextbox", "Enter");
  }
}