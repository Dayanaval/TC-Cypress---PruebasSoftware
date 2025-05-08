describe('TC01: Registro de usuario y validaciones generales', () => {
    it('Debería validar elementos del formulario, estilos ', () => {
        //Paso 1- Visitar la URL principal
        cy.visit('https://elitecatering.netlify.app/')
        
        //Paso 2 validar el titulo de la pagina
        cy.get('h1').should('have.text', 'ELITE CATERING SERVICE')
        
        //Paso 3- Validar el tipo de letra
        cy.get('h1').should('have.css', 'font-family', '"Times New Roman", Times, serif')

        //Paso 4 -Validar los estilos del boton de registro
        cy.get('.btnRegistro').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('.btnRegistro').should('have.css', 'border-radius', '50px')
        cy.get('.btnRegistro').should('have.css', 'border-style', 'solid')

        //paso 5- Dar click en el botton  "Registrarse"
        cy.get('.btnRegistro a').click()

        //Paso 6- Validar que sea la url correcta
        cy.url().should('eq', 'https://elitecatering.netlify.app/registrousuario')
        //Paso 7 -Ingresar los datos del formulario de registro y validar que los campos esten presentes y visibles
        cy.get('#nombre').type('Yuli Andrea') 
        cy.get('#nombre').should('be.visible')

        //Paso 8 -Ingresar el apellido y validar que el campo este presente y visible
        cy.get('#apellido').type('Montoya') 
        cy.get('#apellido').should('be.visible')

        //Paso 9 -Ingresar el correo y validar que el campo este presente y visible
        cy.get('#email').type('yuli.montoya@correo.tdea.edu.co')
        cy.get('#email').should('be.visible')   

        //Paso 10 -Ingresar la contraseña y validar que el campo este presente y visible
        cy.get('#password').type('12345678')    
        cy.get('#password').should('be.visible')  

        //Paso 11 -Click en registrarse y validar que el boton este presente y visible
        cy.get('button[type="submit"]').contains('Registrarse').click() 
    })
})