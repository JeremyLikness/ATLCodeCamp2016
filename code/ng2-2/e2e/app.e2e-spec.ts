import { Ng22Page } from './app.po';

describe('ng2-2 App', function() {
  let page: Ng22Page;

  beforeEach(() => {
    page = new Ng22Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
