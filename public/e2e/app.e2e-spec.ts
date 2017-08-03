import { PuprPage } from './app.po';

describe('pupr App', () => {
  let page: PuprPage;

  beforeEach(() => {
    page = new PuprPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
