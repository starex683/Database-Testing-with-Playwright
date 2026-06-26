# Playwright TypeScript Database Testing Framework

A robust end-to-end automation framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework demonstrates UI automation integrated with **MySQL database validation**, enabling verification of backend data after UI actions.

---

# Features

* Playwright with TypeScript
* Page Object Model (POM)
* Custom Playwright Fixtures
* MySQL Database Integration
* Reusable Database Utility
* Cross-browser Testing (Chromium, Firefox, WebKit)
* Parallel Test Execution
* HTML Reporting
* Scalable Project Structure

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* MySQL
* mysql2
* Visual Studio Code

---

# Project Structure

```text
Playwright-Database-Framework
│
├── fixtures
│   └── fixture.ts
│
├── pages
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── EmployeePage.ts
│
├── tests
│   └── Employee.spec.ts
│
├── utils
│   ├── DbConnection.ts
│   └── Database.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# Framework Components

### Pages

Contains Page Object classes responsible for UI interactions.

Example:

* LoginPage
* DashboardPage
* EmployeePage

---

### Fixtures

Custom fixtures initialize reusable page objects and utility classes, reducing object creation in test files.

---

### Database Utilities

The framework uses a reusable MySQL utility to perform:

* SELECT
* INSERT
* UPDATE
* DELETE

This allows database validation immediately after UI actions.

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd Playwright-Database-Framework
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Database Configuration

Update `utils/DbConnection.ts` with your database credentials.

```typescript
host: 'localhost',
user: 'root',
password: 'password',
database: 'employee_db'
```

Alternatively, store credentials in a `.env` file and load them using the `dotenv` package.

---

# Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/Employee.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Run in debug mode

```bash
npx playwright test --debug
```

Run on Chromium only

```bash
npx playwright test --project=chromium
```

---

# Example Test Flow

1. Launch the application.
2. Log in using valid credentials.
3. Create a new employee through the UI.
4. Execute a SQL query to verify the employee record exists in the database.
5. Validate the retrieved database values using Playwright assertions.

---

# Sample Database Validation

```typescript
const employee: any = await database.execute(
    "SELECT * FROM employees WHERE name=?",
    ["John"]
);

expect(employee.length).toBe(1);
expect(employee[0].name).toBe("John");
```

---

# Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

# Best Practices

* Follow the Page Object Model.
* Keep locators inside page classes.
* Use reusable fixtures for dependency injection.
* Store SQL queries inside database utility classes.
* Avoid hardcoded test data.
* Use parameterized SQL queries.
* Keep database credentials outside source code.
* Use explicit assertions instead of fixed waits.

---

# Future Enhancements

* API Testing Integration
* Allure Reporting
* Environment Configuration (.env)
* CI/CD Pipeline Integration
* Docker Support
* Data-Driven Testing
* Jenkins / GitHub Actions Integration
* Retry Mechanism
* Logging and Screenshots
* Database Cleanup Utilities

---

# Author
Akhila
Developed using Playwright, TypeScript, and MySQL to demonstrate enterprise-level UI automation with backend database validation.
