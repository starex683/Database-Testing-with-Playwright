import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { EmployeePage } from '../pages/EmployeePage';
import { DashboardPage } from '../pages/DashboardPage';
import { Database } from '../utils/Database';

type Fixtures = {

    loginPage: LoginPage;

    employeePage: EmployeePage;

    dashboardPage: DashboardPage;

    database: Database;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },

    employeePage: async ({ page }, use) => {

        await use(new EmployeePage(page));
    },

    dashboardPage: async ({ page }, use) => {

        await use(new DashboardPage(page));
    },

    database: async ({}, use) => {

        await use(new Database());
    }

});

export { expect } from '@playwright/test';