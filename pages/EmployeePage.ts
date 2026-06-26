import { Page } from '@playwright/test';

export class EmployeePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    employeeName = () => this.page.locator('#employeeName');

    city = () => this.page.locator('#city');

    saveButton = () => this.page.locator('#save');

    async addEmployee(name: string, city: string) {

        await this.employeeName().fill(name);

        await this.city().fill(city);

        await this.saveButton().click();
    }
}