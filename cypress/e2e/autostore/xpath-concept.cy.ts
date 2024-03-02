///<reference types="Cypress" />
///<reference types="@cypress/xpath" />
describe("Here i write test cases uses xpath selecting concept", () => {
    it("first test case", () => {
        // here i write all the commands using xpath selectors
        cy.visit("https://www.automationteststore.com/");
        // cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get("a[href$='contact']").click()
        cy.xpath("//input[contains(@name,'first_name')]").type("Sukritan");
        cy.xpath("//input[contains(@id,'ContactUsFrm_email')]").type("sukritangupta@gmail.com");
        // cy.xpath("//textarea[contains(@name,'enquiry')]").type("I have a some queries regarding some updation");
        cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type("I have a some queries regarding some updation");
        cy.xpath("//button[contains(@title,'Submit')]").click();
    })
})