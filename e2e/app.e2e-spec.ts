import { GregKoverPage } from './app.po';

describe('greg-kover App', () => {
  let page: GregKoverPage;

  beforeEach(() => {
    page = new GregKoverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
