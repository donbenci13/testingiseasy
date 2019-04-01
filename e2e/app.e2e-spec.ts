import { AppPage } from './app.po';

describe('try-testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
    expect(page.getTestID()).toEqual('Here are some links to help you start:');
  });
});
