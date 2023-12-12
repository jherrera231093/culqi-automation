Feature: Login a web de pruebas

    Scenario: Login correcto en web de pruebas
        Given el usuario ingresa a la web
        When inicie sesion con las credenciales validas
        Then inicia sesion correctamente


    Scenario: Login incorrecto en web de pruebas
        Given el usuario ingresa a la web
        When inicia sesion con usuario "prueba_herrera@hotmail.com" con clave "joana"
        Then no inicia sesion
   