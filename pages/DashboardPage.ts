import { Page } from '@playwright/test';

export class DashboardPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    heading = () => this.page.locator('h1');

    async verifyDashboardLoaded() {
        await this.heading().waitFor();
    }
}