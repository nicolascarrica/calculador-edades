/// <reference types="Cypress" />

const URL = 'http://127.0.0.1:8080/Tarea1-clase6-nc.html';

context('Test calculador-edades', () => {
  before(() => {
    cy.visit(URL);
  });

  it('testea la funcionalidad del ejercicio', () => {
    cy.get('#cantidad-integrantes').type('2');
    cy.get('#siguiente-paso').click();
    cy.get('.integrante input').eq(0).type('20');
    cy.get('.integrante input').eq(1).type('18');
    cy.get('#calcular').click();


    cy.get('#promedio-edad').should('have.text', '19.00');
    cy.get('#menor-edad').should('have.text', '18');
    cy.get('#mayor-edad').should('have.text', '20');
  });
});

