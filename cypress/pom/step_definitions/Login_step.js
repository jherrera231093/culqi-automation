import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/Login_page';

Given('el usuario ingresa a la web', () => {
    LoginPage.openUrl();
})

When('inicie sesion con las credenciales validas', () => {
    LoginPage.abrirFormularioLogin();
    LoginPage.ingresarDatosLogin();
})

Then('inicia sesion correctamente', () => {
    LoginPage.validarLogueoCorrecto();
})

When('inicia sesion con usuario {string} con clave {string}', (username, password) => {
    LoginPage.abrirFormularioLogin();
    LoginPage.ingresarDatosErroneoLogin(username, password);
})

Then('no inicia sesion', () => {
    LoginPage.validarLogueo();
})