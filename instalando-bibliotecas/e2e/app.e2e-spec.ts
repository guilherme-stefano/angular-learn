import { InstalandoBibliotecasPage } from './app.po';

describe('instalando-bibliotecas App', function() {
  let page: InstalandoBibliotecasPage;

  beforeEach(() => {
    page = new InstalandoBibliotecasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
