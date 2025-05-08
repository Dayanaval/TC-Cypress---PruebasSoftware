describe('TC02: Solicitud de Servicio', () => {
    it('Debería enviar la solicitud con los datos requeridos y recibir mensaje de confirmacion', () => {
        // PASO 1:Visitar la URL principal
        cy.visit('https://elitecatering.netlify.app/')

        // PASO 2:  Validar el tipo de letra
        cy.get('h1').should('have.css', 'font-family', '"Times New Roman", Times, serif')

        // PASO 3:  Validar el titulo de la pagina 
        cy.title().should('eq', 'ECS')

        // PASO 4:  Hacer click en el boton de servicios
        cy.get(':nth-child(2) > a > strong').click()

        // PASO 5:  Hacer click en el boton de "mas" de servicios
        cy.get(':nth-child(1) > .img_content > .img_servicio1 > .btn_info > a').click()

        // PASO 6:  Hacer click en el boton de "solicitar servicio"
        cy.get('.boton_servicio > a').click()

        // PASO 7:  Llenar el nombre
        cy.get('#nombreCliente').type('Juan Perez')

        // PASO 8: Llenar el telefono
        cy.get('#telefono').type('1234567899')

        // PASO 9: Llenar email 
        cy.get('#email').type('juan@gmail.com')

        // PASO 10: Llenar fecha
        cy.get('#fechaEvento').type('2023-10-12')

        // PASO 11: LLenar Tipo de Evento
        cy.get('#tipoEvento').select('Boda')

        // PASO 12: Llenar Hora 
        cy.get('#horaEvento').type('15:00')

        // PASO 13: Llenar Cantidad de Personas
        cy.get('#invitados').type('100')

        // PASO 14: Seleccionar servicio adicional
        cy.get('#decoracion').click()

        // PASO 15: Llenar mensaje adicional
        cy.get('#mensaje').type('Necesito un servicio de catering para una boda')

        // PASO 16: Hacer click en el boton de enviar
        cy.get('.btn').click()
        
        // PASO 17: Validar que el mensaje de confirmacion sea correcto
        cy.get('#mensajeBienvenida')

        // PASO 18: Validar contenido del mensaje de solicitud
        cy.get('#mensajeBienvenida')

        // PASO 19: Validar que el mensaje de confirmacion sea visible y contenga el texto esperado
        .should('be.visible')
        .should('contain', 'Solicitud Enviada')
        .should('contain', '¡Su solicitud sera revisada en breve!');
    })
})
