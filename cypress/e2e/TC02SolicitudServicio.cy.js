describe('TC02: Solicitud de Servicio', () => {
    it('Debería enviar la solicitud con los datos requeridos y recibir mensaje de confirmación', () => {
        // Visitar la URL principal
        cy.visit('https://elitecatering.netlify.app/');

        // Hacer clic en el botón de servicios
        cy.get(':nth-child(2) > a > strong').click();

        // Hacer clic en el botón de "más" del primer servicio
        cy.get(':nth-child(1) > .img_content > .img_servicio1 > .btn_info > a').click();

        // Hacer clic en el botón de "solicitar servicio"
        cy.get('.boton_servicio > a').click();

        // Llenar el formulario de solicitud
        cy.get('#nombreCliente').type('Alexa');
    });
});
