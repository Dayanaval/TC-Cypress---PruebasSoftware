describe('TC01: Inicio de Sesión', () => {
    it('Debería iniciar sesión correctamente y validar elementos', () => {
        // Visitar la URL principal
        cy.visit('https://elitecatering.netlify.app/')
        
        // Validar que la URL sea correcta
        cy.url().should('eq', 'https://elitecatering.netlify.app/')

        //Validar que el título de la página sea correcto
        cy.get('h1')

        // Hacer clic en el botón de inicio de sesión
        cy.contains('Iniciar Sesión').click()

        // Validar que la URL de inicio de sesión sea correcta y tenga el path de login
        cy.url().should('include', '/iniciarsesion')

        // Validar que los campos esten presentes y visibles
        cy.get('#email').should('be.visible')
        cy.get('#password').should('be.visible')

        // Validar que los valores igresados sean correctos
        cy.get('#email').type('elitecatering@gmail.com')
        cy.get('#password').type('12345678')

        // Validar estilos del boton de inicio de sesión
        cy.get('button[type="submit"]').should('have.css', 'background-color', 'rgb(38, 41, 39)')

        // Hacer clic en el botón de inicio de sesión
        cy.get('button[type="submit"]').click()



    })
})