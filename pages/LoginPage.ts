import { Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    username = () => this.page.locator('#username');
    password = () => this.page.locator('#password');
    loginButton = () => this.page.locator('#login');

    async login(user: string, pass: string) {

        await this.username().fill(user);
        await this.password().fill(pass);

        await this.loginButton().click();
    }
}