describe('TC01: Inicio de Sesión', () => {
    it('Debería validar elementos y dar un mensaje de ingreso exitoso', () => {
        // PASO 1: Visitar la URL principal
        cy.visit('https://elitecatering.netlify.app/')//cy.visit('http://127.0.0.1:5500/index.html')
        
        // PASO 2: Validar que la URL sea correcta
        cy.url().should('eq', 'https://elitecatering.netlify.app/')//cy.url().should('eq', 'http://127.0.0.1:5500/index.html')

        // PASO 3: Validar que el título de la página sea correcto
        cy.get('h1').should('have.text', 'ELITE CATERING SERVICE')

        // PASO 4: Hacer clic en el botón de inicio de sesión
        cy.get('.btnIniciar > a').click()

        // PASO 5: Validar que la URL de inicio de sesión sea correcta y tenga el path de login
        cy.url().should('include', '/iniciarsesion')//cy.url().should('include', '/iniciarSesion.html')

        // PASO 6: Validar que los campos esten presentes y visibles
        cy.get('#email').should('be.visible')
        cy.get('#password').should('be.visible')

        // PASO 7: Validar que los valores igresados sean correctos
        cy.get('#email').type('elitecateringservice@gmail.com')
        cy.get('#password').type('12345678')

        // PASO 8: Validar mensaje de recuperación de contraseña
        cy.get('#enlaceRecuperacion').should('be.visible')
        cy.get('#mensajeRecuperacion').should('have.text', 
            'Comprueba tu dispositivo móvil.Hemos enviado un enlace para restablecer tu contraseña.')

        // PASO 9: Validar estilos del boton de inicio de sesión
        cy.get('button[type="submit"]').should('have.css', 'background-color', 'rgb(38, 41, 39)')

        // PASO 10: Hacer clic en el botón de inicio de sesión
        cy.get('button[type="submit"]').click()

        // PASO 11: Validar mensaje de bienvenida
        cy.get('#mensajeBienvenida').should('be.visible')
        cy.get('#mensajeBienvenida').should('have.text', 'Inicio de Sesión Exitoso')
    })
})