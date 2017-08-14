import { AnonymousPage } from './app.po';

describe('anonymous App', () => {
  let page: AnonymousPage;

  beforeEach(() => {
    page = new AnonymousPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
