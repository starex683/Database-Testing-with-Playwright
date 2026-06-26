import { test, expect } from '../fixtures/fixture';

test.beforeEach(async ({ page }) => {

    await page.goto('https://openmrs.org/demo/');

});

test('Verify employee saved in Database', async ({

    loginPage,

    employeePage,

    dashboardPage,

    database

}) => {

    await loginPage.login(

        'admin',

        'password'
    );

    await dashboardPage.verifyDashboardLoaded();

    await employeePage.addEmployee(

        'John',

        'London'
    );

    const employee: any = await (database as any).execute(

        'SELECT * FROM employees WHERE name=?',

        ['John']

    );

    expect(employee.length).toBe(1);

    expect(employee[0].name).toBe('John');

    expect(employee[0].city).toBe('London');

});