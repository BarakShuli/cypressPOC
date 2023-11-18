import { FirstPageComponent } from "./first-page.component";

describe('FirstPageComponent', () => {
it('should mount the app component', () => {
    cy.mount(FirstPageComponent);
});

it('should print the date and time in the console', () => {
    cy.mount(FirstPageComponent);
    let currentDateAndTimeContainer = cy.get('.current-date-and-time');
    cy.get('.startClockBtn').click();
    currentDateAndTimeContainer.should('be.visible');
});

// it('should navigate to the second page', () => {
//     cy.mount(FirstPageComponent);
//     cy.get('.navigateToSecondPage').click().location('pathname').should('include', '444');
//     // cy.url().should('include', '/secondPage');
// });

});