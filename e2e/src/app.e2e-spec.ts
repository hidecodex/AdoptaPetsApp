import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Se deberia mostrar mensaje', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('AdoptaPetsAPP');
  });

  it('Deberia contener Botones Ingresar y Registarse', () => {
    page.navigateTo();
    expect(page.getPageBoton()).toContain('INGRESAR','REGISTRARSE');
  });

  
});
