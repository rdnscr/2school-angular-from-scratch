import { AppPage } from "./app.po";

describe('My First Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Visits the initial project page', () => {
    page.navigateTo();
    page.getTitle().should('contain.text', 'Todo example');
  })
})
