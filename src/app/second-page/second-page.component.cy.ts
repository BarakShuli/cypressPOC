import { SecondPageComponent } from "./second-page.component";

describe('FirstPageComponent', () => {
it('should mount the app component', () => {
    cy.mount(SecondPageComponent);
});

});