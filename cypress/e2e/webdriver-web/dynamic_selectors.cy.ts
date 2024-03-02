///<reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("here i write the text cases using dynamic selectors",()=>{
    it("first test case",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // now i write all the commands using dynamic tags
        cy.get("input[name='first_name']").type("Sukritan ");
        cy.get("input[name='last_name']").type('Gupta');
        cy.get("input[name='email']").type("sukritangupta@fico.com");
        cy.get("textarea[name='message']").type("here i write all the comments");
        // for submit i use xpath selector 
        cy.xpath("//input[contains(@type,'submit')]").click();
    });
})