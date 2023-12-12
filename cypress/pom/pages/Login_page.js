class LoginPage {

    openUrl() {
        cy.visit('https://www.automationexercise.com/');
    }

    abrirFormularioLogin() {
        cy.get('a[href="/login"]').click();
        cy.contains('Login to your account').should('be.visible');
    }

    ingresarDatosLogin() {
        cy.get('input[data-qa="login-email"]').type('jherrera@test.com');
        cy.get('input[data-qa="login-password"]').type('herrera23');
        cy.get('button[data-qa="login-button"]').click();
    }

    validarLogueoCorrecto() {
        cy.contains(' Logged in as ').should('be.visible');
    }

    ingresarDatosErroneoLogin(email, password) {
        cy.get('input[data-qa="login-email"]').type(email);
        cy.get('input[data-qa="login-password"]').type(password);
        cy.get('button[data-qa="login-button"]').click();
    }

    validarLogueo() {
        cy.contains(' Your email or password is incorrect! ').should('be.visible');
    }
}

export default new LoginPage();