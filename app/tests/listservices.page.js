import { Selector } from 'testcafe';

class ListServicesPage {
  constructor() {
    this.pageId = '#list-services-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listServicesPage = new ListServicesPage();
