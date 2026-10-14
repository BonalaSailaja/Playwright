class NaukriLoginPage {
    constructor(page) {
        this.page = page;

        // Header "Login" button that opens the login form
        this.headerLoginButton = page.getByRole('link', { name: 'Login', exact: true })
            .or(page.locator('#login_Layer'));

        // Login form fields
        this.emailField = page.getByPlaceholder('Enter your active Email ID / Username')
            .or(page.locator('#usernameField'));
        this.passwordField = page.getByPlaceholder('Enter your password')
            .or(page.locator('#passwordField'));

        // Submit button inside the login form
        this.submitButton = page.getByRole('button', { name: 'Login', exact: true });

        // An element that only appears once logged in (profile / dashboard area)
        this.loggedInIndicator = page.locator('.nI-gNb-drawer__bars, .view-profile-wrapper, .nI-gNb-menuItems');
    }

    async goTo() {
        await this.page.goto('https://www.naukri.com/mnjuser/homepage?utm_source=google&utm_medium=cpc&utm_campaign=Brand_Core_Exact', {
            waitUntil: 'domcontentloaded',
        });
    }

    async openLoginForm() {
        // If we were redirected to the login page, the form is already visible.
        if (await this.emailField.isVisible().catch(() => false)) {
            return;
        }
        await this.headerLoginButton.first().click();
        await this.emailField.first().waitFor({ state: 'visible' });
    }

    async login(email, password) {
        await this.openLoginForm();
        await this.emailField.first().fill(email);
        await this.passwordField.first().fill(password);
        await this.submitButton.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async isLoggedIn() {
        return await this.loggedInIndicator.first().isVisible().catch(() => false);
    }
}

module.exports = { NaukriLoginPage };
