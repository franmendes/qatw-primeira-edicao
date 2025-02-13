export class DashPage {
  constructor(page) {
    this.page = page;
  }

  async acessaPagina() {
    await this.page.goto("http://paybank-mf-dashboard:3000/");
  }

  async obterSaldo() {
    return this.page.locator("#account-balance");
  }
}
