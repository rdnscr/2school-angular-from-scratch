export class AppPage {
  navigateTo() {
    return cy.visit('/');
  }

  getTitle() {
    return cy.get('app-root .content h1');
  }
}
