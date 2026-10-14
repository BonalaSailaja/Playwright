class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productTitles = page.locator(".card-body b");
    }

    async waitForProducts() {
        await this.page.waitForLoadState('networkidle');
        await this.productTitles.first().waitFor();
    }

    async getProductTitles() {
        return await this.productTitles.allTextContents();
    }

    async getProductCount() {
        return await this.products.count();
    }
}

module.exports = { DashboardPage };
