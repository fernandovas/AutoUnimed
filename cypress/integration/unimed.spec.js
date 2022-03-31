/// <reference types="cypress" />
 

it('Acessar Portal corporativo UNIMED', () => {
    cy.visit('https://portalhml.unimedbh.com.br/wps/portal/corp/inicio#!/#main-container')       
})

it('Validar Consulta Online Agora', () => {
    cy.get('.hidden-xl-up > .conecta-saude').click()
    cy.get('.btn-verde-fino').click()
})

it('Validar Agendamento Online', () => {
    cy.get('.hidden-xl-up > .agendamento-online').click()
    cy.get(':nth-child(1) > .btn-verde-fino').click()
    cy.get(':nth-child(1) > .btn-verde-fino').click()
})

it('Validar Guia médico e Rede', () => {
    cy.get('.hidden-xl-up > .guia-medico-rede').click()
    cy.get('[for="tipoPesquisaGuiaMedico"]').click()  
    cy.get('[for="tipoPesquisaGuiaRede"]').click()
    cy.get('[for="tipoPesquisaProcedimentos"]').click() 
})

it('Validar Notícias', () => {
    cy.get(':nth-child(4) > .btn-small-transparent').click()

})

it('Validar Menu Quem somos', () => {
    cy.get('.perfil_institucional > a').click()
    cy.get('.principais_numeros > a').click()
    cy.get('.sistema_unimed > a').click()
    cy.get('.areas_de_atuacao > a').click()

})

it('Validar Menu Governança', () => {
    cy.get('.governanca_corporativa > a').click()
    cy.get('.planejamento_estrategico > a').click()
    cy.get('.gestao_qualidade > a').click()
    cy.get('.integridade_corporativa > a').click()

})

it('Validar Fale com um consultor', () => {
    cy.get('.texto-botao-simule').click()
})
