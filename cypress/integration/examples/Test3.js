/// <reference types="Cypress" />

describe('3th Test suite: Radio, Checkbox, Dropdown', function(){
    it('My First Test Case', function(){
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        
        //Radio buttons
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio2"]').check().should('be.checked').and('have.value','radio2')

        //Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
        
        //Static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic dropdown
        cy.get('input#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "India"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        //Visible - Invisible element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})