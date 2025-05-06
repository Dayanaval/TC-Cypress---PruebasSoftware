describe('TC02: Solicitud de Servicio', () => {
    it('Debería enviar la solicitud con los datos requeridos y recibir mensaje de confirmacion', () => {
        // Visitar la URL principal
        cy.visit('https://elitecatering.netlify.app/')
        //Validar el tipo de letra
        cy.get('h1').should('have.css', 'font-family', '"Times New Roman", Times, serif');
        // Validar el titulo de la pagina 
        cy.title().should('eq', 'ECS')
        // Hacer click en el boton de servicios
        cy.get(':nth-child(2) > a > strong').click()
        // Hacer click en el boton de "mas" de servicios
        cy.get(':nth-child(1) > .img_content > .img_servicio1 > .btn_info > a').click()
        // Hacer click en el boton de "solicitar servicio"
        cy.get('.boton_servicio > a').click()
        // Llenar el nombre
        cy.get('#nombreCliente').type('Juan Perez')
        //Llenar el telefono
        cy.get('#telefono').type('1234567899')
        //Llenar email 
        cy.get('#email').type('juan@gmail.com')
        //Llenar fecha
        cy.get('#fechaEvento').type('2023-10-12')
        //LLenar Tipo de Evento
        cy.get('#tipoEvento').select('Boda')
        //Llenar Hora 
        cy.get('#horaEvento').type('15:00')
        //Llenar Cantidad de Personas
        cy.get('#invitados').type('100')
        //Seleccionar servicio adicional
        cy.get('#decoracion').click()
        //Llenar mensaje adicional
        cy.get('#mensaje').type('Necesito un servicio de catering para una boda')
        //Hacer click en el boton de enviar
        cy.get('.btn').click()
        //Validar que el mensaje de confirmacion sea correcto
        cy.get('#mensajeBienvenida')
        //Validar contenido del mensaje de solicitud
        cy.get('#mensajeBienvenida')
        //Validar que el mensaje de confirmacion sea visible y contenga el texto esperado
        .should('be.visible')
        .should('contain', 'Solicitud Enviada')
        .should('contain', '¡Su solicitud sera revisada en breve!');
        
        

        

    })
})
