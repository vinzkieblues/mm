import { SkilldeerClassesPage } from './app.po';

describe('skilldeer-classes App', function() {
  let page: SkilldeerClassesPage;

  beforeEach(() => {
    page = new SkilldeerClassesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
